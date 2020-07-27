# Publish Data

Publish is our term for the entire functional area covering creating and editing datasets and/or resources including data upload.

Publication can be usefully divided into the following cases:

* Manual: publication is done by people via a user interfaces or other tool
* Programmatic: publication is done programatically using APIs and is usually part of automated processes
* Hybrid: which combines manual and programmatic, for example, harvesting where setup and configuration may be done in a UI by a person and then the process runs automatically and programmatically. In addition, new harvesting flows require programmatic setup.

**Focus on Manual** we will focus on the manual in this section: programmatic is by nature largely up to the client programmer (assuming the APIs are there) whilst [Harvesting][] has a section of its own. That said, many concepts here are relevant for other cases e.g. material on [profiles][] and [schemas][].

**Data uploading**: included in publish is the process of uploading data into the DMS, and specifically into [storage][] and especially [(blob) storage][blob].
.

[Harvesting]: /harvesting/
[profiles]: /glossary/#profile
[schemas]: /glossary/#schema
[storage]: /storage/
[blob]: /blob-storage/

## Examples

At its simplest, a publishing process can be simply a form to provide some metadata about a data file or dataset -- with the data itself stored elsewhere. This could be appropriate for a classic pure catalog application.

At the other end of the spectrum, we could have a multi-stage and complex process including, for example:

* multiple (simultaneous) resource upload with shared metadata e.g. I'm creating a timeseries dataset with the last 12 months of data and I want each file to share the same column information but to have different titles
* a variety of metadata profiles
* data validation (prior to ingest) including checking for PII (personally identifiable infromation) 
* complex workflow related to approval e.g. only publish if at least two people have approved
* embargoing (only make public at time X)

## Features

## Job Stories

:::tip
A resource is any data item in a dataset e.g. a file.
:::

When adding a resource to a dataset I want metadata pre-entered for me (e.g. resource name from file name, encoding, ...) to save time and reduce errors

When adding a resource to a dataset I want to be able to edit the metadata whilst uploading so that I save time

When uploading a resource's data as part of adding a resource to a dataset I want to see upload progress so that I have a sense of how long this will take

When adding resources to a dataset I want to be able to add and upload multiple files at once so that I save time and make one big change 

When adding a resource which is tabular (e.g. csv, excel) I want to enter the (table) schema (i.e. the names, description and types of columns) so that my data is more useable, presentable, importable (e.g. to DataStore) and validatable

When adding a resource which is currently stored in dropbox/gdrive/onedrive I want to pull the bytes directly from there so as to speed up the upload process


## Design

See [Design page &raquo;][design]

[design]: ./design/

