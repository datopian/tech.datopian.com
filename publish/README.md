# Publish Data

## Introduction

Publish functionality covers the whole area of creating and editing datasets and resources, including data upload. The core job story is something like:

> When a Data Curator has a data file or dataset they want to add it manually (e.g. via drag and drop etc) to their data portal/platform quickly and easily so that it is avaialble there.

Publication as a process can be divided into the following cases:

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

### Examples

At its simplest, a publishing process can be simply a form to provide some metadata about a data file or dataset -- with the data itself stored elsewhere. This could be appropriate for a classic pure catalog application.

At the other end of the spectrum, we could have a multi-stage and complex process including, for example:

* multiple (simultaneous) resource upload with shared metadata e.g. I'm creating a timeseries dataset with the last 12 months of data and I want each file to share the same column information but to have different titles
* a variety of metadata profiles
* data validation (prior to ingest) including checking for PII (personally identifiable infromation) 
* complex workflow related to approval e.g. only publish if at least two people have approved
* embargoing (only make public at time X)

### Features

### Job Stories

When a Data Curator has a data file or dataset they want to add it manually (e.g. via drag and drop etc) to their data portal quickly and easily so that it is avaialble there.

More specifically: As a Data Curator I want to drop a file in and edit the metadata and have it saved in a really awesome interactive way so that the data is “imported” and of good quality (and i get feedback)

#### Resources

:::tip
A resource is any data item in a dataset e.g. a file.
:::

When adding a resource to a dataset I want metadata pre-entered for me (e.g. resource name from file name, encoding, ...) to save time and reduce errors

When adding a resource to a dataset I want to be able to edit the metadata whilst uploading so that I save time

When uploading a resource's data as part of adding a resource to a dataset I want to see upload progress so that I have a sense of how long this will take

When adding resources to a dataset I want to be able to add and upload multiple files at once so that I save time and make one big change 

When adding a resource which is tabular (e.g. csv, excel) I want to enter the (table) schema (i.e. the names, description and types of columns) so that my data is more useable, presentable, importable (e.g. to DataStore) and validatable

When adding a resource which is currently stored in dropbox/gdrive/onedrive I want to pull the bytes directly from there so as to speed up the upload process

### Remarks

Most ordinary data users don't distinguish resources and datasets in their everyday use. They also prefer a single (denormalized) view onto their data.

Normalization is not normal for users (it is a convenience, economisation and consistency device)

And in any case most of us start from files not datasets (even if datasets evolve later).

### Flows

#### Overview Deck

**Deck**: This deck (Feb 2019) provides an overview of the core flow publishing a single tabular file e.g. CSV and includes a a basic UI mockup illustrating the flow described below.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQD09jo3Mwq-jM32rns_ehyd6GOv7cQ7F9UAK1U_jzO5G4ZgZ8ktG9rwK03-N-0XmQyJx-9kSW7-U4I/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

#### Overview

For v1: could assume small data (e.g. < 5Mb) so we can load into memory ...?

**Tabular data only**

1. Load
    1. File select
    2. Detect type
    3. Preview                  <= start preview here and continue throughout (?)
    3. Choose the data

2. Structural check and correction

    1. Structural validation
    2. Error presentation
    3. Mini-ETL to correct errors

3. Table metadata

    1. [Review the headers]
    2. Infer data-types and review
    3. [Add constraints]
    4. Data validation (and correction?)

4. General metadata (if necessary)

    1. Title, description
    2. License

5. Publish (atm: just download metadata (and cleaned data)


#### 1. Load

1. User drops a file or uploads a file

    * What about a url? Secondary for now
    * What about import from other sources e.g. google sheets, dropbox etc? KISS => leave for now
    * Size restrictions? Let's assume we're ok
    * Error reporting: any errors loading the data file should be reported ...
    * [Future]: in the background we'd be uploading this file to a file store while we do the rest of this process
    * Tooling options: https://uppy.io/ (note does lots more!), roll out own, filepicker.io (proprietary => no), ...
      * How do we find something that just does file selection and provides us with the object
    * [Final output] => a raw file object, raw file info (? or we already pass to data.js?)

2.  Detect type / format (from file name ...)

  * Prompt user to confirm the guess (or proceed automatically if guessed)?
  * Tooling: data.js already does this ...

3. Choose the data (e.g. sheets from excel)

    * Skip if CSV or if one sheet
    * Multiple sheets:
      * Present preview of the sheets ?? (limit to first 10 if a lot of sheets)
      * Option of choosing all sheets

#### 2. Structural check and correction

1. Run a goodtables structure check on the data
    * => ability to load a sample of the data (not all of it if big)
    * => goodtables js version

2. Preview the data and show structural errors

3. [Optional / v2] Simple ETL in browser to correct this


#### 3. Table metadata

All done in a tabular like view if possible.

Infer the types and present this in a view that allows review:

1. [Review the headers]
2. Infer data-types and review
3. [Add constraints] - optional and could leave out for now.

Then we do data validation against types (could do this live whilst they are editing ...)

4. Data validation (and correction?)

#### 4. General metadata (if necessary)

Add the general metadata.

1. Title, description
2. License

#### 5. Publish (atm: just download metadata (and cleaned data)

Show the dataresource.json and datapackage.json for now ...

## Existing work

* 2019: https://github.com/datopian/import-ui - alpha React App. Working demo at http://datopian.github.io/import-ui
* 2018: https://github.com/datopian/data-import-ui (unfinished React App)
* https://github.com/datahq/pm/issues/90 
* https://github.com/frictionlessdata/datapackage-ui 
* Cf also openspending version
  * can take from openspending but do it right :-)
* the spreadsheet view is best - see [example](https://docs.google.com/spreadsheets/d/1RoKbiTXaxT_N5Vio93Er-BA3ev3iwWlu4KYv-M7kvqc/edit#gid=0)
  * maybe given option to rotate if a lot of rows
* v1 should assume tidy data
* (?) v2 should allow for some simple wrangling to get tidy data (??)
* This is a template for people building their own configurers


### Original Flow for DataHub `data` cli in 2016

Context:

* you are pushing the raw file
* and the extraction to get one or more data tables ...
* in the background we are creating a data package + pipeline

```
data push {file}
```

Algorithm:

1. Detect type / format
2. Choose the data (e.g. sheet from excel)
3. Review the headers
4. Infer data-types and review
5. [Add constraints]
6. Data validation
7. Upload
8. Get back a link - view page (or the raw url) e.g. http://datapackaged.com/core/finance-vix
    * You can view, share, publish, [fork]

Details

1. Detect file type

    1. file extension
      1. Offer guess
      2. Probable guess (options?)
      3. Unknown - tell us
    2. Detect encoding (for CSV)

2. Choose the data
    1. Good data case
      1. 1 sheet => ok
      2. Multiple sheets guess and offer
      3. Multiple sheets - ask them (which to include)
    2. bad data case - e.g. selecting within table

3. Review the headers
    * Here is what we found
    * More than one option for headers - try to reconcile


## Design

See [Design page &raquo;][design]

[design]: ./design/

