---
sidebar: auto
---

# Frontend

The frontend component covers all of the traditional "read" frontend functionality of a data portal: front page, searching datasets, viewing datasets etc.

## Installation

::: tip
Requires node.js v8.10.0 or later
:::

Clone the repo:

```bash
$ git clone https://github.com/datopian/frontend-v2.git
```

Install project dependencies:

```bash
$ cd frontend-v2
$ yarn # or you can use `npm i`
```

You can now run the frontend app in dev mode:

```bash
$ yarn dev # or `npm run dev`
```

Open a browser and navigate to http://localhost:4000. If everything went correctly you should see the *CKAN NG* frontend app!

> ![NG Home](../img/ckan_ng_home.png)

Now navigate to http://localhost:4000/search and you should see the data catalog - these are mocked at the moment. Let's now unmock it and use demo CKAN instance. To do that we need to change DMS API configuration. First stop the server and then run:

```bash
$ API_URL=http://demo.ckan.org/api/3/action/ yarn dev
```

Now you should see datasets from demo.ckan.org on your search page - http://localhost:4000/search.

Congratulations! You have a working data portal with live data backend!

## Theming

Changing the appearance of the site is easy and quick - we suggest starting with this [hello world tutorial](/frontend/theming/hello-world).

Next step would be to check out the docs about [how themes work](/frontend/theming/) in NG frontend.

## Set up your own backend

*By default, the frontend runs against mocked API so you don't need to setup your own backend.*

To change environment variables, you can rename `env.template` as `.env` and set the values. Here you can find more about configurations and how to set it up - [frontend configurations](/frontend/configs/).

### DMS

Setup `API_URL` environment variable so it points to your CKAN instance, e.g., for demo.ckan.org it would be:

```
export API_URL=https://demo.ckan.org/api/3/action/
```

### CMS

You can use one of built-in CMS plugins - check it out below.

#### Wordpress

Read about WordPress plugin here: https://github.com/datopian/frontend-v2/blob/master/plugins/wp/README.md

#### CKAN Pages

To use CKAN Pages as your CMS backend, add it to your list of `PLUGINS` in `.env` file:

```
PLUGINS=ckan_pages
```

When enabled, CKAN Pages plugin will use the CKAN `API_URL` environment variable by default.
To configure a different URL for your CKAN Pages backend add `CKAN_PAGES_URL=https://yourckan.com/api/3/action/` to your environment.

For more info about enabling and using CKAN Pages - https://github.com/ckan/ckanext-pages

## Extending frontend

The *CKAN Next Gen* frontend can be extended and customized. We saw in the [Hello World](/frontend/theming/hello-world/) section how we can use a custom theme to override site html using a views template. In addition to html templates, we can add custom routes and middleware via a theme or plugin. Below we explain more about plugins, if you would like to read about themes, please, follow [this link](/frontend/theming/).

### Plugins

In some cases we may want functionality that applies to every request, regardless of what theme we are using.

We can package such functionality as plugins.

There are currently two types of plugins: user-defined plugins which we add to the `/plugins` directory, and npm plugins, which we install via npm.

#### User-defined Plugins

Create a directory with the plugin's name in the `/plugins` directory.

```bash
$ mkdir plugins/addheader
```

Inside of this directory create a file called `index.js` with the following contents:

```javascript
module.exports = function(app) {
  app.use((req, res, next) => {
    res.header('x-my-custom-header', 1234)
    next()
  })
}
```

If you have worked with express middleware, you may recognize this pattern. For more on working with middleware in Express, see the docs [here](https://expressjs.com/en/guide/writing-middleware.html).

Add the plugin name to your `.env` file:

```
PLUGINS="addheader"
```

Run your application. Web responses from the frontend application should include your custom header.

#### NPM Plugins

If an express middleware plugin is available as a standalone module on npm you can install it as-is by installing the package via npm, and adding it to your PLUGINS variable in `.env`

For example, we will install the cookie-parser plugin, alongside our addheader plugin.

Install the npm package:
```
$ yarn add cookie-parser
```

Now add the plugins to your `.env`, alongside the custom `addheader` plugin we created above:
```
PLUGINS="addheader cookie-parser"
```

Cookie-parser will now be applied to all of your requests as express middleware!

(For instance, you could take advantage of this in custom routes, etc)

For more on express middleware: https://expressjs.com/en/guide/using-middleware.html.

#### Google analytics plugin

To add Google Analytics tracking code to page templates,
enable the plugin in your `.env` file:

```bash
PLUGINS="... google-analytics ..."
GA_ID=UA-000000000-0
```

#### Mailer plugin

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

#### Applications showcase plugin

To add applications showcase plugin to your application you need to
enable the plugin in your `.env` file:

```bash
PLUGINS="... applications-showcase ..."
```

Here is the list of well-known services that can be used without setting host and port of your SMTP server: [Supported services](https://nodemailer.com/smtp/well-known/#supported-services).

Then you need to implement `contact.html` template in your theme so that a contact form can be rendered at `/contact`.
