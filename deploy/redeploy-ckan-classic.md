---
sidebar: auto
---

# Redeploy To CKAN Cloud

## Make changes to a deployed instance

Let's say you need to make several changes to the portal we created in [Creating CKAN Portal - Deploying for first time](/deploy/#creating-ckan-portal-deploying-for-first-time):

- Enable a new extension.
- Update the version of an existing extension.
- Update Environment variables.

### Install a new extension

::: tip
CKAN Extensions are installed inside the docker containers during the build with `pip install`. Normally, CKAN extensions are stored in GitHub repositories, and we install from there, but they can be stored anywhere (e.g. GitLab, PyPI, Bitbucket, etc...)

Extensions can be installed in the following ways:

- From master branch
- From new release or tag
- From the exact commit
:::


Let's install the [Hello World Extension](https://github.com/rclark/ckanext-helloworld) on our portal. To do this, we need to modify the Dockerfile - edit [cloud-deploy-demo-exercise Dockerfile](https://gitlab.com/viderum/cloud-deploy-demo-exercise/edit/master/Dockerfile) and uncomment the following line:
```
#RUN pip install --no-cache-dir git+https://github.com/rclark/ckanext-helloworld.git#egg=ckanext-helloworld
  ```

:::	tip
Alternatively, you can add that line to the existing `pip install` section:
```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git@fix-null-content-type#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/fix-null-content-type/requirements.txt &&\
    pip install --no-cache-dir git+https://github.com/okfn/ckanext-sentry.git#egg=ckanext-sentry && \
    pip install --no-cache-dir git+https://github.com/rclark/ckanext-helloworld.git#egg=ckanext-helloworld
```
:::

### Install requirements for an extension

Some extensions have their own dependencies that are usually placed in the same repositories under the name `requirements.txt` (or similar). In the example below, the second line is used to install the dependencies for the `ckanext-s3filestore` extension:

```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/requirements.txt &&\
    ...
```

### Update versions of extensions

Let's say we want to install the following extensions:

- ckanext-s3filestore from master branch
- ckanext-sentry from [0.0.1 release](https://github.com/okfn/ckanext-sentry/releases/tag/0.0.1)
- ckanext-helloworld from [b78a7815b1fa0fdc4347c47287587ab880965f07 commit](https://github.com/rclark/ckanext-helloworld/commit/b78a7815b1fa0fdc4347c47287587ab880965f07)

All you need to do is update the URLs appropriately:

```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/requirements.txt &&\
    pip install --no-cache-dir git+https://github.com/okfn/ckanext-sentry.git@0.0.1#egg=ckanext-sentry && \
    pip install -e git+https://github.com/rclark/ckanext-helloworld.git@b78a7815b1fa0fdc4347c47287587ab880965f07#egg=ckanext-helloworld
```

### Update environment variables

In order to add/remove/update environment variables, all you need to do is modify the [`.env`](https://gitlab.com/viderum/cloud-deploy-demo-exercise/blob/master/.env) file and save the changes.

## Redeploy

Commit the changes and wait until the build is successful.

![](https://i.imgur.com/v7b8Z1c.png)

::: tip
If the build is not successful, check its logs. You might have a typo in your branch, release name, etc...
:::

- Open [Deploy Instance Job](https://cc-p-jenkins.ckan.io/job/deploy%20instance/)
- Click "Build with Parameters"
- Choose the instance ID (`deploy-demo-exercise`) from dropdown
- Fill `REGISTRY_REPO` parameter with `viderum/cloud-[instance-id]` (`viderum/cloud-deploy-demo-exercise`)
- Click "Build" button

![](https://i.imgur.com/MeGaGOZ.png)

Wait for the successful build, and that's it! You've just deployed your changes to the CKAN cloud servers :rocket:

## Next Steps

[Deploy A Frontend APP To CKAN Cloud](/deploy/deploy-ckan-ng)
