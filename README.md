---
heroImage: https://www.datopian.com/img/datopian-logo.png
heroText: Datopian Engineering
tagline: Experts in data management 
pageClass: home
footer: Copyright © 2016-present Datopian
---

<div class="hero">
  <h1>Datopian Tech 👩‍💻</h1>

  <a href="https://datopian.com/"><img src="https://www.datopian.com/img/datopian-logo.png" /></a>

  <p class="description">
    We are experts in data management
    <br/>
    This is an overview of our technology
  </p>
</div>

## Data Management Systems

[Data Management Systems (DMS)][dms] is a *system* or *framework*. It is a core technology and can be used to create a variety of *solutions* such as Data Portals, Data Catalogs etc.

We have two related DMS stacks:

* [CKAN][] is the open source data management system we created in 2007 and that we continue to develop and maintain. The main information on CKAN is at https://ckan.org/. Here we have some specific notes on how we develop and deploy CKAN as well as our thoughts on the next generation of CKAN (v3).
  * [Vision for CKAN v3 (next gen)][v3]
* [DataHub][] -- DataHub represents our vision for a next generation of CKAN and powers DataHub.io. DataHub and CKAN v3 share many of the same core components.

### Applications

You can use a DMS to build many kinds of specific applications:

* [Data Portals][portals] are gateways to data. That gateway can be big or small, open or restricted. For example, data.gov is open to everyone, whilst an enterprise "intra" data portal is restricted to its personnel.
* Data Catalog -- for now see https://ckan.org/

[dms]: /dms/
[portals]: /data-portals/
[DataHub]: /datahub/
[CKAN]: /ckan/
[v3]: /ckan-v3/

### Features

A DMS has a variety of features. This section provides an overview and links to specific feature pages that include details of how they work in CKAN and CKAN v3 / DataHub.

:::tip
There are many ways to break down features and this is just one framing. We are thinking about others and if you have thoughts please get in touch.
:::

* [Discovering and showcasing data (catalog and presenting)](/frontend/)
  * [Views on data](/views/)
  * [Visualization and Dashboards](/#visualizations-and-dashboards)
* [Publishing data](/publish/)
* [Data API and DataStore](/data-api)
* Authentication and Authorization
  * [Permissions](/permissions/)
  * [Identify, Profiles and Authentication](/authentication/)
* [Versioning](/versioning/)
* [Harvesting](/harvesting/)

Technical features

* [HubStore](/hubstore/)
* [Data Flows and Factory](/flows/)
  * [Loading to DataStore](/load/)
* [Storage](/storage/)
  * [Blob Storage](/blob-storage/)
  * [Structured Storage - see DataStore](/data-api/)

https://coggle.it/diagram/Xiw2ZmYss-ddJVuK/t/data-portal-feature-breakdown

<iframe width='640' height='360' src='https://embed.coggle.it/diagram/Xiw2ZmYss-ddJVuK/b24d6f959c3718688fed2a5883f47d33f9bcff1478a0f3faf9e36961ac0b862f' frameborder='0' allowfullscreen></iframe>

## Visualization and Dashboards

* [Data Explorer][explorer]
* [Dashboards](/dashboards/)

[explorer]: /data-explorer/

## Frictionless

The Frictionless Data toolkit. See https://frictionlessdata.io/

Our teaem created whilst at Open Knowledge Foundatioin and continue to co-steward it.

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

## Glossary

[Glossary &raquo;](/glossary/)

## Notebook

[Notebook -- our informal blog](/notebook/)

[dx]: /dx/
