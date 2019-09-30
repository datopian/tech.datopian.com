---
sidebar: auto
---

Getting Started: CKAN Classic
=============================

## Running CKAN locally for Development

As CKAN stack is not simple we opted for standardizing our instructions with Docker Compose, which will help you spin up every service in a few commands.

If you already have Docker-compose, you are up to go! If not, please, follow instructions on [how to install docker-compose](https://docs.docker.com/compose/install/)

On Ubuntu you can run:

```
sudo apt-get update
sudo apt-get install docker-compose
```

Clone the Repo:

```
git clone https://github.com/okfn/docker-ckan
cd docker-ckan
```

Create a local environment file:

```
cp .env.example .env
```

Edit the new `.env ` at the line 7 to look like this:

```
CKAN_SITE_URL=http://localhost:5000
```


Build and Run the instances:

```
docker-compose -f docker-compose.dev.yml up --build
```

When you see this log message:

![](https://i.imgur.com/WUIiNRt.png)

You can navigate to `http://localhost:5000` and log in with the credentials that docker-compose setup created for you [user: `ckan_admin` password:`test1234`]

![CKAN Home Page](https://i.imgur.com/T5LWo8A.png)

::: tip
For the key concepts of what is CKAN and how it works you can read the [CKAN User Guide](https://docs.ckan.org/en/2.8/user-guide.html).
:::

## Next Steps

[Play around with CKAN portal](/ckan/play-around)
