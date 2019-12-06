---
sidebar: auto
---

# Before Deployment

## Requirements

General list of requirements to host and maintain the open data portal:

- All appropriate security processes and practices for hosting publicly accessible applications on the Internet.
- Ability to run recent versions of Ubuntu or Debian operating systems on virtual machines, including regular security and maintenance updates for the operating system.
- Ability to deploy multiple machines for different purposes, for example a staging environment for testing changes to the open data portal, and a production environment which is publicly accessible.
- Ability to upgrade production systems with CKAN updates over time, and also update supporting software (for example, SOLR for the search functionality, and PostgresQL which provides the database).
- Processes and practices for regular deployment of code to production and staging servers.
- Processes and practices for backup of code and data of the open data portal, including ability to restore the portal from backups in disaster events.
- One developer with intermediate-to-expert knowledge of the Python programming language.
- One system administrator with expert knowledge of linux system administration.

## Software and Hardware recommendations

### Preparation

Prior to the deployment, the client should prepare the following:

- If a cloud provider is selected as a deployment target, the client should have already created an account.
  - We can assist them with choosing the instance specs, in which case we should have access to their account as well.
  - Depending on the provider, this might involve them handing over their credentials for us to create server instances.
- Access to their DNS settings
  - We might need to point a (sub)domain to one or more machines. The client should be able to amend their DNS configuration to the domains they want to point to the new machines.
  - We do not want or need their DNS provider credentials - this is a one time operation.
- If the client have a preferred SSL provider, they should have already created accounts / certificates for the target (sub)domain. We only need the certificates, not the means to create / revoke them. In case they are fine with issuing Let’s Encrypt certificates, nothing would be needed from their side.
- If the deployment involves connecting to external or 3rd party services (database systems, monitoring, backups etc.) we should have the credentials to set up the instance accordingly.
- Last but not least, we will need SSH access to the deployment target machines.

### Checklist

Checklist of items to take into account before deploying:

|Item |Details|
|-----|------|
|Understand the expected working point|Estimate <br> load <br> storage <br> # of datasets <br> # of users <br>Expected API usage (internal or external) <br> <br> Also if there are any: <br> Security considerations <br> Environmental considerations|
|Set basic HW requirements|Decide what’s the best hardware configuration based on the client’s limitations. <br> We recommend deployments to 1 server. If a deployment to setup with more than 1 server its needed, it can be done but it requires extra effort on both ends. <br><br> Ballpark figures for common hardware requirements: <br> For a large national portal with heavy traffic: <br> - Server with 16GB of RAM, 4 cores <br> - 512GB attached storage (you may want to increase size if you intend to do a lot of file storage) <br><br> For a city level portal with lower traffic levels: <br> - Server with 4GB of RAM, 2 cores <br> - 256GB attached storage (you may want to increase size if you intend to do a lot of file storage)|
|Collect existing peripheral systems|Understand which already existing systems the client already has for monitoring, logging, backup etc.|
|Decide on architecture|Right now docker compose setup only.|
|Make sure correct OS is used|Container optimized OS / Debian - or anything containing preinstalled docker with a high enough version.|
|Set up network policy|Allow HTTP, HTTPS, SSH.|
|Acquire DB credentials| (If client has and maintains own DB server:) <br> We send them SQL commands to create the database and they provide us with credentials. <br><br> (If client has DB server:) <br> They provide us with credentials and we use them to create DB. <br><br>(Otherwise:) <br> We set up dedicated DB inside cluster / using a cloud service (e.g. RDS).|
|Installation via docker| (If we have ssh access:) <br> We use docker with ssh credentials. <br> (We have terminal access:) <br>Pull, build, run locally.<br>(We have physical access, not Internet connectivity:)<br>Export / import docker images & run locally.|
|Create Admin User|Instructions in docs.|
|Connect domain|Modify DNS records.
|Set up SSL|(If client is ok with letsencrypt:) <br> Use traefik to set it up. <br> (If client has their own certificate:) <br>Install on traefik.
|Test|Common tests using automation tool.<br>Specific tests to custom extensions.<br>Acceptance tests as agreed upon with the client.
|Monitoring, logging and backup|Connect with local systems for monitoring, logging and backup. <br><br>Set up our own solutions such as: <br>- Sentry<br>- TBD (need to create a list of 'recommended providers', in case the client doesn't have own solution)<br>- Backups - we need to make sure to expose the correct volumes (TBD a list of which ones)|

## Next Steps

Read the [Deployment Guide](/migration/ccd/deployment)
