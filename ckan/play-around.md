---
sidebar: auto
---

# How to play around with CKAN

## Prerequisites

- We assume you've already complete the [Getting Started Guide](/ckan).
- You have basic understanding of Key data portal concepts:

CKAN is a tool for making data portals to manage and publish datasets. You can read about the key concepts such as Datasets and Organizations in the User Guide -- or you can just dive in and play around!

https://docs.ckan.org/en/2.8/user-guide.html


::: tip
Install a [JSON formatter plugin for Chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) or browser of your choice

If you are familiar the command line tool [curl] you can use that.

In this tutorial we will be using `curl` but for most of the commands you can paste a link to your browser. For POST command you can use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
:::


## Play Around with Your Instance

At this point you should be able to access the portal on http://ckan:5000

![CKAN Home Page](https://i.imgur.com/T5LWo8A.png)

::: tip
By default portal is accessible on http://localhost:5000, Let's update your `/etc/hosts` access it on http:///ckan:5000:
```
vi /etc/hosts    #You can choose editor of your choce
# add following
127.0.0.1 ckan
```
:::

Lets add some fixtures to it - run following from your terminal:

```
docker-compose -f docker-compose.dev.yml exec ckan-dev paster --plugin=ckan create-test-data -c production.ini
```

You should be able to see 2 new datasets on home page

![CKAN with data](https://i.imgur.com/BiSifyb.png)

### Check CKAN API

For this tutorial we are focusing on the API as that is central to your work as a Developer. If you want to explore the web user interface more go to http://ckan:5000 and play around yourself.

#### Let's check portal status

http://ckan:5000/api/3/action/status_show

You should see something like:

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

This means everything is ok, CKAN poral is up and running, API is working as expected. In case you see internal server error please check the logs in your terminal.

### A Few useful API endpoints to start with

CKAN’s Action API is a powerful, RPC-style API that exposes all of CKAN’s core features to API clients. All of a CKAN website’s core functionality (everything you can do with the web interface and more) can be used by external code that calls the CKAN API.

#### Get list of all datasets dataset on the portal

http://ckan:5000/api/3/action/package_list

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=package_list",
  "success": true,
  "result": ["annakarenina", "warandpeace"]
}
```

#### Search for dataset

http://ckan:5000/api/3/action/package_search?q=russian

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=package_search",
  "success": true,
  "result": {
    "count": 2,
    ...
  }
}
```

#### Get dataset details

http://ckan:5000/api/3/action/package_show?id=annakarenina

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=package_show",
  "success": true,
  "result": {
    "license_title": "Other (Open)",
    ...
  }
}
```

#### Search for resource

http://ckan:5000/api/3/action/resource_search?query=format:plain%20text

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=resource_search",
  "success": true,
  "result": {
    "count": 1,
    "results": [
      {
        "mimetype": null,
        ...
      }
    ]
  }
}
```

#### Get resource details

http://ckan:5000/api/3/action/resource_show?id=288455e8-c09c-4360-b73a-8b55378c474a
```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=resource_show",
  "success": true,
  "result": {
    "mimetype": null,
    ...
  }
}
```

*Note:* These are only few examples. You can find full list of API actions in [CKAN API guide](https://docs.ckan.org/en/2.8/api/#action-api-reference)

### Create Organizations, Datasets and Resources

There are 3 steps:

- Get an API key
- Create organization
- And create dataset inside organization (you can't cretae a dataset without a parent organization)

#### Get a Sysadmin Key

In order to create your first dataset you need an API key.

You can see sysadmin credentials in `.env`. By default they should be

- Username: ckan_admin
- Password: test1234

1. Navigate to http://ckan:5000/user/login and login
2. Click on your username (`ckan_admin`) in the up right corner
3. Scroll down until you see `API Key` on the left screen and copy it's value. Should look something simlar to `c7325sd4-7sj3-543a-90df-kfifsdk335`

#### Create Organization

You can create organization from browser easely, but let's use [CKAN API](https://docs.ckan.org/en/2.8/api/#ckan.logic.action.create.organization_create) to do so.

```
curl -X POST http://ckan:5000/api/3/action/organization_create -H "Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c" -d '{
  "name": "demo-organization",
  "title": "Demo Organization",
  "description": "This is my awesome organization"
}'
```

Response:

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=organization_create",
  "success": true,
  "result": {"users": [
    {
    "email_hash":
    ...
    }
  ]}
}
```

#### Create Dataset

Now we are ready to create our first dataset.

```
curl -X POST http://ckan:5000/api/3/action/package_create -H "Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c" -d '{
 "name": "my-first-dataset",
 "title": "My First Dataset",
 "description": "This is my first dataset!",
 "owner_org": "demo-organization"
}'
```

Response:

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=package_create",
  "success": true,
  "result": {
    "license_title": null,
    ...
  }
}
```

This will create an empty (draft) dataset.

#### Add resource to it

```
curl -X POST http://ckan:5000/api/3/action/resource_create -H "Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c" -d '{
  "package_id": "my-first-dataset",
  "url":  "https://raw.githubusercontent.com/frictionlessdata/test-data/master/files/csv/100kb.csv",
  "description": "This is the best resource ever!" ,
  "name": "brand-new-resource"
}'
```

Response:

```
{
  "help": "http://ckan:5000/api/3/action/help_show?name=resource_create",
  "success": true,
  "result": {
    "cache_last_updated": null,
    ...
  }
}
```

That's it! Now you should be able to see your adtaset on the portal http://ckan:5000/dataset/my-first-dataset
