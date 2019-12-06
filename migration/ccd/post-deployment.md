---
sidebar: auto
---

# Post Deployment

## Debugging

To check all the logs at any time:  
```
sudo make logs O=<<instance-id>>
```

To check the logs for a specific service:  
```
sudo make logs O=<<instance-id>> S=<<Service Name>>
```
*(exit the logs by pressing Ctrl+C at any time)*

To get inside a running ckan container


```
sudo make shell O=<<instance-id>> S=<<Service Name>> C=<<command>>
```

Note: for some services (Eg: Nginx) you mite need to use C=`sh` instead of c=`bash`

## Configuration Files

The functionality and features of CKAN can be modified using many different configuration options. These are generally set in the CKAN configuration file.

Configurations are stored in `docker-compose/ckan-conf-templates/<<instance-id>>-theme-production.ini.template`. You can add or edit any CKAN configuration depending on your needs. Eg you might need to add some extensions related configuration to the file. Or add new extension to the list of existing ones.

_Note:_ You will need to restart you app after making changes to this file

- See CKAN documentations for better understanding of it's configurations https://docs.ckan.org/en/ckan-2.7.3/maintaining/configuration.html#ckan-configuration-file

## Project Specific Docker-Compose Files

There are few docker-files in the project that have their specific job and are used for proper build. You won't need to modify them unless you need them and know what are you doing. This files are

