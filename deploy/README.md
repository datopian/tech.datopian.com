---
sidebar: auto
---

# Deploy To CKAN Cloud

As a developer you will need to create new instance and deploy to Datopian servers. CKAN portals hosted by Datopian are living on Google Cloud Platform run by Kubernetes engine.

## Prerequisites

- Make sure you have access to [Datopian Jenkins](https://cc-p-jenkins.ckan.io/) account
- Make sure you have write permissions to [Datopian Gitlab account](https://gitlab.com/viderum)

::: tip
Please contact devops@datopian.com if you don’t have access to the Jenkins account or permissions to create new project on GitLab.
:::

## Creating CKAN Portal - Deploying for first time

In order to deploy CKAN portal on Kubernetes cluster, you will need to first dockerize the CKAN application. For that you will need:

- `Dockerfile` to build an image.
- `.env` file To keep environment variables for an image.
- `.gitlab-ci.yml` To deploy an image to container registry.

Later Kubernetes will pull that image and build a portal using it.

We keep those file in private Gitlab Repositories.

Create new project in Gitlab:

- Navigate to https://gitlab.com/viderum
- Click "New Project" Button on the right
- Let's name it `cloud-deploy-demo-exercise`
  - We use following name convention: `cloud-[project-id]`
- Click "Create Project"

You should be able to see empty repository on https://gitlab.com/viderum/cloud-deploy-demo-exercise. Let's now add necessary files.

### Create Dockerfile

`Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image. Usually all you need is to copy `Dockerfile` from the existing project and modify per your needs.

- Click on "Add File" Button
- Copy everything from https://gitlab.com/viderum/cloud-deploy-demo/blob/master/Dockerfile and paste there
- Name the file `Dockerfile`
- Click "Commit Changes" Button

### Create .env file

Some of the CKAN configuration options can be defined as Environment variables on the server operating system. We keep this variables in `.env` file.

- Click `+` and choose "Add File"
- Copy everything from https://gitlab.com/viderum/cloud-deploy-demo/blob/master/.env
- Name the file `.env`
- Click "Commit Changes" Button

### Create .gitlab-ci.yml

`.gitlab-ci.yml` is responsible for running continuous deployments. It builds the newest image of portal and pushes to Gitlab registry. To create it:

- got to https://cc-p-jenkins.ckan.io/job/Initialize%20Gitlab/
- Click `Build with Parameters` button
- Change `viderum/cloud-instance-id` to `viderum/cloud-deploy-demo-exercise`
- Click `Build` button

![](https://i.imgur.com/9xGKXOd.png)

At this point you should have all 3 files in your repository.

![](https://i.imgur.com/15leOnP.png)

Wait until the Gitlab Build is successful.

![](https://i.imgur.com/cVopL51.png)

Green means build was successful and our image was deployed to Gitlab Container registry. That means we are ready to create new instance on K8 cluster. :rocket:

### Create Instance

Now we need to deploy the new image to CKAN Cloud

- Go to https://cc-p-jenkins.ckan.io/job/create%20new%20instance/
- Click `Build With Parameters` Button
- Update `INSTANCE_ID` and `GITLAB_REPO` inputs per your needs
- Click `Build` Button

![](https://i.imgur.com/0Dwzvct.png)

Wait until build is successful. Once done, that's it! Our instance is deployed to K8 cluster. Now let's create a route for it.

### Create route

We need now to create the route for your portal so that it's publicly accessible.

- Go to https://cc-p-jenkins.ckan.io/job/create%20route
- Click `Build With Parameters` Button
- Update `EXTRA_ARGS` with following: `instances-default deploy-demo-exercise deploy-demo-exercise`
- Set `DRY_RUN` to `no`
- Click `Build` button

![](https://i.imgur.com/fpOCZV2.png)

### Check it is working

That's It! :fireworks: You should now be able to visit https://deploy-demo-exercise.ckan.io and see the live portal.

![](https://i.imgur.com/qk8j15Z.png)

## Next steps

[Redeploy CKAN instance](/deploy/redeploy)
