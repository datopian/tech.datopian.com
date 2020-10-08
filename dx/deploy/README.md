# DX User Guide

## Prerequisites

* Access to the cluster (ask the DevOps team about kubeconfig)
* [Argo CD CLI](https://argoproj.github.io/argo-cd/cli_installation/)
  * Get the executable suitable for your platform from [argo-cd releases](https://github.com/argoproj/argo-cd/releases)
  * Copy it in your `$PATH` (e.g. `/usr/local/bin`)
    * For the rest of this guide, we will assume an executable named `argocd`
* [Google Cloud SDK](https://cloud.google.com/sdk/docs/downloads-interactive)
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Recipes

### Deploy a project

#### Special prerequisites

* A Docker image of the needed CKAN instance (e.g. a CI artifact from a GitLab project)
* Access to Datopian's Cloudflare account

#### Create new project and modify templates

In order to deploy a new project we will need to update DX helm templates per your needs. To make life easier create a new repository for our project and add it as an origin remote to the [dx-helm-template](https://gitlab.com/datopian/experiments/dx-helm-template)

> NOTE: Replace \<project-name\> with the name of the project you want to create, e.g. "dx-helm-ed"

1. [Create a new GitLab repository](https://gitlab.com/projects/new?namespace_id=5587649) for the new deployment
1. Clone the deployment template and add the new repository as an origin remote 
    > \<repo-url\> is the URL of your new repo
    ```
    $ git clone https://gitlab.com/datopian/experiments/dx-helm-template <project-name>
    $ cd <project-name>
    $ git remote rename origin upstream
    $ git remote add origin <repo-url>
    ```
1. Customize the template (more info [here](#template-customization))
1. Add and commit your changes to the Git repository
    ```
    $ git add .
    $ git push -u --all origin
    ```

#### Create Tokens and connect to Argo CD

Time to create Argo CD application in order to continiously deploy new project. For that we need to connect to Argo CD, reserve a new namspace in kubernetes cluster, and get deploy tokens from Gitlab:

1. Create a read-only Deploy Token for the new repository (Settings > Repository > Deploy Tokens). 
1. Connect to the remote Argo CD and login using the CLI:

    ```
    $ kubectl port-forward service/my-release-argocd-server 8080:80
    $ argocd login localhost:8080
    ```
    If everything went well, you should be able to run `argocd proj list` next and see a list of all the projects.
1. Create a new, single `dev` environment project in Argo CD ([see the Appendix](#multiple-environments-deployment) for more examples and info regarding environments, e.g. staging, prod, etc.):
    > \<name\> is the name of the project
    > \<token-user\> and \<token-pasword\> are the token values from GitLab
    > \<project-path\> is the GitLab path, e.g. datopian/experiments/dx-helm-something
    ```
    $ argocd proj create <name> \
    --dest https://kubernetes.default.svc,<name>-dev \
    --src https://<token-user>:<token-password>@gitlab.com/<project-path>.git
    ```
1. Create a Kubernetes namespace (for multiple environments [see the Appendix](#multiple-environments-deployment), we will assume a single `dev` environment):
    > \<name\> is the name of the project
    ```
    $ kubectl create namespace <name>-dev
    ```
1. Create an Argo CD Application:
    > \<name\> is the name of the project
    ```
    $ argocd app create <name>-dev \
    --repo https://<token_user>:<token_password>@gitlab.com/<project_path>.git \
    --path <name> \
    --project <name> \
    --values values.yaml \
    --sync-policy automated \
    --auto-prune \
    --self-heal \
    --dest-server https://kubernetes.default.svc \
    --dest-namespace <name>-dev \
    --server localhost:8080
    ```

#### Add DNS entries

If Datopian is hosting the project, we need to add one or more DNS records to point to the new instance. Our domains are managed by Cloudflare, so in order to do this you need to either have access to their administrative area, or ask someone who has to do it for you.

First, all DNS entries need to point to the new cluster's load balancer, which lives at `nginx-prod-lb.datopian.com`.

Second, make sure you create DNS entries for all the URLs you need your deployment to respond to. For example, if you have a CKAN instance and a Node API client, both might need to be publicly acessible. Failing to create all DNS records declared in `values.yaml` as public URLs will result in failure to generate and deploy valid Let's Encrypt SSL certificates.


#### Create certificates

**If we control the domain**

Certificates will be created automatically by `cert-manager`. There are two key points which allow controlling how `cert-manager` reacts to your deployment:

1. The public URLs defined in `ingress.tls.hosts`.
The list of hosts defined in the ingress settings is picked up by `cert-manager` for generating certificates.

2. The value of `general.useProductionCerts`.
If set to `true`, it will use the **production** Let's Encrypt API to generate valid certificates recognized by all browers. If set to `false` (default) it will generate staging certificates using the staging Let's Encrypt server.

It is good practice to use the staging certificates until all the app aspects are settled. Using the production certificates while still tunign the deployment / fixing deployment issues might trigger too many requests to the ACME server and hit the rate limit, thus pausing new certificate requests for the entire domain (e.g. ckan.io or datopian.com) until the limit expires.


**If we use a client controlled domain**

When the client is controlling the domain and is pointing one or more subdomains to our new deployment, there is an extra step to be taken: there is a `ingress.enableExternal` value which by default is `false`. You need to set it to `true` in order to let `cert-manager` know which certificate issuer to use. For more info about how `cert-manager` is deployed and the way it works in our infrastructure, see [our `cert-manager` guide](https://gitlab.com/datopian/tech/devops/-/blob/master/quickstart-guide-to-cert-manager-in-k8s.md).


## Template customization


### File system structure

Rename the top level directory to match your project name (without environment name, e.g. `py-project`, not `py-project-staging`).

### Chart.yaml

* `name` - the name of the project
* `description` - the description

### Values YAML files

Each environment you deploy should have a specific values.\<env-name\>.yaml file, e.g. values.staging.yaml.
These files will be used when creating the environments within the cluster.

For now, we store all secret environment variables in the `ckan.ckan.env` key, and we're not going to use `sealedSecrets`.
We are currently working towards a better / easier to use implementation which would avoid plain text storing of variables.


## Changing dependency versions


### Solr

The default Solr version in our CKAN template is 6.6.6, which is newer than what some `ckan.io` instances are using. In some cases, you will want to run the earlier 5.5.5 version, to ensure compatibility with the existing code, or even bump it higher to the latest version for bleeding edge features.

> For higher versions of Solr (7.x, 8.x), authentication needs to be enabled for solr cores via Zookeeper. Global authentication will not work, as health and readiness checks will fail. As a workaround, we can enable authentication only on the core(s), but allow unauthenticated requests still. A dedicated mini-tutorial will follow.

Until recently, we were managing nested dependencies by doing custom CKAN chart builds. If you used that technique before, you might want to upgrade your existing deployments to use this much easier and cleaner way.

1. Adjust the `ckan.solr.image.tag` property in values.yaml
    ```yaml
    ckan:
      solr:
        image:
          tag: 5.5.5

    ```
1. Commit the update and push
    ```
    $ git commit -am 'Downgrade Solr to 5.5.5'
    ```
1. Profit! (i.e. go to Argo CD interface and watch the new Solr image being deployed)


## Post Installation tasks

In order to have everything set up and running, there are some (still) manual steps needed to make sure everything is deployed correctly:

### Solr initialization (6.x)


First get an archive of the Solr init package from CKAN Cloud Operator:

```
$ cd /tmp
$ curl -L -o master.zip http://github.com/datopian/ckan-cloud-operator/zipball/master/
$ unzip -d ckan-cloud-operator master.zip
$ cd /tmp/ckan-cloud-operator/datopian-ckan-cloud-operator-1d09aeb/ckan_cloud_operator/data/solr/ckan_default
$ zip -r - * > /tmp/ckan_default.zip
```

In order to Initialize Solr you need to identify a pod running Solr, send it the zip file then connect to it:

> \<namespace\> is a keyword to group your project assets under, e.g. montreal
> \<pod-name\> is the name of the pod obtained by kubectl
```
$ kubectl get pods -n <namespace>
$ kubectl cp -n <namespace> /tmp/ckan_default.zip <pod-name>:/tmp
$ kubectl exec -it -n <namespace> <pod-name> -- bash
```

Once you've logged in, push the transferred zip file to Solr:

```
$ curl -X POST \
--header "Content-Type:application/octet-stream" \
--data-binary @- \
"http://localhost:8983/solr/admin/configs?action=UPLOAD&name=ckan_28_default" < /tmp/ckan_default.zip

$ curl -v "http://localhost:8983/solr/admin/collections?action=CREATE&name=ckan&collection.configName=ckan_28_default&replicationFactor=3&numShards=1"
```


### CKAN database initialization


Same as with Solr, you need to identfy the CKAN pod and connect to it:

> \<namespace\> is a keyword to group your project assets under, e.g. montreal
> \<pod-name\> is the name of the pod obtained by kubectl
```
$ kubectl get pods -n <namespace>
$ kubectl exec -it -n <namespace> <pod-name> -- bash
```

Then run the init script manually inside the pod:

```
$ paster --plugin=ckan db init --config=production.ini

# others, e.g. validation extension
$ paster --plugin=ckanext-validation validation init-db --config=production.ini
```

Last, create a sysadmin user (or more users, as you wish):

> \<username\> is the name used by CKAN to identify the user
> \<email\> is the email used by CKAN to identify the user
> \<display-name\> is how the user's name should be displayed in CKAN
> \<password\> is the chosen password for the user to create
```
$ paster --plugin=ckan sysadmin \
add <username> email=<email> name=<display-name> password=<password> \
--config=production.ini
```

Any other `paster` operations or other CLI CKAN operations could be done at this point.


### Debugging


#### Argo CD UI

You get a real time overview of a deployed app if you click on it. Here are some things worth noting:

1. The items on the "map" are of different kinds: services, pods, ingresses, configmaps etc. To view them as a list or simplified map, check the top-right icons left to the logout control.
1. The items named "StatefulSet", abbreviated `sts`, are controlling pod replicas. You can click on them and you get to see a "Live manifest" for k8s, which you can modify and save. This is the equivalent of editing the manifests with `kubectl`, meaning in order to apply the new configuration you need to delete the replica pods (follow the arrows).
1. You can easily access real time logs by clicking on any pod and then on the "Logs" tab!

#### kubectl

Small cheatsheet to get things done with `kubectl`:

> \<namespace\> is a keyword to group your project assets under, e.g. montreal
> \<pod-name\> is the name of the pod obtained by kubectl
```shell
# Get a list of all the namespace names
$ kubectl get ns

# Get a list of all the pod names in <namespace>
$ kubectl get pods -n <namespace>

# Get a real time log view of a pod
$ kubectl logs -f -n <namespace> <pod-name>

# Get previous logs (e.g. useful when your container keeps restarting)
$ kubectl logs [<pod-name>] --previous

# Get a shell inside a pod
$ kubectl exec -it -n <namespace> <pod-name> -- bash
# If it doesn't work, maybe `bash` is not present as a shell!
$ kubectl exec -it -n <namespace> <pod-name> -- sh

```


## Updating deployed code

If you already deployed your application to the DX cluster (congratulations, BTW!), you might want to update the running code, i.e. pushing a new release. This usually involves rebuilding the image and recreating the pods:

1. Change the cloud image source code if needed in your project's GitLab repository.
1. Run the build pipeline so it produces a new image.
1. Rebuild the running CKAN pods by simply deleting them (either via Argo UI or `kubectl`). See [above](#debugging) for how to do that.


## Pinning down a CKAN Docker image version

If you need stricter version control over the deployed CKAN image, jsut use the `ckan.ckan.image.tag` property in the `values.yaml` file in your Helm chart. Please note that the Continuous Deployment flow will now be interrupted by the additional (explicit) action of updating the `values.yaml` file and committing / pushing the updates for the Helm chart. If automatic sync is enabled in your app, it will get deployed without any other intervention.

Either way, you will need an explicit action (deleting the pod to redeploy vs. updating the chart). It is up to you, as a maintainer, how you want to manage the deployment.


## Rolling back a release

For rolling back changes made to either Helm Chart or application code, you should write and push a new commit. Due to implementation details of Kubernetes, you might have to manually restart services (you can do that via Argo CD). For instance, if your application reads environment variables only on startup, it won't matter if Kubernetes replaced them while it's running. You should delete all running pods using them and Kubernetes should start recreating everything.
  

---
---
---

## Appendix

### Managing access with gcloud and kubectl

Assuming you have already been granted access to the cluster, this mini-guide will assist you setting up `kubectl` to operate the k8s node.

1. Run `gcloud init`
  * Assuming you never used it before, follow the wizard and log in
    * This will open a browser authorization window
  * You will be prompted a list of all your projects, choose `datopian-dx`
  * Do not go into Region and Zone selection, as it doesn't contain the value we are looking for.
    * However, if you already got in, don't panic. Just pick the value closest to what's [on this page](https://console.cloud.google.com/kubernetes/list?project=datopian-dx&organizationId=285806390298) - it should probably be `europe-west1-d`
1. Configure `kubectl` for access (note the manually assigned zone)
  * Run `gcloud container clusters get-credentials ckan-cloud-cluster --zone=europe-west1`
  ```
    $ gcloud container clusters get-credentials ckan-cloud-cluster --zone=europe-west1
    Fetching cluster endpoint and auth data.
    kubeconfig entry generated for ckan-cloud-cluster.

  ```

That's it, now any `kubectl` command will be issued in the context of the DX k8s project!

[Official guide here](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)

### Connecting to services in the cluster

In order to connect to the various services running in the cluster, you need forward their exposed port to your local environment using `kubectl`. Here's how:

* Get a list of all running services: `kubectl get services`
  * If your service is running within a namespace, first obtain its name, then use it in the command:
  ```
  $ kubectl get ns
  <list of namespaces here>
  $ kubectl get services -n ed-dev
  <list of services running inside "ed-dev" namespace>
  ```
* To get a local endpoint to the chosen service, use `kubectl`:
  ```
  $ kubectl port-forward service/my-service-name \
  [-n <namespace>] <local-port>:<service-port>
  ```

For example, to connect to a running Argo CD service inside the cluster:

```
$ kubectl port-forward service/my-release-argocd-server 8080:80
```

This will forward service's port 80 to your local port 8080, so opening your browser and pointing it to http://localhost:8080 will hit the Argo CD instance running in the cluster.

The current credentials are:

**Username:** `admin`
**Password:** The name of the pod running Argo CD 


### Multiple environments deployment

In order to have multiple environments, you need to define a few resources more, one for each extra environment you need:

- k8s paths
  e.g. `--dest https://kubernetes.default.svc,ed-dev`
- k8s namespaces
  e.g. `kubectl create namespace ed-dev`
- Argo CD applications
  e.g. `argocd app create ed-dev [...]`
- (optional, recommended) have one values.ENV.yaml file per environment
  (the order in which you declare the values.yaml files is also the order they override each other)
  
> Replace \<name\> with the name of the project
> Replace \<TOKEN_USER\> and \<TOKEN_PASSWORD\> with the values from GitLab
> Replace \<PROJECT_PATH\> with the GitLab path, e.g. datopian/experiments/dx-helm-something

Example:

> \<name\> is the name of the project
> \<token-user\> and \<token-pasword\> are the token values from GitLab
> \<project-path\> is the GitLab path, e.g. datopian/experiments/dx-helm-something

``` 
$ argocd proj create <name> \
--dest https://kubernetes.default.svc,<name>-staging \
--dest https://kubernetes.default.svc,<name>-production \
--src https://<token-user>:<token-password>@gitlab.com/<project-path>.git
```
Kubernetes namespaces:
```
$ kubectl create namespace <name>-staging
$ kubectl create namespace <name>-production
```

Argo CD application for `staging` env:

```
$ argocd app create <name>-staging \
--repo https://<token-user>:<token-password>@gitlab.com/<project-path>.git \
--path <name> \
--project <name> \
--values values.yaml \
--values values.staging.yaml \
--sync-policy automated \
--auto-prune \
--dest-server https://kubernetes.default.svc \
--dest-namespace <name>-staging \
--server localhost:8080

```

Argo CD application for `production` env:

```
$ argocd app create <name>-production \
--repo https://<token-user>:<token-password>@gitlab.com/<project-path>.git \
--path <name> \
--project <name> \
--values values.yaml \
--values values.production.yaml \
--sync-policy automated \
--auto-prune \
--dest-server https://kubernetes.default.svc \
--dest-namespace <name>-production \
--server localhost:8080
```

---
---
---

## Glossary

### Argo CD, Google Cloud and Kubernetes

**Argo CD** is a declarative, GitOps continuous delivery tool for Kubernetes.
More info on the [Argo CD website](https://argoproj.github.io/argo-cd/)

**Google Computing Services**, **Google Compute Platform** or more commonly **Google Cloud** is Google's infrastructure-as-a-service solution that Datopian is using. See more on the GC [about age](https://cloud.google.com/docs/overview/cloud-platform-services).

[Kubernetes](https://kubernetes.io/), also written as k8s, is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation.


### Argo CD taxonomy

#### Application

A group of Kubernetes resources as defined by a manifest. This is a Custom Resource Definition (CRD).

#### Project
    
The AppProject CRD is the Kubernetes resource object representing a logical grouping of applications.

#### Sync

The process of making an application move to its target state. E.g. by applying changes to a Kubernetes cluster.

#### Sync Status

Whether or not the live state matches the target state. Is the deployed application the same as Git says it should be?

<small>[More info](https://argoproj.github.io/argo-cd/core_concepts/)</small>

### Kubernetes key concepts

#### Namespace

Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces.

Namespaces provide a scope for names. Names of resources need to be unique within a namespace, but not across namespaces. Namespaces cannot be nested inside one another and each Kubernetes resource can only be in one namespace.

Namespaces are a way to divide cluster resources between multiple users (via resource quota).

<small>[More info](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)</small>

#### Pod

Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage/network resources, and a specification for how to run the containers. A Pod's contents are always co-located and co-scheduled, and run in a shared context. A Pod models an application-specific "logical host": it contains one or more application containers which are relatively tightly coupled. In non-cloud contexts, applications executed on the same physical or virtual machine are analogous to cloud applications executed on the same logical host.

<small>[More info](https://kubernetes.io/docs/concepts/workloads/pods/)</small>


### Deploy Tokens

Deploy Tokens allow access to packages, your repository, and registry images. They are single use credentials that allow the user to fine tune the level of access for each application using the designed GitLab access.

For deployment we normally only need read only access to the repository. In order to do that, the following boxes need to be ticked when creating a Deploy Token:

- read_repository
- read_registry
- read_package_registry

<small>[More info](https://docs.gitlab.com/ee/user/project/deploy_tokens/)</small>


### DNS

By default, in Datopian DNS entries are handled by Cloudflare.
