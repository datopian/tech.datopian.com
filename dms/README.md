# DMS (Data Management System)

This document is an introduction to the technical design of Data Management Systems (DMS). This also covers Data Portals since Data Portals are one major solution one can build with a data management system.

## Domain Model

* Project: a data project. It has has a single dataset in the same way GitHub or Gitlab "project" has a single repo.
* Dataset
* Resource (or File)

Revisioning
 
* Revision
* Tag
* (Branch)

Presentation

* View
* Showcase
* Data API

Identity and Permissions

* Account
* Profile
* Permission

Data Factory

* Task
* DAG (Pipeline)
* Run (Job)

## Actions / Flows [component]

* View Dataset: [Showcase page] a page displaying the dataset (or a resource)
  * View a Revision / Tag / Branch:
* Add / Upload: ...
* Tag

## Components

* **Meta~~Store~~Service**: stores dataset metadata (and revisions)
* **HubStore**: stores all the users, organizations and their connections to the datasets.
* **SearchStore + Service**: search index and API
* **BlobStore**: stores blobs (for files)
