## Run A Data Migration Between Environments

:::tip
This article is still under testing and development.
:::

**Before migration please ensure that the source and the target Postgre SQL are running on same version if not there should not be any syntatical differences between versions**

1. Install kubectl and kubectx.
2. [Download the file containing the manifests](/dx-data-migration.yaml) and personalize it according to your needs. Most specifically: environment variables in `Secret/envvars`, and `ConfigMap/files`' `migrate.sh` file.
3. Apply the manifests in a new namespace:
    ```sh
    kubectx gke_ckan-cloud_europe-west1-c_ckan-cloud-prod-eu
    kubectl create namespace jobs-project-name
    kubectl -n jobs-project-name delete jobs `kubectl -n jobs-project-name get jobs -o custom-columns=:.metadata.name`
    kubectl -n jobs-project-name apply -f dx-data-migration.yaml
    ```
4. Run [a few provisioning SQL queries](https://gitlab.com/datopian/experiments/dx-terraform/-/blob/master/provision_cloud_sql_ckan.sql#L16-89).
5. Migrate the blobs into Google Cloud Storage.
    ```
    # Get a shell into Minio's CLI, deployed in ckan-cloud cluster and namespace
    $ kubectl exec -it -n ckan-cloud minio-mc-7b9549d546-vqq8s -- sh

    # Inside the pod, you have access to mc binary, which is essentially all you need
    $ mc config host list   # Get a list of all configured hosts

    # Copy something:
    $ mc cp -r prod/ckan/montreal-dev/uploads dx/dx-montreal-staging/
    ```
6. Update the permission of `uploads` so that they are publically accessible and the images for groups/organizations can be loaded
    ```
     gsutil -m acl ch -r -u AllUsers:R gs://<bucket-name>/<directory_location>

    # Example
    gsutil acl ch -r -u AllUsers:R gs://dx-test-staging/ckan/storage/uploads/group/

    You need to follow this step to all the file/images available in the directory as granting permission only to the directory doesn't make all files inside it public.
    ```

For reference, here are the most commonly used hosts that are already configured:

* `prod` is the main minio bucket that lives at cc-p-minio.ckan.io
* `gcs` is the Google Storage account in ckan-cloud project
* `dx` is the Google Storage from DX project

## References

* https://medium.com/mavenlink-product-development/migrating-postgres-to-google-cloud-sql-2637b1caab4d
* https://dba.stackexchange.com/questions/204490/how-to-restore-a-pg-dumpall-dump-without-create-index

## How To Improve It From Now On

1. Improve documentation.
2. Create something like a CLI in Python.
3. Create a Kubernetes Operator (can also be in Python). It does the same thing as 2, in the Kubernetes way.