- Main [docker-compose.yaml](https://github.com/ViderumGlobal/ckan-cloud-docker/blob/master/docker-compose.yaml) - this is the base configuration file for the build.
- [.docker-compose-db.yaml](https://github.com/ViderumGlobal/ckan-cloud-docker/blob/master/.docker-compose-db.yaml) - this is used for configuring the build of database images


Most interesting for us is project specific [docker-compose files](https://github.com/ViderumGlobal/ckan-cloud-docker/blob/master/.docker-compose.datagov-theme.yaml) - Here you can find the configurations that overrides the main docker-compose.yaml as per project need. It's used to install new extensions, execute various command while build and aply patches. We will outline few useful tips

### POST_INSTALL

This is the section where you can add new extension that you need to install for CKAN app

CKAN extensions are mostly installed from GitHub repositories. Here you can define repository to install from, branch (optional) and egg (optional)

#### Example


```
install_standard_ckan_extension_github -r my/ckanext-example -b testing -e egg

install_standard_ckan_extension_github -r ckan/ckanext-dcat -b ckanext-dcat
```

### ROOT_INIT

Due to security CKAN app is run by `ckan` user, meaning that user does not have premission to do everything inside container. In this section you can execute useful commands for you as a root.

#### Example
```
mkdir -p /var/log/supervisor
chown ckan:ckan /var/log/supervisor
```

### POST_DOCKER_BUILD

Here you can execute command that are needed to be run after the build is finished

#### Example

```
mkdir -p /var/tmp/ckan/dynamic_menu &&\
mkdir -p /var/log/ckan/std/
```

### CKAN_INIT

Here you can define CKAN CLI commands to be executed after the build, eg: initialize databases

#### Example

```
ckan-paster --plugin=ckanext-archiver archiver init  -c "CKAN_CONFIG/production.ini"
ckan-paster --plugin=ckanext-report report initdb  -c "CKAN_CONFIG/production.ini"
ckan-paster --plugin=ckanext-harvest harvester initdb  -c "CKAN_CONFIG/production.ini"
```

### EXTRA_PACKAGES

Here you can define any extra packages from `apt` repository

#### Example

```
supervisor cron
```

### EXTRA_FILESYSTEM

Here you can define the path to the folder/files that you want to mount on docker container file system.

#### Example

```
./overrides/<<instance_id>>/filesystem/
```

## Installing and enabling a new extension

CKAN allows installing various extensions (plugins) to the existing core setup. In order to enable/disable them you will have to install them and include into the ckan config file.

To install extension you need to modify `POST_INSTALL` section of ckan service in `.docker-compose.{instance-id}-theme.yaml`. Eg to install s3filestore extension

```
POST_INSTALL: |
  install_standard_ckan_extension_github -r datopian/ckanext-s3filestore &&\
```

And add extension to the list of plugins in `docker-compose/ckan-conf-templates/{instance-id}-theme-production.ini.template`

```
# in docker-compose/ckan-conf-templates/{instance-id}-theme-production.ini.template
ckan.plugins = image_view
   ...
   stats
   s3filestore
```

Note: depending on extension you might also need to update extensions related configurations in the same file. If needed this type of information is usually included in extension REAMDE.

```
# in docker-compose/ckan-conf-templates/{instance-id}-theme-production.ini.template
ckanext.s3filestore.aws_access_key_id = Your-Access-Key-ID
ckanext.s3filestore.aws_secret_access_key = Your-Secret-Access-Key
ckanext.s3filestore.aws_bucket_name = a-bucket-to-store-your-stuff
ckanext.s3filestore.host_name = host-to-S3-cloud storage
ckanext.s3filestore.region_name= region-name
ckanext.s3filestore.signature_version = signature (s3v4)
```

In order to disable extension you can simple remove it from the list of plugins. You will probably also want to remove it from `POST_INSTALL` part to avoid redundant installs, although this is not must.

## Patching

Sometimes you need to patch core CKAN codebase. You should place patches in `ckan/overrides/<<instance-id>>/filesystem/etc/patches/<<folder-to-patch>>/my.patch`.

You need to also include `./post_install_functions.sh && patch_ckan` in `ROOT_INIT` commands. See [ROOT_INIT](ROOT_INIT)

#### Example

- `ckan/overrides/my-project/filesystem/etc/patches/ckan/disable_streaming.patch`
- `ckan/overrides/my-project/filesystem/etc/patches/ckanext-views/enable_grid.patch`

## Additional Configurations

### Configure SMTP

CKAN needs credentials and your SMTP server information in order to start sending emails. You can choose SMTP service provider of your choice like mailgun,  sendgrid or any other. You will need following info from you provider

- Username - SMTP user
- Password - password or API key associated with user
- Server (Including port number) - SMTP server url
- Mail From - valid email address the mail should be sent from

Once you have all the needed info run ./create_secrets.py and fill the prompt #[14] - #[16]

#### Example

- User: no-reply@hosting.ckanmail.com
- Server: smtp.mailgun.org:587
- Password: PassW0rD
- Mail From: no-reply@hosting.ckanmail.com

### Configure Sentry

You might need to receive notifications whenever your CKAN applications, so that you can easily monitor, scale and manage them. You can configure CKAN simply by setting sentry DNS. run ./create_secrets.py and fill the prompt #[20]

#### Example

- Sentry_dns: https://user_name:password@sentry.io/1234567

### Configure Google-Analytics

You might want to be able to track and monitor CKAN application usage. You will need following info from your Google Analytics account

- GA account - usually the website name
- GA ID - Unique ID
- GA Password - Password from account (you might need to create dedicated account for this specific use and give appropriate permission)
- GA username - User Name

You can configure CKAN app by running ./create_secrets.py and fill the prompts #[21] - #[24]

#### Example

- GA account - datopian
- GA ID - UA-123456678-1
- GA Password - SecrEt
- GA username - datopian.analytics@datopian.com

## Sysadmin Guide

Step by step for sysadmin experts (IT department) for what can you do as admin

## Creating users

To perform any action other than viewing or downloading data in CKAN, a user must be registered and logged in. Each user can have a different role assigned that grants more or less permissions.

### System Administrators (sysadmins)

The highest level is the System Administrator, usually known as sysadmin. Sysadmins have full control over the portal, both through the interface and the API, they can for example:

- create organizations, categories and datasets in any organization
- create and delete existing users
- modify the content of the accessory pages

Obviously it is a role with a lot of responsibility so it is important not to limit the number of sysadmins but to be clear at all times who has that role. Sysadmins users are created manually on the server, so the team that is responsible for hosting the portal and has the ability to execute commands on it must create the required users with the following commands:

```
sudo make user O = <<instance-id>> U = admin P = 123456 E=admin@datpian.com
sudo make sysadmin O = <<instance-id>> U = admin
```

At any time a sysadmin user can check the Sysadmin users

### Sysadmin Control Panel

Here you can edit portal related configuration, like website title, site logo or add custom styling. Login as sysadmin and navigate to ckan-admin/config page and make changes you need. Eg: https://demo.ckan.org/ckan-admin/config

## Creating organizations

The actions in CKAN that require some type of authorization are carried out by Users. All users must belong to one or more Institutions (Organizations). Organizations can be different government offices, different data publishers, etc… Within an organization users can have different roles (Administrator, Editor or Member of the Organization).

You can create organizations with both Web UI or using CKAN API. You will need to be sysadmin to perform that action.

To create an organization:
1. Select the “Organizations” link at the top of any page.
2. Select the “Add Organization” button below the search box.
3. CKAN displays the “Create an Organization” page.
4. Enter a name for the organization, and, optionally, a description and image URL for the organization’s home page.
5. Select the “Create Organization” button. CKAN creates your organization and displays its home page. Initially, of course, the organization has no datasets.

Post Deployment

Alternatively you can send a POST request to CKAN API

### Example

See also [documentation](https://docs.ckan.org/en/2.8/api/#ckan.logic.action.create.organization_create)

```
curl -X POST https://demo.ckan.org/api/3/action/organization_create -H "Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c" -d '{
  "name": "demo-organization",
  "title": "Demo Organization",
  "description": "This is my awesome organization"
}'
```

## Resetting passwords

CKAN gives the ability to reset passwords by default. All you need is to configure your SMTP credentials properly (see Configure SMTP). All you need is to navigate /user/reset page of your portal

## Configuring visualizations

The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views. There are a number of different extensions that are providing different types of visualizations:
- [Data Explorer](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#data-explorer)
- [DataStore Grid](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#datastore-grid)
- [DataStore Graph](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#datastore-graph)
- [DataStore Map](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#datastore-map)
- [Text view](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#text-view)
- [Image view](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#image-view)
- [Web page view](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#web-page-view)
- [Other view plugins](https://docs.ckan.org/en/2.8/maintaining/data-viewer.html#other-view-plugins)

Like any other extensions, in order to be used on the site, these have to be loaded in the configuration of the site. Apart from this, each display plugin determines which resource you can view, usually depending on the format of that resource. There will not be the same plugins available for a PDF file as a CSV file or a WMS service for example.

You can find the CKAN configuration file located in `ckan-cloud-docker/tree/master/docker-compose/ckan-conf-templates/<<instance-id>>-themer-production.ini.template`

All you need is to add desired extension to plugins

```
ckan.plugins = … inside your .ini.template and restart the application.
```

## Creating new public folders

The visualization applications can be assigned to top-level Application Groups.

![](https://i.imgur.com/nZ6uwzz.png)


In order to update the available application groups, all you need is to edit `docker-compose/ckan-conf-templates/<<instance-id>>-theme-production.ini.template`.

- Find `ckanext.querytool.groups` there or add new line if it's not already there.

```
ckanext.querytool.groups = brazil:Brazil,china:营养,mexico:Mexico"
```

These comma-separated key:Value pairs represent the path and the title of the application group.

## Troubleshooting

### Build is taking too much time (couple  of ours)

This might be caused by your country blocking `pip` or `apt` package managers for wahtever reasons. You can use your local mirrors if such exists See [Use Local-mirrors](#Local-mirrors)

### No rule to make target

```
make start
make: *** No rule to make target 'start'.  Stop.
```

This most probably means that uou are in wrong working directory. try `cd /opt/ckan-cloud-docker`.

_Note:_ You migt be using different directory - `/opt/ckan-cloud-docker` is that one stated in this guide.

### PluginNotFound Error

CKAN App might start throwing errors in container logs on startup like `PluginNotFound(plugin-name)`.

You've most probably forgot to add extensions in `POST_INSTALL` section to actually install the extension. See [POST_INSTALL](#POST_INSTALL)

### New extension does not show up on the portal

If you don't see the new extenion installed on the portal, make sure you've updated `ckan.plugins` in configuration file. See [Configuration Files](#Configuration-Files)
