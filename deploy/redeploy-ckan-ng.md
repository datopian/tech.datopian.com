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

All you need to do is update the Dockerfile. Frontend applications are Node-js apps that are colned in `themes` directory.

- Go to https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng/edit/master/Dockerfile
- Uncomment the commented part (remove)
  ```
  # RUN git clone https://cloud-service-account:sQ_K9yqyFvn93m_6wcNy@gitlab.com/datopian/clients/[client-id] ./themes/client-id
  # RUN cd client-id && yarn && cd -
  ```
- Replace the `[client-id]` - with the actuall client name and save the changes.

**_Note:_** Client repos are ussually private. You can re-use the token for `cloud-service-account`

### Update environment variables

In order to add/remove/update environment variables all you need is to add them to `Dockerfile`. See other environment variables as an example. The conventonis

```
ENV ENV_KEY=ENV_VALUE
```

## Deploy the new version of frontend-v2

We are not versioning fronten-v2, so all you need is to trigger the latest Gitlab-CI build.

- Got to https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng
- Click the Green tick button and restart

![](https://i.imgur.com/jsob5Ji.png)

This will trigger a new build and the new image will include the latest commits from the master  branch

## Redeploy

Commit the changes and wait until the build is successful.

![](https://i.imgur.com/v7b8Z1c.png)

::: tip
If the build is not successful check its logs. You might have a typo in branch, release name or similar...
:::

- Open [Deploy frontend instance](https://cc-p-jenkins.ckan.io/job/deploy%20frontend%20instance/)
- Build with Parameters
- Fil `INSTANCE_NAME` parameter with `deploy-demo-exercise-ng`
- Fill `REGISTRY_REPO` parameter with `viderum/cloud-[instance-id]` (`viderum/cloud-deploy-demo-exercise-ng`)
- Click "Build" button

![](https://i.imgur.com/8GEjebX.png)


Wait for the successful build and that's it! You've just deployed your changes to the CKAN cloud servers :rocket:
