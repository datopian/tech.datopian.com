# Publish Data

## Introduction

Publish functionality covers the whole area of creating and editing datasets and resources, including data upload. The core job story is something like:

> When a Data Curator has a data file or dataset they want to add it to their data portal/platform quickly and easily so that it is available there.

Publication can be divided by its *mode*:

* **Manual**: publication is done by people via a user interfaces or other tool
* **Programmatic**: publication is done programatically using APIs and is usually part of automated processes
* **Hybrid**: which combines manual and programmatic. An example would be harvesting where setup and configuration may be done in a UI manually with the process then running automatically and programmatically (in addition, some new harvesting flows require manual programmatic setup e.g. writing a harvester in Python for a new source data format).

**Focus on Manual** we will focus on the manual in this section: programmatic is by nature largely up to the client programmer (assuming the APIs are there) whilst [Harvesting][] has a section of its own. That said, many concepts here are relevant for other cases e.g. material on [profiles][] and [schemas][].

**Data uploading**: included in publish is the process of uploading data into the DMS, and specifically into [storage][] and especially [(blob) storage][blob].
.

[Harvesting]: /harvesting/
[profiles]: /glossary/#profile
[schemas]: /glossary/#schema
[storage]: /storage/
[blob]: /blob-storage/

### Examples

At its simplest, a publishing process can just involve providing a few metadata fields in a form -- with the data itself stored elsewhere.

At the other end of the spectrum, we could have a multi-stage and complex process like this:

* Multiple (simultaneous) resource upload with shared metadata e.g. I'm creating a timeseries dataset with the last 12 months of data and I want each file to share the same column information but to have different titles
* A variety of metadata profiles
* Data validation (prior to ingest) including checking for PII (personally identifiable infromation) 
* Complex workflow related to approval e.g. only publish if at least two people have approved
* Embargoing (only make public at time X)

### Features

* Create and edit datasets and resources
* File upload as part of resource creation
* Custom metadata for both profile and schemas

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

### Domain Model

The domain model here is that of the [DMS]() and we recommend visiting that page for more information. The key items are:

* Project
* Dataset
* Resource

[DMS]: /dms/

### Principles

* Most ordinary data users don't distinguish resources and datasets in their everyday use. They also prefer a single (denormalized) view onto their data.
* Normalization is not normal for users (it is a convenience, economisation and consistency device)
* And in any case most of us start from files not datasets (even if datasets evolve later).
* Minimize the information the user has to provide to get going. For example, does a user *have* to provide a license to start with? If that is not absolutely required leave this item for later.
* Automate where you can but only where you can guess reliably. If you do guess, give the user ability to modify. Otherwise, magic often turns into mud. For example, if we are guessing file types let the user check and correct this.

## Flows

* Publish flows are highly custom: different platforms have different needs
* At the same time there are core workflows that most people will use (and customize)
* The flows shown here are therefore illustrative and inspirational rather than definitive

### The 30,000 foot view

```mermaid
graph TD

user[User with data and/or metadata]
publish[Publish process]
platform["Storage (metadata and blobs)"]

user --> publish --> platform
```

### Dataset: High Level

```mermaid
graph TD

project[Project/Dataset create]
addres["Add resource(s)"]
save[Save / Commit]

project --> addres
addres --> save
````

### Adding in dataset metadata

```mermaid
graph TD

project[Project/Dataset create]
addres["Add resource(s)"]
addmeta["Add dataset metadata"]
save[Save / Commit]

project --> addres
addres -.optional.-> addmeta
addmeta -.-> save
addres -.-> save
````

The approach above is "file driven" rather than "metadata driven", in the sense that you are start by providing a file rather than providing metadata.

Here's the metadata driven flow:

```mermaid
graph TD

project[Project/Dataset create]
addres["Add resource(s)"]
addmeta[Add dataset metadata]
save[Save / Commit]

project --> addmeta
addmeta --> addres
addres --> save
addmeta -.-> save
```

:::tip Comment: The file driven approach is preferable
We think the "file driven" approach where the flow starts with a user adding and uploading a file (and then adding metadata) is preferable to an metadata driven approach where you start with a dataset and metatdata and then add files (as is the default today in CKAN).

Why do we think a file driven approach is better? a) a file is what the user has immediately to hand b) it is concrete whilst "metadata" is abstract c) common tools for storing files e.g. Dropbox or Google Drive start with providing a file - only later, and optionally, do you rename it, move it etc.

That said, tools like GitHub or Gitlab require one to create a "project", albeit a minimal one, before being able to push any content. However, GitHub and Gitlab are developer oriented tools that can assume a willingness to tolerate a slightly more cumbersome UX. Furthermore, the default use case is that you have a git repo that you wish to push so the the use case of a non-technical user uploading files is clearly secondary. Finally, in these systems you can create a project just to have an issue tracker or wiki (without having fiile storage). In this case, creating the project first makes sense.

In a DMS, we are often dealing with non-technical or semi-technical users. Thus, providing a simple, intuitive flow is preferable. That said, one may still have a very lightweight project creation flow so that we have a container for the files (just as in, say, Google Drive you already have a folder to put your files in).
:::


### Adding a resource

From here on, we'll zoom in on the "publish" part of that process. Let's start with the simplest case of adding a single resource in the form of an uploading file:

```mermaid
graph TD

addfile[Drop a file]
metadata[Add Metadata]
upload[Upload to Storage]
save[Save]

addfile -.in the background.-> upload
addfile --> metadata
upload -.progress reporting.-> save
metadata --> save
```

Notes

* Alternative to "Drop a file" would be to just "Link" to a file that is already online and available

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

