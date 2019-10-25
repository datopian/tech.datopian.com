---
sidebar: auto
---

# Frontend plugins

All built-in plugins are located here - https://github.com/datopian/frontend-v2/tree/master/plugins.

## What are built-in plugins in frontend app?

We constantly add something new but here is the list of currently available plugins:

* `applications-showcase` - integration of https://github.com/ckan/ckanext-showcase.
* `carto` - provides carto map visualizations via the Carto VL library.
* `ckan_pages` - integration of https://github.com/ckan/ckanext-pages.
* `dashboard` - dashboards based on https://github.com/datopian/dashboard-js/ library.
* `google-analytics` - Google Analytics integration.
* `mailer` - SMTP server in your frontend app.
* `proxy` - a proxy for your frontend app.
* `wp` - WordPress CMS integration plugin.

## How do I enable them?

Simply add a name of a plugin into your list of `PLUGINS` in your [config file](/frontend/configs/):

```
PLUGINS=proxy wp etc
```

## How do I use them?

### Applications showcase

To add applications showcase plugin to your application you need to
enable the plugin in your `.env` file:

```bash
PLUGINS="... applications-showcase ..."
```

Here is the list of well-known services that can be used without setting host and port of your SMTP server: [Supported services](https://nodemailer.com/smtp/well-known/#supported-services).

Then you need to implement `contact.html` template in your theme so that a contact form can be rendered at `/contact`.

### Carto

Provide carto map visualizations via the Carto VL library.

Assumes data is in carto.

#### Geocoding data

Data needs to have a `the_geom` column with a valid geometry object.

See:

https://carto.com/developers/data-services-api/reference/#geocoding-functions

https://carto.com/help/working-with-data/carto-functions/

SELECT CDB_LatLng(float, float)

To encode from lat long:

https://{USER_NAME}.carto.com/api/v2/sql?q=UPDATE {TABLE_NAME} SET the_geom = CDB_LatLng({LAT_COLUMN}, {LON_COLUMN})&api_key={API_KEY_WITH_WRITE_ACCESS}

https://paulwalker-datopian.carto.com/api/v2/sql?q=UPDATE accidents_2012_2017 SET the_geom = CDB_LatLng(loc_lat, loc_long)&api_key=Mef_QoqGyQRspq9AumGvbg

Auth: Note that the token used needs to be associated with an API user with write / update permissions

### CKAN Pages

### Dashboard

### Google analytics

To add Google Analytics tracking code to page templates,
enable the plugin in your `.env` file:

```bash
PLUGINS="... google-analytics ..."
GA_ID=UA-000000000-0
```

### Mailer

To enable mailer plugin, you need to update your `.env` as following:

```
PLUGINS="... mailer ..."
SMTP_SERVICE=gmail (optional if you have host and port details)
SMTP_HOST=smtp.example.com (optional if you set 'SMTP_SERVICE')
SMTP_PORT=587 (optional if you set 'SMTP_SERVICE')
EMAIL_FROM=from@example.com
EMAIL_PASSWORD=*****
EMAIL_TO=to@example.com
```

### Proxy

The proxy plugin ships with frontend-v2. To enable it via `.env` file:

```
PLUGINS=proxy other_plugins
```

Use `PROXY_DATASTORE` and `PROXY_FILESTORE` environment variables to indicate host of your datastore and filestore:

```
PROXY_DATASTORE=demo.ckan.org
PROXY_FILESTORE=
```

Now you can request datastore by `/proxy/datastore/{path}`.

### WP

#### Setup

The wordpress plugin (`/plugins/wp`) ships with frontend-v2. To enable it via `.env` file:

```
PLUGINS=wp
```

Use `WP_URL` environment variable to point to your WordPress instance. For example, we have test wordpress blog here https://oddk.home.blog/ so it would be:

```
WP_URL=https://oddk.home.blog/
```

Use `WP_BLOG_PATH` environment variable to configure where your blog should be located in your site - by default, it is at `/news`. To change it, e.g., to `/blog`:

```
WP_BLOG_PATH="/blog"
```

If your blog is private, you can set up `WP_TOKEN` environment variable to pass your access token. To get access token for private WP blog, check out this - https://developer.wordpress.com/docs/oauth2/.

#### How it works

The plugin adds/changes the following routes:

* `/` - your home view now receives `posts` variable with the latest 3 blog posts from your WP instance;
* `/news` - your blog view now receives `posts` variable with the latest 10 blog posts;
* `/news/:page` - renders individual post page - `post.html` view;
* `/:page` and `/:parent/:page` - if slug is found in your WP instance, renders static page view (`static.html`).

## Where should I look for source code of these plugins?

You can find all plugins here - https://github.com/datopian/frontend-v2/tree/master/plugins.
