---
sidebar: auto
---

Getting Started: CKAN Classic
=============================

## Pre-requisites

If you already have Docker-compose, you are up to go! If not, please, follow instructions on [how to install docker-compose](https://docs.docker.com/compose/install/)

## Running CKAN locally for Development

As CKAN stack is not simple we opted for standardizing our instructions with Docker Compose, which will help you spin up every service in a few commands.

Clone the Repo:

```
git clone https://github.com/okfn/docker-ckan
```

Create a local environment file:

```
cp .env.example .env
```

Build and Run the instances:

```
docker-compose -f docker-compose.dev.yml up
```

When you see this log message:

![](https://i.imgur.com/WUIiNRt.png)

You can navigate to `http://localhost:5000` and log in with the credentials that docker-compose setup created for you [user: `ckan_admin` password:`test1234`]

![CKAN Home Page](https://i.imgur.com/eMrNt28.png)

::: tip
For the key concepts of what is CKAN and how it works you can read the [CKAN User Guide](https://docs.ckan.org/en/2.8/user-guide.html).
:::

## Play Around with Your Instance

After booting up the CKAN instance you shoul be able to access the portal on http://ckan:5000

*Note:* You might need to update your `/etc/hosts`:
```
vi /etc/hosts    #You can choose editor of your choce
# add following
127.0.0.1 ckan
```

### Key data portal concepts

CKAN is a tool for making open data websites. It helps you manage and publish collections of data.
It's based on some core concepts:

- [Datasets And Resources](https://docs.ckan.org/en/2.8/user-guide.html#datasets-and-resources)
- [Users And Organizatons](https://docs.ckan.org/en/2.8/user-guide.html#users-organizations-and-authorization)

### Check CKAN API

Check status with curl or from browser

```
curl https://ckan:5000/api/3/action/status_show
```

You should be able to see something simlar:

```
{
  "help": "https://ckan:5000/api/3/action/help_show?name=status_show",
  "success": true,
  "result": {
  "ckan_version": "2.8.2",
  "site_url": "https://ckan:5000",
  "site_description": "Testing",
  "site_title": "CKAN Demo",
  "error_emails_to": null,
  "locale_default": "en",
  "extensions": [
    "envvars",
    ...
    "demo"
    ]
  }
}
```

In case you see internal server error please check the logs in your terminal.

### Few useful API endpoints to start with

CKAN’s Action API is a powerful, RPC-style API that exposes all of CKAN’s core features to API clients. All of a CKAN website’s core functionality (everything you can do with the web interface and more) can be used by external code that calls the CKAN API. For example, using the CKAN API your app can:

```
# Get list of all datasets dataset
curl http://ckan:5000/api/3/action/package_list

# Search for dataset
curl http://ckan:5000/api/3/action/package_search?q=demo

# Get dataset details
http://ckan:5000/api/3/action/package_show?id=<<package_id>>

# Search for resource
curl http://ckan:5000/api/3/action/resource_search?id=<<resource_id>>

# Get resource details
curl http://ckan:5000/api/3/action/resource_show?id=<<resource_id>>

# Get list of organizations
curl http://ckan:5000/api/3/action/organization_list

# Get organizations details
curl http://ckan:5000/api/3/action/organization_show?id=<<organization_id>>

# Get list of groups
curl http://ckan:5000/api/3/action/group_list

# Get user details
curl http://ckan:5000/api/3/action/user_show?id=<<user_id>>
```

*Note:* These are only few examples. You can find full list of API actions in [CKAN API guide](https://docs.ckan.org/en/2.8/api/#action-api-reference)

### Create: POST API

In order to create your first dataset you need few things upon:

- Get a Sysadmin API key
- Create organization
- And create dataset inside organization

#### Get a Sysadmin Key

You can see sysadmin credentials in `.env.example`. By default they should be

- Username: ckan_admin
- Password: test1234

1. Navigate to http://ckan:5000/user/login and login
2. Click on your username (`ckan_admin`) in the up right corner
3. Scroll down until you see `API Key` on the left screen and copy it's value. Should look something simlar to `c7325sd4-7sj3-543a-90df-kfifsdk335`

#### Create Organization

You can create organization from browser easely, but let's use [CKAN API](https://docs.ckan.org/en/2.8/api/#ckan.logic.action.create.organization_create) to do so.

```
curl -X POST http://ckan:5000/api/3/action/organizaton_create -H "Authourization: <<API_KEY>>" -d '{ \
 "name": "demo-organization", \
 "title": "Demo Organization", \
 "description": "This is my awesome organization" \
}'
```

#### Create Dataset

Now we are ready to create our first dataset.

```
curl -X POST http://ckan:5000/api/3/action/package_create -H "Authourization: <<API_KEY>>" -d '{ \
 "name": "my-first-dataset", \
 "title": "My First Dataset", \
 "description": "This is my first dataset!" \
 "owner_org": "my-organization"\
}'
```

This will create an empty (draft) dataset. Now let's add resource to it

```
curl -X POST http://ckan:5000/api/3/action/resource_create -H "Authourization: <<API_KEY>>" -d '{ \
 "package_id": "my-first-dataset", \
 "url": "https://raw.githubusercontent.com/frictionlessdata/test-data/master/files/csv/100kb.csv", \
 "description": "This is the best resource ever!" \
 "name": "brand-new-resource"\
}'
```

That's it! Now you should be able to you resource on the portal http://ckan:5000/dataset/my-first-dataset/resource/brand-new-resource