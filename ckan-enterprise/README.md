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

High level overview of required steps:

| Name        | Description                          | Effort | ETA |
| ----------- | ------------------------------------ | ------ | --- |
| Init        | Select CKAN version and deploy to DX | s      | Q2  |
| Blobstore   | Integrate Giftless for raw storage   | s      | Q2  |
| DataLoader  | Develop Aircan for loading data      | m      | Q2  |
| DataLoader  | Integrate Aircan for loading data    | s      | Q2/3|
| Data API    | Integrate new Data API (read)        | m      | Q2  |
| Frontend    | Build a theme using PortalJS         | m      | Q2  |
| DataExplorer| Integrate into PortalJS              | s      | Q2  |
| Permissions | Develop permissions in read frontend | m      | Q3  |
| Auth        | Integrate                            | s      | Q3  |
