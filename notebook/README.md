# Notebook

Our lab notebook. Our informal thoughts. Our very raw blog.

## 2020-05-15 @rufuspollock

`Project` should be the primary object in a DataHub/Data Portal -- not Dataset.

Why? Because actually this is more than a Dataset. For example, it includes issues or workflows. A project is a good name for this that is both generic and specific.

cf Git-hub e.g. Gitlab (and Github). Gitlab came later and did this right: it's primary object is a Project which hasA Repository. Github still insits on calling them repositories (see primary menu item which is "Create a new repository"). This is weird, a github "repository" isn't actually a github repository: it has issues, stats, workflows and even a discussion board now. Calling it a project is the accurate description and the repository label is a historical artifact when that was all it was. I sometimes create "repos" on Github just to have an issue tracker. Gitlab understands this and actually allows me to have projects without any associated repository.

TODO: take a screenshot to illustrate Gitlab and Github.

+flashes of insight. +datahub +data portal. +domain model.

## 2020-04-23 @rufuspollock

4 Stores of a DataHub

:::tip
Naming is one of the most important things -- and hardest!
:::

* MetaStore [service]: API (and store) of the metadata for datasets
* HubStore [service]: API for registry of datasets (+ potentially organizations and ownership relationships to datasets)
* BlobStore [service]: API for blobs of data
* StructuredStore [service]: API for structured data

Origins:

* Started using MetaStore in DataHub.io back in 2016
* Not used in CKAN v2
* Conceptually CKAN originally was MetaStore and HubStore.

In CKAN v2:

* MetaStore and HubStore (no explicit name) => main Postgres DB
* StructuredStore (called DataStore) => another separate Postgres DB
* BlobStore (called FileStore) => local disk (or cloud with an extension)

In CKAN v3: propose to separate these explicitly ...

## 2020-04-23 @rufuspollock

Data Portal vs DataHub vs Data OS

TODO: Is a Data Portal a DataHub? Is a DataHub a DataOS? If not, what are the differences?

+todo
