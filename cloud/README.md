# Cloud

Manage a cluster of CKAN instances.

CKAN Cloud is open source tool to create and manage a cluster of CKAN instances and their associated services such as harvesting,

CKAN Cloud is created, maintained and supported by Datopian, the creators of CKAN. If you want professional support please contact us.

CKAN Cloud helps you:

* Create a cluster including is infrastructure (compute, databases etc)
* Create CKAN instances
* Manage those instances

It includes a UI and command line interface for creating CKAN instances within the cluster

It is uses kubernetes and runs against major cloud providers including: AWS, Google Cloud and Azure (want another cloud - open an issue).

## Components

* Wrapper
* K8s
* Infrastructure

## Getting Started

* Install it: pip install ...
* Choose cloud provider and get an account
* Run `ckan-cloud config` - it will prompt for your details
  * [OR] Create a config file using this template
* `ckan-cloud create {cluster-name}`

## CKAN Cloud UI

Implemented. Docs to come.
