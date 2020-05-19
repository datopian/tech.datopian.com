# CKAN v3

CKAN v3 aka "next gen".

TODO: consolidate [Next Gen page](/next-gen/) with this one.

## 4 Stores of a DataHub

:::tip
Naming is one of the most important things -- and hardest!
:::

* MetaStore [service]: API (and store) of the metadata for datasets
* HubStore [service]: API for registry of datasets (+ potentially organizations and ownership relationships to datasets)
* BlobStore [service]: API for blobs of data
* StructuredStore [service]: API for structured data

Origins:

* Started using MetaStore in DataHub.io
* Not used in CKAN v2
* Conceptually CKAN originally was MetaStore and HubStore.

In CKAN v2:

* MetaStore and HubStore (no explicit name) => main Postgres DB
* StructuredStore (called DataStore) => it must be another Postgres DB
* BlobStore (called FileStore) => local disk (or cloud with an extension)

In CKAN v3: propose to separate these explicitly ...

## Data Portal vs DataHub vs Data OS

TODO: Is a Data Portal a DataHub? If not, what are the differences.
