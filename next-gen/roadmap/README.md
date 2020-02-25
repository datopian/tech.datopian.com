# Roadmap for "Next Gen"

Summary

* [x] Frontend (against Classic)
* [ ] Harvesting (in progress)
* [ ] DataLoad for DataStore (similar to DataLoad)
* [ ] DataStore
* [ ] Explorer
  * [ ] Views as a backend object (with permissions)
  * [ ] Admin UI for Views ...
    * [ ] GeoViews
    * [ ] Charts ...
* [ ] Admin UI ...
  * [ ] Import a Dataset ...
  * [ ] ...

```mermaid
graph LR

start[Start]
themefe[Read Frontend]
authfe[Authentication in FE]
authzfe[Authorization in FE]
previews[Previews]
explorer[Explorer]
permsserv[Permissions Service]
orgs[Organizations]


subgraph Start
  start
end

subgraph Frontend
  start --> themefe
  themefe --> authfe
  authfe --> authzfe
  themefe --> revisioningfe[Revision UI]
end

subgraph Harvesting
  start --> harvestarc[Harvesting Architecture]
  harvestarc --> runner[Harvest Runner]
end

subgraph "Admin UI"
  managedataset[Manage Dataset]
  manageorg[Manage Organization]
  manageuser[Manage Users]
  manageconfig[Manage Config]
  
  start --> managedataset
  start --> manageorg
  managedataset --> manageconfig
end

subgraph "Backend (API)"
  start --> permsserv
  start --> revision[Backend Revisioning]
end

datastore[DataStore]

subgraph DataStore
  start --> datastore
  datastore --> dataload[Data Load]
end

subgraph Explorer
  themefe --> previews
  previews --> explorer
end

subgraph Organizations
  orgs
end

classDef done fill:lightgreen,stroke:#333,stroke-width:4px;
classDef next fill:#f9f,stroke:#333,stroke-width:4px;

class themefe done;
class dataload,permsserv next;
```

<mermaid />

