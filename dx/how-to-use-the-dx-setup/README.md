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
3. Download the credentials file (in JSON) for this service account.
4. Enable the following Google Cloud APIs:
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

## Deploy a New Application

Currently, we can separate the process of deploying new applications in two parts:

1. Create repository for the project's Helm Chart.
2. Create application in Argo CD.

Argo CD will then continously syncronize the state of the cluster's deployment with the Git repository. From that moment on, you should be able to make all the changes by only touching application code (e.g., your Flask server, your Python libraries) or deployment specification (i.e., your new Helm Chart).

Let's start by first creating the repository.

1. Create a new Git repository based on the company's Helm Chart template:
    ```
    git clone https://gitlab.com/datopian/experiments/dx-helm-template
    cd dx-helm-template
    git remote rename origin upstream
    ```
2. Now, [create a new GitLab repository](https://gitlab.com/projects/new?namespace_id=5587649) for this project's deployment.
3. Customize the template Helm Chart to your needs.
4. Push the local repository to GitLab.
    ```
    git remote add origin [URL_OF_THE_NEW_GITLAB_REPOSITORY]
    git push -u --all origin
    ```

Now, you must tell Argo CD to start managing a deployment for this new Helm Chart.

1. Create a read-only Deploy Token (Settings > Repository > Deploy Tokens) to give Argo CD access to the GitLab repository. Copy both username and password generated by GitLab.
2. From your local machine, install the [Argo CD CLI](https://argoproj.github.io/argo-cd/cli_installation/).
3. Give Argo CD CLI the credentials for the accounts you used for signing in via the UI.
    ```
    argocd login localhost:8080
    ```
4. Create a new project in Argo CD. Inside this project, you will deploy the different environments you need. Since each environment stays in a different Kubernetes namespace (to prevent one environment conflict to another), you need to tell Argo CD that this project may deploy to different namespaces. In this example, they are `nationalgrid-dev` and `nationalgrid-staging`. Replace `nationalgrid` with the name of your new project.
    ```
    argocd proj create nationalgrid \
        --dest https://kubernetes.default.svc,nationalgrid-dev \
        --dest https://kubernetes.default.svc,nationalgrid-staging \
        --src https://USERNAME:PASSWORD@gitlab.com/datopian/experiments/dx-helm-national-grid.git
    ```
5. Create a Kubernetes namespaces for each of the environments.
    ```
    kubectl create namespace nationalgrid-dev
    kubectl create namespace nationalgrid-staging
    ```
6. Create the application in Argo CD. Replace `nationalgrid`, `repo`, and `path` parameters with proper values for the new project. In the `repo` parameter, you should use the credentials from the GitLab Deploy Token. The `values` parameters will contain the values specific for this project/environment:
    ```
    argocd app create nationalgrid-staging \
      --repo https://USERNAME:PASSWORD@gitlab.com/datopian/experiments/dx-helm-national-grid.git \
      --path nationalgrid \
      --project nationalgrid \
      --values values.yaml \
      --values values.staging.yaml \
      --sync-policy automated \
      --auto-prune \
      --dest-server https://kubernetes.default.svc \
      --dest-namespace nationalgrid-staging \
      --server localhost:8080
    ```
7. Add a DNS entry for the project (and the ingress defined in `values.yaml` or `values.[env].yaml`) in Cloudflare.

Now, access the newly deployed application in the address defined in Cloudflare. -- ask Irio to define an address.

After you have your new app address defined in Cloudflare, you have to [create certificate](https://gitlab.com/datopian/tech/devops/-/blob/master/quickstart-guide-to-cert-manager-in-k8s.md). 
For dev/test purposes you can access your new app at `localhost:3000` by port-forward: 
`kubectl port-forward service/aircan-dev-dx-ckan-aircan -n aircan-dev 3000:80` from the `cli`.
