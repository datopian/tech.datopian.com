---
status: draft
---

# Data Views

Views of data e.g. tables, graphs, maps.

## How it Works in CKAN

* Controller / Template = frontend controller, templating library or even browser JS
* "Data Factory" is a fancy name for any business logic that automatically adds views to a dataset. In CKAN 2 this happens as part of the resource creation logic

```mermaid
graph TD


subgraph Backend
  dataset --user uploads --> storage
  dataset --user uploads --> metastore
end

subgraph "Data Factory"
  metastore --> viewgen[View Enhancer]
  viewgen --> metastore
end

user -- user creates/edits a view --> metastore

subgraph "Controller / Template"
  storage -- download the file --> visitor
  metastore --renders  table--> visitor
  metastore --renders graph--> visitor
end
```

The sequence of it ...

```mermaid
graph LR

fileupload --> store
store --> enhance[Enhance - auto add views]
enhance --> render
enhance --> useredit[User edits views]
useredit --> render
```

