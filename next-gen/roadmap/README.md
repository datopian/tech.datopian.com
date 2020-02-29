# Roadmap for "Next Gen"

Here's an overview of the implementation status of CKAN Next Gen. More granular information on particular features may sometimes be found on the individual feature page, for example for [Harvesting here](/harvesting/#design).

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
  start --> harvestetl[Harvesting ETL + Runner]
  harvestetl --> harvestui[Harvest UI]
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
  start --> orgs
end

subgraph Key
  done[Done]
  nearlydone[Nearly Done]
  inprogress[In Progress]
  next[Next Up]
end

classDef done fill:#21bf73,stroke:#333,stroke-width:3px;
classDef nearlydone fill:lightgreen,stroke:#333,stroke-width:3px;
classDef inprogress fill:orange,stroke:#333,stroke-width:2px;
classDef next fill:pink,stroke:#333,stroke-width:1px;

class done,themefe,previews,explorer,harvestetl done;
class nearlydone,authfe,harvestui nearlydone;
class inprogress,dataload inprogress;
class next,permsserv next;
```

<mermaid />

