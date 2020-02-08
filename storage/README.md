# Data Storage for Data Portals

Data Portals often need to *store* data 😉 As such, they require a system for doing this. The systems for storing data can be classified into two types:

* [Blob Storage][] (aka Bulk or Raw): these store data as a raw stream of bytes like files on a filesystem.
* Structured Storage: storage that imposes some structure on the data (e.g. tabular row-oriented for a relational database)

:::tip
In CKAN 2 Blob Storage (and associated functionality) was known as FileStore and Structured Storage was known as DataStore.
:::

[Blob Storage]: /blob-storage/

