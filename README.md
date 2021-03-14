---
heroImage: https://playbook.datopian.com/img/datopian-dark-logotype.svg
heroText: Datopian Engineering
tagline: Experts in data management 
pageClass: home
footer: Copyright © 2016-present Datopian
---

<div class="hero">
  <h1>Datopian Tech 👩‍💻</h1>

  <a href="https://datopian.com/"><img src="https://playbook.datopian.com/img/datopian-dark-logotype.svg" /></a>

  <p class="description">
    We are experts in data management and engineering
    <br/><br/>
    This is an overview of our technology
  </p>
</div>

## Data Management Systems

A [Data Management System (DMS)][dms] is a *framework*. It can be used to create a variety of *solutions* such as [Data Portals][], Data Catalogs, Data Lakes etc. We have developed two DMS stacks that share a set of underlying core components:

* [CKAN][]: the open source data management system we created in 2007 and that we continue to develop and maintain. The main information on CKAN is at https://ckan.org/. Here we have some specific notes on how we develop and deploy CKAN as well as our thoughts on the [next generation of CKAN (v3)][v3].
* [DataHub][]: our version of a next generation of CKAN that powers DataHub.io. DataHub and CKAN v3 share many of the same core components. We are actively working on a DataHub v2 and an outline can be found here https://github.com/datopian/datahub-next

[Data Portals]: /data-portals/

### Solutions

You can use a DMS to build many kinds of specific solutions

* [Data Portals][portals] are gateways to data. That gateway can be big or small, open or restricted. For example, data.gov is open to everyone, whilst an enterprise "intra" data portal is restricted to its personnel.
* Data Catalog: see https://ckan.org/
* Metadata manager: see [Publishing][]
* Data Lake: you can use a DMS to rapidly create a data lake using existing infrastructure. For example, using the DMS' catalog and storage gateway with existing cloud storage and data processing capabilities.
* Data Engineering: you can use components of the DMS to rapidly create, orchestrate and supply data pipelines.

[dms]: /dms/
[portals]: /data-portals/
[Publishing]: /publish/
[DataHub]: /datahub/
[CKAN]: /ckan/
[v3]: /ckan-v3/

### Features

A DMS has a variety of features. This section provides an overview and links to specific feature pages that include details of how they work in CKAN and CKAN v3 / DataHub.

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRdMzNeIAEkjDRGtBfuocy6zDyRg_qDujSkLrTe69U1qlu_1kfTYN0OL_v4IZKKo0eDXRbCzgzQMlFz/pub?w=622&amp;h=635">

:::tip
There are many ways to break down features and this is just one framing. We are thinking about others and if you have thoughts please get in touch.
:::

* [Discovering and showcasing data (catalog and presenting)](/frontend/)
* [Views on data](/views/) including visualizing and previewing data as well [Data Explorers][explorer] and [Dashboards][]
* [Publishing data](/publish/)
* [Data API DataStore](/data-api)
* [Permissions](/permissions/) and [Authentication](/authentication/)
* [Versioning](/versioning/)
* [Harvesting](/harvesting/)

[Dashboards]: /dashboards/
[explorer]: /data-explorer/

### Components

A DMS has the following key components:

* [HubStore](/hubstore/)
* [Data Flows and Factory](/flows/)
  * [Loading to DataStore](/load/)
* [Storage](/storage/)
  * [Blob Storage](/blob-storage/)
  * [Structured Storage - see DataStore](/data-api/)

https://coggle.it/diagram/Xiw2ZmYss-ddJVuK/t/data-portal-feature-breakdown

<iframe width='853' height='480' src='https://embed.coggle.it/diagram/Xiw2ZmYss-ddJVuK/b24d6f959c3718688fed2a5883f47d33f9bcff1478a0f3faf9e36961ac0b862f' frameborder='0' allowfullscreen></iframe>

## Frictionless

The Frictionless approach to data. See https://frictionlessdata.io/

Our team created this whilst at Open Knowledge Foundatioin and continue to co-steward it.

## OpenSpending

https://openspending.org/

## Developer Experience

Service Reliability Engineering (SRE) and Developer Experience (DX) for our CKAN cluster technology.

* [Developer Experience][dx]
* [DX - Deploy](/dx/deploy/)
* [DX - Cluster](/dx/cluster/)

Old cluster

* [Deploy in old cluster](/deploy/)
* [Exporting from CKAN-Cloud](/migration/)
* [Cloud](/cloud/) - start on CKAN cloud documentation

## Research

* [Data Frames and what would a JS data frame library look like](/dataframe/)
* [Dataset Relationships](/relationships/)

## Miscellaneous

* [Glossary &raquo;](/glossary/)
* [Notebook -- our informal blog &raquo;](/notebook/)

[dx]: /dx/
