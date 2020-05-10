# Blob Storage

Blob Storage can be provided via:

* Local file system
* Cloud storage


## Introduction

* Features
* Key Job stories (if lots have an appendix for full job stories)
* Key components


## Direct to Cloud Upload

Want: Direct upload to cloud storage ... But you need to authorize that ... So give them a token from your app

A sequence diagram illustrating the process for a direct to cloud upload:

```mermaid
sequenceDiagram

  participant browser as Client (Browser / Code)
  participant vfts as MetaStore
  participant bitstore as Your Primary App<br/>Cloud Access Giver
  participant storage as Cloud Storage
  
  browser->>browser: Select files to upload
  browser->>browser: calculate file hashes (if doing content addressable)
  browser->bitstore: get signed URLs(file1.csv URL, file2.csv URL, auth info)
  bitstore->>browser: signed URLs
  browser->>storage: upload file1.csv
  storage->>browser: OK
  browser->>storage: upload file2.csv
  storage->>browser: OK
  browser->>browser: Compose datapackage.json
  browser->>vfts: create dataset(datapackage.json, file1.csv pointer, file2.csv pointer, jwt token, ...)
  vfts->>browser: OK
```

Questions

* What is file structure in cloud ... i.e. What is the file path for uploaded files? Options:
  * Client chooses a name/path
  * Content addressable i.e. the name is given by the content? How? Use a hash.]
    * Beauty of that: standard way to name things. The same thing has the same name (modulo collisions)
    * Goes with versioning => same file = same name, diff file = diff name
* And do you enforce that from your app
  * Request for token needs to include the destination file path

## CKAN 2 (Classic)

TODO: discussion of current FileStore and ckanext-cloudstorage

## CKAN 3 (Next Gen)

* datahub.io has full implementation this via BitStore
* working client usage code in DataHub JS client SDK `push` method: https://github.com/datopian/datahub-client/blob/master/lib/utils/datahub.js#L33

## Research

### Azure

#### Can you do multi-part uploads with SAS in Azure? (and with the SDK?)

Not sure ... atm

See https://github.com/Azure/azure-storage-php/issues/170

https://docs.microsoft.com/en-us/rest/api/storageservices/put-block-list

https://github.com/ojczeo/vue-azure-multipart-upload

<mermaid />

