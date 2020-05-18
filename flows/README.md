# Data Flow and Factory

A Data Flow is a work*flow* or processing *flow* for transforming or analysing data. A Factory is the system for creating and orchestrating these flows.

In a data system, a Flow is fundamental *operation* whilst the Dataset is the fundamental *object*.

```
    Data      <--->    Transformations

  Row                     Operator
  File                      Flow 
  Dataset                 Factory
````

Flows are therefore complementary to Data.

NTS

* A factory could be a (DA)G of flows b/c could be dependencies between them ... e.g. run ComputeKeyMetrics only after all other flows have run ...
* But not always like that: flows can be completely independent.

## Features (Job Stories)

As a Data Engineer i want to build data pipeline / flow quickly so that I can get hacking ... 

* Don't want massive fancy system
* Something i can get started in 5m with
* But is extensible

## Domain Model

A Processor is a single operator on a unit of data e.g. a row (or a file).

A (Data) Flow is a DAG of processors starting from one or more sources and ending in one or more sinks. Note the simple case of a linear flow is very common.

A (Data) Factory consists of one or more flows

## Key Components

```
      Factory - Runners, SaaS platform etc

datapackage-pipelines -> (dataflows-server / dataflows-runner)
dataflows-cli : generators, hello-world, 'init', 'run'
goodtables.io
"blueprints": standard setups for a factory (auto-guessed?)

            DataFlows: Flow Libs

dataflows : processor definition and chaining
processors-library: stdlib, user contributed items [dataflows-load-csv]

            Data Package Libs

data.py, DataPackage-py, GoodTables, ...
tabulator, tableschema
```


Factory =>  Assembly, Production Lines, Processors/Tasks

Pipelines => Factory, Flows           , Processors/Tasks

## Our work

* http://www.dataflows.org/ - new system Adam + Rufus designed in spring 2018 and Adam led development on
  * https://github.com/datahq/dataflows
  * https://github.com/datahq/dataflows/blob/master/TUTORIAL.md
  * https://github.com/datahq/dataflows/blob/master/PROCESSORS.md
* https://github.com/datopian/dataflow-demo - Rufus outline on a very simple tool from April 2018
* https://github.com/datopian/factory - datahub.io Factory "The service is responsible for running the flows for datasets that are frequently updated and maintained by Datahub. Service is using Datapackage Pipelines is a framework for declarative stream-processing of tabular data, and DataFlows to run the flows through pipelines to process the datasets."

### FAQs

* how is this different from data package pipelines
  * No need for yaml files
  * All processing code can be written in a single Python file
  * Can be combined with other Python code
  * Runs in one process (dpp uses multiple processes)
* how do i find processors
  * Quite a lot of modification processors exist (i.e. modify the data)
  * A few dumpers exist (file, zip, sql-db, s3, ...)
  * One loader atm (but we're planning to add more)
  * --> need to think of registry (perhaps README is not a good place for that?)
* how do i create processors
  * Tutorial covers this
* How do I do debugging ... 

### How is this different from X?

Key points are:
* Simple
* Quick
* Lightweight

Different from X

* Luigi & Airflow
    * These are task runners - managing a dependency graph between 1000s of tasks. 
    * Neither of them focus on actual data processing and are not a data streaming solution. Tasks do not move data from one to the other.
* Nifi
    * Server based, Java, XML - not really suitable for quick prototyping 
* Cascading
    * Only Java support
* Bubbles http://bubbles.databrewery.org/documentation.html - https://www.slideshare.net/Stiivi/data-brewery-2-data-objects
* mETL https://github.com/ceumicrodata/mETL mito ETL (yaml config files)

<mermaid />
