# Data APIs

A Data API provides API access to data stored in a Data Portal. APIs provide granular, per record access to datasets and their component data files. They also offer querying and potentially other functionality such as aggregration.

API access contrasts and complements the default access to data in a data portal which is simple download of the whole data file. In addition, following web conventions data APIs usually return the data in JSON (and potentially other formats). By contrast, direct data access necessarily supplies the data in whatever data format it was created in.

```bash
# simple direct file access. You download 
https://my-data-portal.org/my-dataset/my-csv-file.csv

# API based access. Find the first 5 records with 'awesome'
https://my-data-portal.org/data-api/my-dataset/my-csv-file-identifier?q=awesome&limit=5
```

Whilst Data APIs are in many ways more flexible than direct download they have disadvantages:

* APIs are much more costly and complex to create and maintain than direct download
* API queries are slow and limited in size because they run in real-time in memory. Thus, for bulk access e.g. of the entire dataset direct download is much faster and more efficient (download a 1GB CSV directly is easy and takes seconds but attempting to do so via the API may crash the server and be very slow).

TODO: do more to compare and contrast download vs API access (e.g. what each is good for, formats,  etc)

## Why Data APIs?

Data APIs underpin the following valuable functionality:

* Data (pre)viewing: reliably and richly (e.g. with querying, mapping etc). This makes the data much more accessible to non-technical users.
* Visualization and analytics: rich visualization and analytics usually need a data API (because they need easily to query and aggregate parts of dataset)
* (Thin) Client applications: with a data API third party users of the portal can build apps on top of the portal data easily and quickly (and without having to host the data themselves)

## What functionality?

What is the functionality needed in the “Data API”? See Epics below for full details, but to summarize, the Data API system encompasses a broad range of functionality:

* **Read API**:  web API for accessing structured data (i.e. per record) with querying etc. => structured storage (vs blob storage) plus API wrapper
  * Custom API & Complex functions: e.g. aggregations, join
  * Real Time
  * Permissions
  * Tracking & Analytics: rate-limiting etc 
* **Load / Import**: loading data into the system that powers the data API. 
  * Bulk Load: bulk import of individual data files
  * Write API: usually secondary because of its limited performance vs bulk loading
  * Maybe includes some ETL … => this takes us more into data factory
* **Bulk Export**: bulk export (for data resources stored directly into the DataStore rather than the FileStore)
* **Data Viz**: not necessarily part of it but the demands of data viz are important to consider in designing the system

## Epics

### Data API

#### Retrieve records via an API with filtering (per resource) (if tabular?)

When I am building a web app, a rich viz, display the data, etc I want to have an API to data (returns e.g. JSON, CSV) [in a resource] so that I can get precise chunks of data to use without having to download and store the whole dataset myself

* I want examples
* I want a playground interface …

#### Aggregate data (perform ops) via an API …

#### SQL API

As a Power Consumer I want to query the API via SQL so that I can do complex queries and operations and reuse my exisitng SQL knowledge

#### GeoData API

As a Consumer I want to query data with geo aspects (e.g. find all items near X) so that I can find the records I want by location

#### Custom Data API

As a Data Curator I want to create a custom API for one or more resources so that users can access my data in convenient ways …

* E.g. query by dataset or resource name rather than id …

#### Search through all data (that is searchable) / Get Summary Info

As a Consumer I want to search across all the data in the datastore so that I can find the value I want quickly and easily … (??)

As a Consumer (researcher/student …) I want to look for datasets with particular variables in  them so that I can quickly locate the data I want for my work

* Search across the column names so that ??


#### Track Usage of my Data API

As a DataSet Owner I want to know how much my Data API is being used so that I can report that to stakeholders / be proud of that

#### Limit Usage of my Data API (and/or charge for it)

As a Sysadmin I want to limit usage of my Data API per user (and maybe charge for above a certain level) so that I don’t spend too much money

#### Restrict Access to my Data API

As a Publisher I want to only allow specific people to access data via the data API so that …

* Want this to mirror the same restrictions I have on the dataset / resources elsewhere (?)


### Data Export

### Data Load

As a Publisher i want to load my dataset (resource) into the datastore quickly and reliably so that my data is available over the data API

* Be “tolerant” where possible of bad data …
* And get feedback if it went wrong and how I can fix it …
* I want to update the schema for the datastore so data has right types (and be
* I want to be able to update with a new resource file and only have it load the most recent

#### Correct the types in the DataStore (after load?)

#### Track Performance Status as [Cloud] Sysadmin

As a Datopian Cloud Sysadmin I want to know what is happening with “DataLoad” so that I can fix if problems for clients

#### One Data Load Service per Cloud

As a Datopian Cloud Manager I want to have one “DataLoad” service I maintain rather than one per instance for efficiency …

### Rich Data Exploration

As X I want to display only some part of a dataset in my visualization so that large data loads quickly.

As X I want to slice/dice/aggregate my data (without downloading it myself) so that I can display that in my viz / app etc

#### UI for Exploring Data … (in DataStore?)

* I want an interface to “sql style” query data
* I want a google style search in data … type “brown” and find all rows with brown in them …  or do “brown road_name:*jfk*”
* I want a filter interface into data …
* I want to download filtered data

