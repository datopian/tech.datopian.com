---
sidebar: auto
---

Getting Started: CKAN Classic
=============================

## Pre Requisites

This guide assumes that you are familiar with the common concepts behind CKAN. If you are not quite comfortable you should first review CKAN documentation, here we list some suggestions:
 * [CKAN User Guide](https://docs.ckan.org/en/2.8/user-guide.html)
 * [CKAN Architecture](https://docs.ckan.org/en/2.8/contributing/architecture.html)
 * [CKAN Install from Docker-Compose](https://docs.ckan.org/en/2.8/maintaining/installing/install-from-docker-compose.html) (Just read it to get familiar with all the components of a typical deployment)
 * [Writing extensions tutorial](https://docs.ckan.org/en/2.8/extensions/tutorial.html)

If you are not familiar with docker we recommend you to read the following resources: 
 * [Docker Getting Started Guide](https://docs.docker.com/get-started/) 
 * [Docker Compose Getting Started]()
 * [Docker Variables](http://vsupalov.com/docker-env-vars/)


## Running CKAN locally for Development

The goal of this section is to have a quick on-boarding with the basic concepts and components of CKAN. This guide will give you a set of tools to set up your local development environment and start your journey as a CKAN developer.

Will be using the docker images and docker-compose setup for CKAN created by the Open Knowledge Foundation and available in their Github repository: [okfn/docker-ckan](https://github.com/okfn/docker-ckan) so reading it's README before continuing is recommended.

**Note:** Each project may have different approachs to set up local environments so a *Next Steps* section will be covering those more advanced topics.



### How to quickly install CKAN and have a running instance locally

You will need [docker-compose](https://docs.docker.com/compose/install/) to be installed on your machine or VM.

* Clone the Repo:
```
# Clone docker-ckan
git clone https://github.com/okfn/docker-ckan
```
* Copy the included `.env.example` and rename it to `.env`. Using the default values on the ``.env.example` file will get you a working CKAN instance.
* Build and Run the instances: 
```
# Build and start CKAN instance
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
```
* There is a sysadmin user created by default with the values defined in `CKAN_SYSADMIN_NAME` and `CKAN_SYSADMIN_PASSWORD`(`ckan_admin` and `test1234` by default)
* Navigate to `127.0.0.1:5000` to log in into your CKAN instance

### How to create an extension template in my local machine

You can use the `paster` command in much the same way as a source install. To create an extension:

* Execute the following command
```
docker-compose -f docker-compose.dev.yml exec ckan-dev /bin/bash -c "paster --plugin=ckan create -t ckanext ckanext-myext -o /srv/app/src_extensions"
```
This will create an extension template inside the container's folder `/srv/app/src_extensions` which is mapped to your local `src/` folder.

Now you can navigate to your local folder `src/` and see the extension created by the previous command and open the project in your favorite IDE.


### How to separate that extension in a new git repo so I can have independence to install it in other instances

Crutial thing is to understand that extensions get their own repositories on GitHub (or elsewhere). You can first create repostiroy for extension and later clone in `src/` or do opposite as following:

* Create the Extension, for this example: `ckanext-myext`.
```
docker-compose -f docker-compose.dev.yml exec ckan-dev /bin/bash -c "paster --plugin=ckan create -t ckanext ckanext-myext -o /srv/app/src_extensions"
```

* Init your new git repository into the extension folder `src/ckanext-myext`
```
cd src/ckanext-myext
git init
```
* Configure remote/origin
```
git remote add origin <remote_repository_url>
```
* Add your files and push the first commit
```
git add .
git commit -m 'Initial Commit'
git push
```

**Note:** Notice that the `src/` folder is gitignored in `okfn/docker-ckan` repository, so initializing new git repositories inside is ok.

### How to quickly refresh the changes in my extension into the dockerized env so I can have quick feedback of my changes

This docker-compose setup for dev environment is already configured so that it sets `debug=True` inside configuration file and auto reloads on python and templates related changes. You do not have to reload when making changes to HTML, JavaScript files neither configuration files - you just need to refresh the page in the browser.

See the CKAN images section of the [repository documentation](https://github.com/okfn/docker-ckan#ckan-images) for more detail

### How to run tests for my extension in the dockerized environment so I can have a quick test-development cycle

We write and store unit tests inside the `ckanext/myext/tests` directory. To run unit tests you need to be running the `ckan-dev` service of this docker-compose setup.

* Once running, in another terminal window run the test command:
```
docker-compose -f docker-compose.dev.yml exec ckan-dev nosetests --ckan-dev --nologcapture --reset-db -s -v --with-pylons=/srv/app/src_extensions/ckanext-myext/test.ini /srv/app/src_extensions/ckanext-myext/
```

You can also pass nosetest arguments to debug
```
--ipdb --ipdb-failure
```

**Note:** Right now all tests will be run, it is not possible to choose a specific file or test.

### How to debug my methods in the dockerized env so I can have a better understanding of whats going on with my logic

To run a container and be able to add a breakpoint with `pdb`, run the `ckan-dev` container with the `--service-ports` option:

```
docker-compose -f docker-compose.dev.yml run --service-ports ckan-dev
```

This will start a new container, displaying the standard output in your terminal. If you add a breakpoint in a source file in the `src` folder (`import pdb; pdb.set_trace()`) you will be able to inspect it in this terminal next time the code is executed.

### How to debug core CKAN code

Currently, this docker-compose setup doesn't allow us to debug core CKAN code since it lives inside the container. However we can do some hacks so the container uses a local clone of the CKAN core hosted in our machine. To do it:

- Create a new folder called `ckan_src` in this `docker-ckan` folder at the same level of the `src/`
- Clone ckan and checkout the version you want to debug/edit

```
git https://github.com/ckan/ckan/ ckan_src
cd ckan_src
git checkout ckan-2.8.3
```

- Edit `docker-compose.dev.yml` and add an entry to ckan-dev's and ckan-worker-dev's volumes. This will allow the docker container to access the CKAN code hosted in our machine.

```
   - ./ckan_src:/srv/app/ckan_src
```

- Create a script in `ckan/docker-entrypoint.d/z_install_ckan.sh` to install CKAN inside the container from the cloned repository (instead of the one installed in the Dockerfile)

```
#!/bin/bash
echo "*********************************************"
echo "overriding with ckan installation with ckan_src"
pip install -e /srv/app/ckan_src
echo "*********************************************"
```

That's it. This will install ckan inside the container in development mode, from the shared folder. Now you can open the `ckan_src/` folder from your favourite IDE and start working on CKAN.

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