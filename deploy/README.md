---
sidebar: auto
---

# Deploy To CKAN Cloud

As a developer, you will need to create, update, and deploy instances to Datopian servers. CKAN portals hosted by Datopian are living on Google Cloud Platform run by Kubernetes engine.

## Prerequisites

- Make sure you have access to [Datopian Jenkins](https://cc-p-jenkins.ckan.io/) account
- Make sure you have write permissions to [Datopian Gitlab account](https://gitlab.com/viderum)

::: tip
Please contact devops@datopian.com if you don’t have access to the Jenkins account or permissions to Datopian GitLab repos. 

If you have developer permissions on GitLab, you will be able to create a new repository, but you won't be able to push to it. This is because there won't be a default branch, and you will need to contact someone with at least maintainer permissions to create one for you, or change your permissions.
:::

## Deploy Guides

- [Deploy To CKAN Cloud](/deploy/deploy-ckan-classic)
- [Redeploy To CKAN Cloud](/deploy/redeploy-ckan-classic)
- [Deploy A Frontend APP To CKAN Cloud](/deploy/deploy-ckan-ng)
- [Redeploy A Frontend APP To CKAN Cloud](/deploy/redeploy-ckan-ng)
