# How to Use the Developer Experience (DX) Setup

## Repositories

### dx-terraform

_https://gitlab.com/datopian/experiments/dx-terraform_

A Terraform project. Use it for provisioning Datopian's Kubernetes cluster on Google Cloud.

### dx-argocd

_https://gitlab.com/datopian/experiments/dx-argocd_

Helm Chart containing Argo CD. It monitors Git repositories with other Helm Charts, deploying, and maintaining them up-to-date in the Kubernetes cluster.

The folder `argo-cd` is a copy of [the open source Helm Chart maintained by the community](https://github.com/argoproj/argo-helm/tree/master/charts/argo-cd).

### dx-helm-template

_https://gitlab.com/datopian/experiments/dx-helm-template_

Template for projects meant to be deployed in the Kubernetes cluster.

### dx-helm-national-grid

_https://gitlab.com/datopian/experiments/dx-helm-national-grid_

Helm Chart for National Grid. Use it for deploying it to a Kubernetes cluster.

## Create the Cluster

Before running applications in the cluster, you need something: a cluster.

1. Create a new Google Cloud project.
2. [Create a Service Account](https://developers.google.com/accounts/docs/application-default-credentials) inside this new project. It should have [the roles listed in the module's documentation](https://github.com/terraform-google-modules/terraform-google-kubernetes-engine#configure-a-service-account).
    * Cloud SQL Admin.
    * Compute Admin.
    * Compute Network Admin.
    * Compute Storage Admin
3. Download the credentials file (in JSON) for this service account.
4. Enable the following Google Cloud APIs:
    * [Cloud Composer API](https://console.cloud.google.com/marketplace/product/google/composer.googleapis.com/overview)
    * [Cloud Resource Manager API](https://console.developers.google.com/apis/api/cloudresourcemanager.googleapis.com/overview)
    * [Cloud SQL Admin API](https://console.developers.google.com/apis/api/sqladmin.googleapis.com/overview)
    * [Compute Engine API](https://console.developers.google.com/apis/api/compute.googleapis.com/overview)
    * [Kubernetes Engine API](https://console.developers.google.com/apis/api/container.googleapis.com/overview)
    * [Service Networking API](https://console.developers.google.com/apis/api/servicenetworking.googleapis.com/overview)
5. [Create Secondary IP ranges](https://console.cloud.google.com/networking/subnetworks/details/europe-west1/default) for the selected network/region. _These values are based on the first cluster created with this Terraform setup._
    ```
    gke-ckan-cloud-cluster-pods     10.60.0.0/14
    gke-ckan-cloud-cluster-services 10.0.16.0/20
    ```
6. Create a Terraform Cloud account.
7. Create a workspace.
    1. Authorize GitLab. Terraform Cloud will monitor a repository containing the Terraform setup.
    2. Select [datopian/experiments/dx-terraform](https://gitlab.com/datopian/experiments/dx-terraform) as the workspace repository.
8. Customize Terraform variables following definitions in [`envs/dev/variables.tf`](https://gitlab.com/datopian/experiments/dx-terraform/-/blob/master/envs/dev/variables.tf). The following ones are specially relevant when using a new Google Cloud project:
    ```
    project_id
    datopian-dx

    compute_engine_service_account
    terraformcloud@datopian-dx.iam.gserviceaccount.com

    region
    europe-west1

    master_zone
    europe-west1-b
    ```
9. In Terraform Cloud, create an environment variable called `GOOGLE_CREDENTIALS` with the content of the Service Account JSON. Since it does not accept new line characters, you should remove them before. In VIM, do it with `%s;\n; ;g`.
10. Set "Terraform Working Directory" to `envs/dev` in [the settings](https://app.terraform.io/app/datopian/workspaces/dx/settings/general).

## Install Argo CD in the Cluster

We wrap projets meant to be deployed to the Kubernetes cluster using [Helm Charts](https://helm.sh/). [Argo CD](https://argoproj.github.io/argo-cd/) is a tool that monitors Git repositories for changes to these packages, and, when needed, creates new deployments with the latest versions.

1. From your local machine, install the [Helm CLI](https://helm.sh/docs/intro/install/).
2. From your local machine, connect your Docker Engine with the cluster in the cloud.
    ```
    gcloud container clusters get-credentials ckan-cloud-cluster \
      --region=europe-west1 \
      --project=datopian-dx
    ```
3. From your local machine, use the Helm CLI to install Argo in the cluster.
    ```
    helm repo add argo https://argoproj.github.io/argo-helm
    helm install my-release argo/argo-cd
    ```
4. **Temporarily, while we don't expose Argo CD to the internet:** Forward a local port to Argo CD Web UI:
    ```
    kubectl port-forward service/my-release-argocd-server -n default 8080:443
    ```
5. The default username is `admin`, while the password is the name of the Pod running Argo CD. Get its value with the following command:
    ```
    kubectl get pods -n default -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
    ```

Now, Argo CD Web UI should be accessible in https://localhost:8080/.
