# CKAN Enterprise

## Introduction

CKAN Enterprise is our name for what we hope would become our standard "base" distribution for CKAN going forward. It consists of the following:

* CKAN 2.8 + dependencies (probably we'll use later versions, eg, 2.9 or 2.10 etc.)
* CKAN v3 blob storage following https://tech.datopian.com/blob-storage/#ckan-3-next-gen
  * https://github.com/datopian/giftless
  * https://github.com/datopian/ckanext-external-storage
  * https://github.com/datopian/ckanext-authz-service
* etc.

At some point soon it would also include AirCan setup (instead of DataPusher) but this is not yet there yet as of Nov 2020.

[Future] We would also want it be easy to add common other features e.g.

* Harvesting
* ...

## Roadmap 2021 and beyond

|                   | Current                                                                                    | CKAN Enterprise                                                 |
|-------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Raw storage       | Filestore                                                                                  | Giftless                                                        |
| Data Loader (db)  | DataPusher extension                                                                       | Aircan                                                          |
| Data Storage (db) | Postgres                                                                                   | Any database engine. By default, Postgres                       |
| Data API (read)   | Built-in DataStore extension's API including SQL endpoint                                  | GraphQL based standalone micro-service                          |
| Frontend (public) | Build-in frontend into CKAN Classic python app (some projects are using nodejs app)        | PortalJS or nodejs app                                          |
| Data Explorer     | ReclineJS (some projects that uses nodejs app for frontend have React based Data Explorer) | GraphQL based Data Explorer                                     |
| Auth              | Traditional login/password + extendable with CKAN Classic extensions                       | SSO with default Google, Github, Facebook and Microsoft options |
| Permissions       | CKAN Classic based permissions                                                             | N/A                                                             |

## Timeline 2021

To develop a base distribution of CKAN Enterprise, we want to build a demo project with the features from the roadmap. This way we can:

* understand its advantages/limitations;
* compare against other instances of CKAN;
* demonstrate for the potential clients.

High level overview of the planned features with ETA:

| Name                          | Description                          | Effort | ETA |
| ----------------------------- | ------------------------------------ | ------ | --- |
| [Init](#Init)                 | Select CKAN version and deploy to DX | xs     | Q2  |
| [Blobstore](#Blobstore)       | Integrate Giftless for raw storage   | s      | Q2  |
| [Versioning](#Versioning)     | Develop/integrate new versioning sys | l      | Q2  |
| [DataLoader](#DataLoader)     | Develop/integrate Aircan             | xl     | Q2  |
| [Data API](#Data-API)         | Integrate new Data API (read)        | m      | Q2  |
| [Frontend](#Frontend)         | Build a theme using PortalJS         | m      | Q2  |
| [DataExplorer](#DataExplorer) | Integrate into PortalJS              | s      | Q2  |
| [Permissions](#Permissions)   | Develop permissions in read frontend | xl     | Q3  |
| [Auth](#Auth)                 | Integrate                            | s      | Q3  |

### Init

Initialize a new project for development of CKAN Enterprise.

Tasks:

* Boot project in Datopian-DX cluster
* Use CKAN v2.8.x (latest patch) or 2.9.x
* Don't setup DataPusher
* Namespace: `ckan-enterprise`
* Domain: `enterprise.ckan.datopian.com`

### Blobstore

https://tech.datopian.com/blob-storage/#blob-storage

### Versioning

https://tech.datopian.com/versioning/design/#versioning

### DataLoader

https://tech.datopian.com/load/#introduction

### Data API

* Install new [Data API service](https://github.com/datopian/data-api) in the project
* Install Hasura service in the project
* Set it up to work with DB of CKAN Enterprise
* Read more about Data API here https://tech.datopian.com/data-api/#read-api-3

Notes:

* We could experiment and use various features of Hasura, eg:
  * Setting up row/column limits per user role (permissions)
  * Subscriptions to auto load new data rows

### Frontend

PortalJS for the read frontend of CKAN Enterprise. Read more https://tech.datopian.com/frontend/#frontend.

### DataExplorer

A new Data Explorer based on GraphQL API: https://github.com/datopian/data-explorer-graphql

### Permissions

https://tech.datopian.com/permissions/#permissions-authorization

### Auth

Next generation, Kratos based, authentication (mostly SSO with no Traditional login by default) with following options out of the box:

* GitHub
* Google
* Facebook
* Microsoft

Easy to add:

* Discord
* GitLab
* Slack
