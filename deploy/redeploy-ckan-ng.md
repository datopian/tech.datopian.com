---
sidebar: auto
---


# Redeploy A frontend APP To CKAN Cloud

## Make changes to a deployed instance

Let's say you need to make several changes to the frontend app we created in [Deploy Frontend APP To CKAN Cloud](/deploy/deploy-ng.html):

- Enable a new theme.
- Deploy the latest version of [frontend-v2](https://github.com/datopian/frontend-v2)
- Updating Environment variables.

### Enable a new theme

All you need to do is update the Dockerfile. Frontend applications are Node-js apps that are cloned in the `themes` directory.

- Go to https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng/edit/master/Dockerfile
- Uncomment the commented part (remove)
  ```
  # RUN git clone https://cloud-service-account:password@gitlab.com/datopian/clients/[client-id] ./themes/client-id
  # RUN cd client-id && yarn && cd -
  ```
- Replace the `[client-id]` with the actual client name and save the changes.

**_Note:_** Client repos are usually private. You can re-use the token for the `cloud-service-account`.

### Update environment variables

In order to add/remove/update environment variables, you only need to change them in the `Dockerfile`. See other environment variables as an example. The conventon is:

```
ENV ENV_KEY=ENV_VALUE
```

## Deploy the new version of frontend-v2

We are not versioning frontend-v2, so all you need to do is trigger the latest GitLab-CI build.

- Go to https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng
- Click the Green tick button and restart

![](https://i.imgur.com/jsob5Ji.png)

This will trigger a new build, and the new image will include the latest commits from the master branch

## Redeploy

Commit the changes and wait until the build is successful.

![](https://i.imgur.com/v7b8Z1c.png)

::: tip
If the build is not successful, check its logs. You might have a typo in your branch, release name, etc...
:::

- Open [Deploy frontend instance](https://cc-p-jenkins.ckan.io/job/deploy%20frontend%20instance/)
- Click "Build with Parameters" button
- Fill `INSTANCE_NAME` parameter with `deploy-demo-exercise-ng`
- Fill `REGISTRY_REPO` parameter with `viderum/cloud-[instance-id]` (`viderum/cloud-deploy-demo-exercise-ng`)
- Click "Build" button

![](https://i.imgur.com/8GEjebX.png)


Wait for the successful build, and that's it! You've just deployed your changes to the CKAN cloud servers :rocket:
