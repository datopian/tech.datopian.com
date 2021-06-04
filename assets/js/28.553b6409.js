(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{430:function(a,t,e){"use strict";e.r(t);var r=e(25),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"data-apis-and-the-datastore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-apis-and-the-datastore"}},[a._v("#")]),a._v(" Data APIs (and the DataStore)")]),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("A Data API provides "),e("em",[a._v("API")]),a._v(" access to data stored in a "),e("RouterLink",{attrs:{to:"/dms/"}},[a._v("DMS")]),a._v(". APIs provide granular, per record access to datasets and their component data files. They offer rich querying functionality to select the records you want, and, potentially, other functionality such as aggregation. Data APIs can also provide write access, though this has traditionally been rarer."),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])])],1),a._v(" "),e("p",[a._v("Furthermore, much of the richer functionality of a DMS or Data Portal such as data visualization and exploration require API data access rather than bulk download.")]),a._v(" "),e("h3",{attrs:{id:"api-vs-bulk-access"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-vs-bulk-access"}},[a._v("#")]),a._v(" API vs Bulk Access")]),a._v(" "),e("p",[a._v("Direct download of a whole data file is the default method of access for data in a DMS. API access complements this direct download in “bulk” approach. In some situations API access may be the primary access option (so-called “API first”). In other cases, structured storage and API read/write may be the "),e("em",[a._v("only")]),a._v(" way the data is stored and there is no bulk storage – for example, this would be a natural approach for time series data which is being rapidly updated e.g. every minute.")]),a._v(" "),e("p",[e("em",[a._v("Fig 1: Contrasting Download and API based access")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# simple direct file access. You download")]),a._v("\nhttps://my-data-portal.org/my-dataset/my-csv-file.csv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# API based access. Find the first 5 records with 'awesome'")]),a._v("\nhttps://my-data-portal.org/data-api/my-dataset/my-csv-file-identifier?q"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("awesome"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("limit")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n")])])]),e("p",[a._v("In addition, to differing volume of access, APIs often differ from bulk download in their data format: following web conventions data APIs usually return the data in a standard format such as JSON (and can also provide various other formats e.g. XML). By contrast, direct data access necessarily supplies the data in whatever data format it was created in.")]),a._v(" "),e("h3",{attrs:{id:"limitations-of-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-apis"}},[a._v("#")]),a._v(" Limitations of APIs")]),a._v(" "),e("p",[a._v("Whilst Data APIs are in many ways more flexible than direct download they have disadvantages:")]),a._v(" "),e("ul",[e("li",[a._v("APIs are much more costly and complex to create and maintain than direct download")]),a._v(" "),e("li",[a._v("API queries are slow and limited in size because they run in real-time in memory. Thus, for bulk access e.g. of the entire dataset direct download is much faster and more efficient (download a 1GB CSV directly is easy and takes seconds but attempting to do so via the API may crash the server and be very slow).")])]),a._v(" "),e("h3",{attrs:{id:"why-data-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-data-apis"}},[a._v("#")]),a._v(" Why Data APIs?")]),a._v(" "),e("p",[a._v("Data APIs underpin the following valuable functionality on the “read” side:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Data (pre)viewing")]),a._v(": reliably and richly (e.g. with querying, mapping etc). This makes the data much more accessible to non-technical users.")]),a._v(" "),e("li",[e("strong",[a._v("Visualization and analytics")]),a._v(": rich visualization and analytics may need a data API (because they need easily to query and aggregate parts of dataset).")]),a._v(" "),e("li",[e("strong",[a._v("Rich Data Exploration")]),a._v(": when exploring the data you will want to explore through a dataset quickly only pulling parts of the data and drilling down further as needed.")]),a._v(" "),e("li",[e("strong",[a._v("(Thin) Client applications")]),a._v(": with a data API third party users of the portal can build apps on top of the portal data easily and quickly (and without having to host the data themselves)")])]),a._v(" "),e("p",[a._v("Corresponding job stories would be like:")]),a._v(" "),e("ul",[e("li",[a._v("When building a visualization I want to select only some part of a dataset that I need for my visualization so that I can load the data quickly and efficiently.")]),a._v(" "),e("li",[a._v("When building a Data Explorer or Data Driven app I want to slice/dice/aggregate my data (without downloading it myself) so that I can display that in my explorer / app.")])]),a._v(" "),e("p",[a._v("On the write side they provide support for:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Rapidly updating data e.g. timeseries")]),a._v(": if you are updating a dataset every minute or every second you want an append operation and don’t want to store the whole file every update just to add a single record")]),a._v(" "),e("li",[e("strong",[a._v("Datasets stored as structured data by default")]),a._v(" and which can therefore be updated in part, a few records at a time, rather than all at once (as with blob storage)")])]),a._v(" "),e("h2",{attrs:{id:"domain-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#domain-model"}},[a._v("#")]),a._v(" Domain Model")]),a._v(" "),e("p",[a._v("The functionality associated to the Data APIs can be divided in 6 areas:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Descriptor")]),a._v(": metadata describing and specifying the API e.g. general metadata e.g. name, title, description, schema, and permissions")]),a._v(" "),e("li",[e("strong",[a._v("Manager")]),a._v(" for creating and editing APIs.\n"),e("ul",[e("li",[a._v("API: for creating and editing Data API’s descriptors (which triggers creation of storage and service endpoint)")]),a._v(" "),e("li",[a._v("UI: for doing this manually")])])]),a._v(" "),e("li",[e("strong",[a._v("Service")]),a._v(" (read):  web API for accessing structured data (i.e. per record) with querying etc. "),e("em",[a._v("When we simply say “Data API” this is usually what we are talking about")]),a._v(" "),e("ul",[e("li",[a._v("Custom API & Complex functions: e.g. aggregations, join")]),a._v(" "),e("li",[a._v("Tracking & Analytics: rate-limiting etc")]),a._v(" "),e("li",[a._v("Write API: usually secondary because of its limited performance vs bulk loading")]),a._v(" "),e("li",[a._v("Bulk export of query results especially large ones (or even export of the whole dataset in the case where the data is stored directly in the DataStore rather than the FileStore). This is an increasingly important featurea lower priority but if required it is substantive feature to implement.")])])]),a._v(" "),e("li",[e("strong",[a._v("Data Loader")]),a._v(": bulk loading data into the system that powers the data API. "),e("strong",[a._v("This is covered in a "),e("RouterLink",{attrs:{to:"/data-load/"}},[a._v("separate Data Load page")]),a._v(".")],1),a._v(" "),e("ul",[e("li",[a._v("Bulk Load: bulk import of individual data files")]),a._v(" "),e("li",[a._v("Maybe includes some ETL => this takes us more into data factory")])])]),a._v(" "),e("li",[e("strong",[a._v("Storage (Structured)")]),a._v(": the underlying structured store for the data (and its layout). For example, Postgres and its table structure.This could be considered a separate component that the Data API uses or as part of the Data API – in some cases the store and API are completely wrapped together, e.g. ElasticSearch is both a store and a rich Web API.")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[e("strong",[a._v("Visualization")]),a._v(" is not part of the API but the demands of visualization are important in designing the system.")])]),a._v(" "),e("h2",{attrs:{id:"job-stories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-stories"}},[a._v("#")]),a._v(" Job Stories")]),a._v(" "),e("h3",{attrs:{id:"read-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-api"}},[a._v("#")]),a._v(" Read API")]),a._v(" "),e("p",[a._v("When I’m building a client application or extracting data  I want to get data quickly and reliably via an API so that I can focus on building the app rather than manging the data")]),a._v(" "),e("ul",[e("li",[a._v("Performance: Querying data is "),e("strong",[a._v("quick")])]),a._v(" "),e("li",[a._v("Filtering: I want to filter data easily so that I can get the slice of data that I need.\n"),e("ul",[e("li",[a._v("❗ unlimited query size for downloading eg, can download filtered data with millions of rows")])])]),a._v(" "),e("li",[a._v("can get results in 3 formats: CSV, JSON and Excel.")]),a._v(" "),e("li",[a._v("API formats\n"),e("ul",[e("li",[a._v("“Restful” API (?)")]),a._v(" "),e("li",[a._v("SQL API (?)")]),a._v(" "),e("li",[a._v("❗ GraphQL API (?)")]),a._v(" "),e("li",[a._v("❗ custom views/cubes (including pivoting)")])])]),a._v(" "),e("li",[a._v("Query UI")])]),a._v(" "),e("p",[a._v("❗️ = something not present atm")]),a._v(" "),e("h4",{attrs:{id:"retrieve-records-via-an-api-with-filtering-per-resource-if-tabular"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-records-via-an-api-with-filtering-per-resource-if-tabular"}},[a._v("#")]),a._v(" Retrieve records via an API with filtering (per resource) (if tabular?)")]),a._v(" "),e("p",[a._v("When I am building a web app, a rich viz, display the data, etc I want to have an API to data (returns e.g. JSON, CSV) [in a resource] so that I can get precise chunks of data to use without having to download and store the whole dataset myself")]),a._v(" "),e("ul",[e("li",[a._v("I want examples")]),a._v(" "),e("li",[a._v("I want a playground interface …")])]),a._v(" "),e("h4",{attrs:{id:"bulk-export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulk-export"}},[a._v("#")]),a._v(" Bulk Export")]),a._v(" "),e("p",[a._v("When I have a query with a large amount of results I want to be able to download all of those results so that I can analyse them with my own tools")]),a._v(" "),e("h4",{attrs:{id:"multiple-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-formats"}},[a._v("#")]),a._v(" Multiple Formats")]),a._v(" "),e("p",[a._v("When querying data via the API I want to be able to get the results in different formats (e.g. JSON, CSV, XML (?), …) so that I can get it in a format most suitable for my client application or tool")]),a._v(" "),e("h4",{attrs:{id:"aggregate-data-perform-ops-via-an-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-data-perform-ops-via-an-api"}},[a._v("#")]),a._v(" Aggregate data (perform ops) via an API …")]),a._v(" "),e("p",[a._v("When querying data to use in a client application I want to be able to perform aggregations such as sum, group by etc so that I can get back summary data directly and efficiently (and don’t have to compute myself or wait for large amounts of data)")]),a._v(" "),e("h4",{attrs:{id:"sql-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-api"}},[a._v("#")]),a._v(" SQL API")]),a._v(" "),e("p",[a._v("When querying the API as a Power User I want to use SQL so that I can do complex queries and operations and reuse my exisitng SQL knowledge")]),a._v(" "),e("h4",{attrs:{id:"geodata-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#geodata-api"}},[a._v("#")]),a._v(" GeoData API")]),a._v(" "),e("p",[a._v("When querying a dataset with geo attributes such as location I want to be able use geo-oriented functionality e.g. find all items near X so that I can find the records I want by location")]),a._v(" "),e("h4",{attrs:{id:"free-text-query-google-style-elasticsearch-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#free-text-query-google-style-elasticsearch-style"}},[a._v("#")]),a._v(" Free Text Query (Google Style / ElasticSearch Style)")]),a._v(" "),e("p",[a._v("When querying I want to do a google style search in data e.g. query for “brown” and find all rows with brown in them or do "),e("code",[a._v("brown road_name:*jfk*")]),a._v(" and get all results with brown in them and whose field "),e("code",[a._v("road_name")]),a._v(" has "),e("code",[a._v("jfk")]),a._v(" in it so that I can provide a flexible query interface to my users")]),a._v(" "),e("h4",{attrs:{id:"custom-data-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-data-api"}},[a._v("#")]),a._v(" Custom Data API")]),a._v(" "),e("p",[a._v("As a Data Curator I want to create a custom API for one or more resources so that users can access my data in convenient ways …")]),a._v(" "),e("ul",[e("li",[a._v("E.g. query by dataset or resource name rather than id …")])]),a._v(" "),e("h4",{attrs:{id:"search-through-all-data-that-is-searchable-get-summary-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search-through-all-data-that-is-searchable-get-summary-info"}},[a._v("#")]),a._v(" Search through all data (that is searchable) / Get Summary Info")]),a._v(" "),e("p",[a._v("As a Consumer I want to search across all the data in the Data Portal at once so that I can find the value I want quickly and easily … (??)")]),a._v(" "),e("h4",{attrs:{id:"search-for-variables-used-in-datasets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search-for-variables-used-in-datasets"}},[a._v("#")]),a._v(" Search for variables used in datasets")]),a._v(" "),e("p",[a._v("As a Consumer (researcher/student …) I want to look for datasets with particular variables in  them so that I can quickly locate the data I want for my work")]),a._v(" "),e("ul",[e("li",[a._v("Search across the column names so that ??")])]),a._v(" "),e("h4",{attrs:{id:"track-usage-of-my-data-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#track-usage-of-my-data-api"}},[a._v("#")]),a._v(" Track Usage of my Data API")]),a._v(" "),e("p",[a._v("As a DataSet Owner I want to know how much my Data API is being used so that I can report that to stakeholders / be proud of that")]),a._v(" "),e("h4",{attrs:{id:"limit-usage-of-my-data-api-and-or-charge-for-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limit-usage-of-my-data-api-and-or-charge-for-it"}},[a._v("#")]),a._v(" Limit Usage of my Data API (and/or charge for it)")]),a._v(" "),e("p",[a._v("As a Sysadmin I want to limit usage of my Data API per user (and maybe charge for above a certain level) so that I don’t spend too much money")]),a._v(" "),e("h4",{attrs:{id:"restrict-access-to-my-data-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restrict-access-to-my-data-api"}},[a._v("#")]),a._v(" Restrict Access to my Data API")]),a._v(" "),e("p",[a._v("As a Publisher I want to only allow specific people to access data via the data API so that …")]),a._v(" "),e("ul",[e("li",[a._v("Want this to mirror the same restrictions I have on the dataset / resources elsewhere (?)")])]),a._v(" "),e("h3",{attrs:{id:"ui-for-exploring-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-for-exploring-data"}},[a._v("#")]),a._v(" UI for Exploring Data")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("This probably is "),e("em",[a._v("not")]),a._v(" a Data API epic – rather it would come under the Data Explorer.")])]),a._v(" "),e("ul",[e("li",[a._v("I want an interface to “sql style” query data")]),a._v(" "),e("li",[a._v("I want a filter interface into data")]),a._v(" "),e("li",[a._v("I want to download filtered data")]),a._v(" "),e("li",[a._v("…")])]),a._v(" "),e("h3",{attrs:{id:"write-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#write-api"}},[a._v("#")]),a._v(" Write API")]),a._v(" "),e("p",[a._v("When adding data I want to write new rows via the data API so that the new data is available via the API")]),a._v(" "),e("ul",[e("li",[a._v("? do we also want a way to do bulk additions?")])]),a._v(" "),e("h3",{attrs:{id:"datastore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datastore"}},[a._v("#")]),a._v(" DataStore")]),a._v(" "),e("p",[a._v("When creating a Data API I want a structured data store (e.g. relational database) so that I can power the Data API and have it be fast, efficient and reliable.")]),a._v(" "),e("h2",{attrs:{id:"ckan-v2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v2"}},[a._v("#")]),a._v(" CKAN v2")]),a._v(" "),e("p",[a._v("In CKAN 2 the bulk of this functionality is in the core extension "),e("code",[a._v("ckanext-datastore")]),a._v(":")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ckan/ckan/tree/master/ckanext/datastore",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ckan/ckan/tree/master/ckanext/datastore"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("In summary: the underlying storage is provided by a Postgres database. A dataset resource is mapped to a table in Postgres. There are no relations between tables (no foreign keys). A read and write API is provided by a thin Python wrapper around Postgres. Bulk data loading is provided in separate extensions.")]),a._v(" "),e("h3",{attrs:{id:"implementing-the-4-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-4-components"}},[a._v("#")]),a._v(" Implementing the 4 Components")]),a._v(" "),e("p",[a._v("Here’s how CKAN 2 implements the four components described above:")]),a._v(" "),e("ul",[e("li",[a._v("Read API: is provided by an API wrapper around Postgres. This is written as a CKAN extension written in Python and runs in process in the CKAN instance.\n"),e("ul",[e("li",[a._v("Offers both classic Web API query and SQL queries.")]),a._v(" "),e("li",[a._v("Full text, cross field search is provided via Postgres and creating an index  concatenating across fields.")]),a._v(" "),e("li",[a._v("Also includes a write API and functions to create tables")])])]),a._v(" "),e("li",[a._v("DataStore: a dedicated Postgres database (separate to the main CKAN database) with one table per resource.")]),a._v(" "),e("li",[a._v("Data Load: provided by either DataPusher (default) or XLoader. More details below.\n"),e("ul",[e("li",[a._v("Utilize the CKAN jobs system to load data out of band")]),a._v(" "),e("li",[a._v("Some reporting integrated into UI")]),a._v(" "),e("li",[a._v("Supports tabular data (CSV or Excel) : this converts CSV or Excel into data that can be loaded into the Postgres DB.")])])]),a._v(" "),e("li",[a._v("Bulk Export: you can bulk download via the extension using the dump functionality "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#downloading-resources",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#downloading-resources"),e("OutboundLink")],1),a._v(" "),e("ul",[e("li",[a._v("Note however this will have problems with large resources either timing out or hanging the server")])])])]),a._v(" "),e("h3",{attrs:{id:"read-api-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-api-2"}},[a._v("#")]),a._v(" Read API")]),a._v(" "),e("p",[a._v("The CKAN DataStore extension provides an ad-hoc database for storage of structured data from CKAN resources.")]),a._v(" "),e("p",[a._v("See the DataStore extension: "),e("a",{attrs:{href:"https://github.com/ckan/ckan/tree/master/ckanext/datastore",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ckan/ckan/tree/master/ckanext/datastore"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Datastore API: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#the-datastore-api",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#the-datastore-api"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Making Datastore API requests: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#making-a-datastore-api-request",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#making-a-datastore-api-request"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Example: Create a DataStore table: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -X POST http://127.0.0.1:5000/api/3/action/datastore_create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t-H "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: {YOUR-API-KEY}"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t-d "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{ "resource": {"package_id": "{PACKAGE-ID}"}, "fields": [ {"id": "a"}, {"id": "b"} ] }\'')]),a._v("\n")])])]),e("h3",{attrs:{id:"data-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[a._v("#")]),a._v(" Data Load")]),a._v(" "),e("p",[a._v("See "),e("RouterLink",{attrs:{to:"/load/#ckan-v2"}},[a._v("Load page")]),a._v(".")],1),a._v(" "),e("h3",{attrs:{id:"datastore-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datastore-2"}},[a._v("#")]),a._v(" DataStore")]),a._v(" "),e("p",[a._v("Implemented as a separate Postgres Database.")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#setting-up-the-datastore",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#setting-up-the-datastore"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"what-issues-are-there"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-issues-are-there"}},[a._v("#")]),a._v(" What Issues are there?")]),a._v(" "),e("p",[a._v("Sharp Edges")]),a._v(" "),e("ul",[e("li",[a._v("connection between MetaStore (main CKAN objects DB) and DataStore is not always well maintained e.g, if I call “purge_dataset” action, it will remove stuff from MetaStore but it won’t delete a table from DataStore. This does not break UX but your DataStore DB raises in size and you might have junk tables with lots of data.")])]),a._v(" "),e("p",[a._v("DataStore (Data API)")]),a._v(" "),e("ul",[e("li",[a._v("One table per resource and no way to join across resources")]),a._v(" "),e("li",[a._v("Indexes are auto-created and no way to customize per resource. This can lead to issues on loading large datasets.")]),a._v(" "),e("li",[a._v("No API gateway (i.e. no way to control DDOS’ing, to do rate limiting etc)")]),a._v(" "),e("li",[a._v("SQL queries not working (with private datasets)")])]),a._v(" "),e("h2",{attrs:{id:"ckan-v3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v3"}},[a._v("#")]),a._v(" CKAN v3")]),a._v(" "),e("p",[a._v("Following the general "),e("RouterLink",{attrs:{to:"/next-gen/"}},[a._v("next gen microservices approach")]),a._v(", the Data API is separated into distinct microservices.")],1),a._v(" "),e("h3",{attrs:{id:"read-api-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-api-3"}},[a._v("#")]),a._v(" Read API")]),a._v(" "),e("p",[a._v("Approach: Refactor current DataStore API into a standalone microservice. Key point would be to break out permissioning. Either via a call out to separate permissioning service or a simple JWT approach where capability is baked in.")]),a._v(" "),e("p",[a._v("Status: In Progress (RFC) - see "),e("a",{attrs:{href:"https://github.com/datopian/data-api",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/datopian/data-api"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"data-load-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-load-2"}},[a._v("#")]),a._v(" Data Load")]),a._v(" "),e("p",[a._v("Implemented via AirCan. See "),e("RouterLink",{attrs:{to:"/load/"}},[a._v("Load page")]),a._v(".")],1),a._v(" "),e("h3",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[a._v("#")]),a._v(" Storage")]),a._v(" "),e("p",[a._v("Back onto Postgres by default just like CKAN 2. May also explore using other backends esp from Cloud Providers e.g. BigQuery or AWS RedShift etc.")]),a._v(" "),e("ul",[e("li",[a._v("See Data API service "),e("a",{attrs:{href:"https://github.com/datopian/data-api",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/datopian/data-api"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("BigQuery: "),e("a",{attrs:{href:"https://github.com/datopian/ckanext-datastore-bigquery",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/datopian/ckanext-datastore-bigquery"),e("OutboundLink")],1)])]),a._v(" "),e("hr",{staticClass:"footnotes-sep"}),a._v(" "),e("section",{staticClass:"footnotes"},[e("ol",{staticClass:"footnotes-list"},[e("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[e("p",[a._v("It is rarer  because write access usually means a) the data for this dataset is a structured database rather than a data file (which is normally more expensive both in terms b) the Data Portal has now become the primary (or semi-primary) home of this dataset rather simply being the host of a dataset whose home and maintenance is elsewhere. "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);