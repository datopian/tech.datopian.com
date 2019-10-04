---
sidebar: auto
---

# Getting Started: CKAN Classic

Here you'll learn how to install and run CKAN on your local machine. In the end, you can play with it importing and visualising data. 

## Prerequisites

As CKAN stack is not simple we opted for standardizing our instructions with Docker Compose, which will help you spin up every service in a few commands.

If you already have Docker-compose, you are up to go! If not, please, follow instructions on [how to install docker-compose](https://docs.docker.com/compose/install/)

On Ubuntu you can run:

```
sudo apt-get update
sudo apt-get install docker-compose
```

## Running CKAN locally for Development

### Cloning the repo

```
git clone https://github.com/okfn/docker-ckan
cd docker-ckan
```

### Booting CKAN

Create a local environment file:

```
cp .env.example .env
```

Build and Run the instances:

```
docker-compose -f docker-compose.dev.yml up --build
```

When you see this log message:

![](https://i.imgur.com/WUIiNRt.png)

You can navigate to `http://localhost:5000` 

![CKAN Home Page](https://i.imgur.com/T5LWo8A.png)

and log in with the credentials that docker-compose setup created for you [user: `ckan_admin` password:`test1234`]

::: tip
For the key concepts of what is CKAN and how it works you can read the [CKAN User Guide](https://docs.ckan.org/en/2.8/user-guide.html).
:::

## Next Steps

[Play around with CKAN portal](/ckan/play-around)

## Troubleshooting

Login / Logout button breaks the experience:

- Change the `http://ckan:5000` to `http://localhost:5000`. A complete fix is described in the [Play around with CKAN portal](/ckan/play-around). ( You next step ;) )