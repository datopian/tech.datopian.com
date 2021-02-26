This is the step by step guide of how to setup GitOps-style continuous delivery with Cloud Build for CKAN projects.

## How it works

- Each CKAN project has it's own private repository on Github following name convention of http://github.com/datopian/dx-helm-[project-id]
- Each repository has at least
  - `Dockerfile` - Configurations for building CKAN images
  - `values.yaml` - Caring all necessary configurations and values for [Ckan Helm Charts][chc]
  - `cloudbuild.yaml` - Configurations for triggering Google Cloud Builds
- Each CKAN project needs GCB trigger created, so that CI/CD works on `git push`
- Google Cloud Build is listening for changes in Github repository and Triggers various CI/CD jobs on `git push`:
  - Build New CKAN Image
  - Validates Helm configurations
  - Deploys Changes to GKE Kubernetes Cluster

## Before you begin

__Note:__ This section is only useful if working with a new projects, initial steps should be done once per project. You can skip if you working with familiar project Eg: `datiopian-dx`

We are using [Google Cloud Builds][gcb] to build new CKAN images and deploy them to [GKE (Google Kubernetes Engine)][gke] using helm. At the moment we run our cluster under datiopian-dx projects, but potentially this can be done to any other projects. You can always check [Google's official documentations][official-docs] but shortly it goes like this:

- You might need to enable billing for your project
  - Select or create a Cloud project: https://console.cloud.google.com/cloud-resource-manager
  - Enable billing for your project: https://cloud.google.com/billing/docs/how-to/modify-project
- You might need to create GKE instance: https://console.cloud.google.com/kubernetes
- Add helm tool builder to Gcloud Builds: https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/helm#building-this-builder

[gcb]: (https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build#create_the_continuous_integration_pipeline)
[gke]: https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-gke
[chc]: https://gitlab.com/datopian/deploy-templates/dx-helm-ckan
[official-docs]: https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build#create_the_continuous_integration_pipeline

## DX CLI Tool

Ideally, all of these will be automated in a few commands of DX CLI in near future and we don't need to setup triggers or create repositories manually. But that's still WIP at this point of time. In any case there already are few commands almost ready to help you and not start everything from  scratch, such as

- `dx init`
- `dx config`

### Install DX CLI Tool with PIP

```bash
pip install git+ssh://git@gitlab.com:datopian/experiments/dx.git
```

## Creating Project

Every new project has it's own private Github repository with configuration files described above. You can

- Either copy repository from existing project and update files per your needs (Eg update project id, names, etc...)
- Or run `dx init PROJECT_NAME` to create new project with some defaults
- Git push changes to remote repository

## Creating Trigger

Once we have Github repository ready we need to ad CI/CD to it. For that we need to create trigger

- Got to Google Cloud Build Trigger https://console.cloud.google.com/cloud-build/triggers
- Click Create new trigger
  - Name trigger after a project
  - In the Source Seaction click Connect new repository
  - Select `GitHub (Cloud Build GitHub App)` and authenticate.
  - Find the repository name you created in previous steps and click on Connect Repository

This should be enough for creating triggers. You should now be able to see running builds in `History` section

## Helm Configurations

`values.yaml` is main configuration file used for deploying CKAN instances. It's used by helm later to deploy changes. For full list of values reference see https://gitlab.com/datopian/deploy-templates/dx-helm-ckan/-/blob/master/VALUES.md
