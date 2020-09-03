# Data Flows and Factory

## Introduction

A Data Factory is a system for processing data using Data flows. Specifically:

* Flow = a work*flow* or processing *flow* for transforming or analysing data.
* Factory is the system for creating and orchestrating flows.

### Domain Model

* Tasks
* DAGs (Flows)
* Factory


## CKAN v3

The Data Factory system is called AirCan and is built on top of AirFlow. Components:

* Data Factory service: https://github.com/datopian/aircan. This is a set of AirFlow DAGs designed for common data processing operations in a DMS such as loading data into Data API storage.
* CKAN v2 extension: https://github.com/datopian/ckanext-aircan. This hooks key actions from CKAN into AirCan and provides an API to run flows (DAGs).
* GUI: Under development.

Status: Beta. AirCan and ckanext-aircan are in active use in production. GUI is under development.


## Links

* [Research](./research) - list of tools and concepts with some analysis
* [History](./history) - some previous thinking and work (2016-2019)


## Appendix: Our Previous Work

See also [History page](./history).

* http://www.dataflows.org/ - new system Adam + Rufus designed in spring 2018 and Adam led development on
  * https://github.com/datahq/dataflows
  * https://github.com/datahq/dataflows/blob/master/TUTORIAL.md
  * https://github.com/datahq/dataflows/blob/master/PROCESSORS.md
* https://github.com/datopian/dataflow-demo - Rufus outline on a very simple tool from April 2018
* https://github.com/datopian/factory - datahub.io Factory "The service is responsible for running the flows for datasets that are frequently updated and maintained by Datahub. Service is using Datapackage Pipelines is a framework for declarative stream-processing of tabular data, and DataFlows to run the flows through pipelines to process the datasets."

