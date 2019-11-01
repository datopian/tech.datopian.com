# Deploy To CKAN Cloud

As a developer, you will need to deploy changes to Datopian servers. CKAN portals, hosted by Datopian, are living on Google Cloud Platform run by Kubernetes engine.

## Prerequisites

- Make sure you have access to [Datopian Jenkins](https://cc-p-jenkins.ckan.io/) account
- Make sure you have write permissions to [Datopian Gitlab account](https://gitlab.com/viderum)

:::info
Please contact devops@datopian.com if you don’t have access to the Jenkins account or permissions to create new project on GitLab.
:::

## Make changes to a deployed instance

Let's say you need to make several changes to the portal we created in [Creating CKAN Portal - Deploying for first time](/deploy/#creating-ckan-portal-deploying-for-first-time):

- Enable a new extension.
- Update the version of an exsiting extension.
- Updating Environment variables.

### Install a new extension

:::	info
CKAN Extensions are installed inside the docker containers during the build with `pip install `. Normally CKAN extensions are stored in github repositories, and we install from there. But it can actually be any place (e. g. GitLab, PyPI, Bitbucket, etc...)

This way we can install extensions

- From master branch
- From new release or tag
- From the exact commit
:::


Let's install the [Hello World Extension](https://github.com/rclark/ckanext-helloworld) on our portal. For that we need to modify the Dockerfile - edit [cloud-deploy-demo-exercise Dockerfile](https://gitlab.com/viderum/cloud-deploy-demo-exercise/edit/master/Dockerfile) and uncomment the following line:
```
#RUN pip install --no-cache-dir git+https://github.com/rclark/ckanext-helloworld.git#egg=ckanext-helloworld
  ```

:::	info

Alternatively, you can add that line to the existing `pip install` section:
```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git@fix-null-content-type#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/fix-null-content-type/requirements.txt &&\
    pip install --no-cache-dir git+https://github.com/okfn/ckanext-sentry.git#egg=ckanext-sentry && \
    pip install --no-cache-dir git+https://github.com/rclark/ckanext-helloworld.git#egg=ckanext-helloworld
```
:::

### Install requirements for an extension

Some extensions have their own dependencies that are usually placed in the same repositories under the name `requirements.txt` (or similar). Eg the second line in the example below is exactly doing that

```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/requirements.txt &&\
    ...
```

### Update versions of extensions

Let's say we want to install

- ckanext-s3filestore from master branch
- ckanext-sentry from [0.0.1 release](https://github.com/okfn/ckanext-sentry/releases/tag/0.0.1)
- ckanext-helloworld from [b78a7815b1fa0fdc4347c47287587ab880965f07 commit](https://github.com/rclark/ckanext-helloworld/commit/b78a7815b1fa0fdc4347c47287587ab880965f07)

All you need to do is update URLs appropriately:

```
RUN pip install --no-cache-dir git+https://github.com/datopian/ckanext-s3filestore.git#egg=ckanext-s3filestore && \
    pip install --no-cache-dir -r https://raw.githubusercontent.com/datopian/ckanext-s3filestore/requirements.txt &&\
    pip install --no-cache-dir git+https://github.com/okfn/ckanext-sentry.git@0.0.1#egg=ckanext-sentry && \
    pip install -e git+https://github.com/rclark/ckanext-helloworld.git@b78a7815b1fa0fdc4347c47287587ab880965f07#egg=ckanext-helloworld
```

### Update environment variables

In order to add/remove/update environment variables all you need is to modify [`.env`](https://gitlab.com/viderum/cloud-deploy-demo-exercise/blob/master/.env) file and save changes.

## Redeploy

Commit the changes and wait until the build is successful.

![](https://i.imgur.com/v7b8Z1c.png)

:::danger
If the build is not successful check its logs. You might have a typo in branch, release name or similar...
:::

- Open [Deploy Instance Job](https://cc-p-jenkins.ckan.io/job/deploy%20instance/)
- Build with Parameters
- Choose the instance ID (`deploy-demo-exercise`) from dropdown
- Fill `REGISTRY_REPO` parameter with `viderum/cloud-[instance-id]` (`viderum/cloud-deploy-demo-exercise`)
- Click "Build" button

![](https://i.imgur.com/MeGaGOZ.png)

Wait for the successful build and that's it! You've just deployed your changes to the CKAN cloud servers :rocket:
