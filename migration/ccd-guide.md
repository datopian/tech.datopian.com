---
sidebar: auto
---

# CCD deployment - System Administrator Guide

CKAN is a tool for making open data websites. (Think of a content management system like WordPress - but for data, instead of pages and blog posts.) It helps you manage and publish collections of data. It is used by national and local governments, research institutions, and other organizations who collect a lot of data.

CKAN has a powerful API (machine interface), which makes it easy to develop extensions and links with other information systems. This gives us ability to build useful functionalities, visualizations and styling on top of what CKAN offers by default. Extensions are python packages that are installed on the machine (or docker container) together with CKAN.

Besides bare CKAN and it's extensions CKAN needs few other services to be running in background so that it works. This services are

- Postgres Database
- SOLR search engine
- Redis database

Docker compose setup, covered in this guide, takes care of installing and connecting all services together with only few commands.

## Guides

- [Before Deployment](/migration/ccd/before-deployment)
- [Deployment](/migration/ccd/deployment)
- [Post Deployment](migration/ccd/post-deployment)

## Useful Links and Readings

- CKAN Documentation - https://docs.ckan.org/en/2.8/
- Sysadmin Guide - https://docs.ckan.org/en/2.8/sysadmin-guide.html
- API Guide - https://docs.ckan.org/en/2.8/api/index.html
- Extension Guide https://docs.ckan.org/en/2.8/extensions/index.html
- Theaming Guide - https://docs.ckan.org/en/2.8/theming/index.html
