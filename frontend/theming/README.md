---
sidebar: auto
---

# Theming frontend

In this article, we explain how you can create a theme and develop it.

## Getting started

To add a theme, create a folder in the `/themes` directory. At very least you must add a `index.js` file with the following code in it:

```javascript
module.exports = function (app) {
  // no-ops
}
```

The app object is the express app. We can extend this object to add routes to our application, to provide middleware layers, or to do anything that express allows us to do.

For instance, we can add a custom route with a simple message:

```javascript
module.exports = function (app) {
  app.get('/hello', (req, res) => {
    console.log('example route')
    res.render('example.html', {
      title: 'Example Theme route',
      content: {hello: 'Hello from my theme!'}
    })  
  })  
}
```

If you have worked with Express.js, this will look quite familiar. For more on working with Express.js, see the [complete documentation here](https://expressjs.com/en/5x/api.html).

Note that the first argument to the `res.render` function is the name of a template. We can define this template in our themes folder at `themes/mytheme/views/example.html`:

```html
{% extends "base.html" %}

{% block bodyclass %}dash{% endblock %}
{% block content %}
<div class="pt-6">
    {{ content.foo }}
</div>
{% endblock %}
```

By default, the frontend app uses DataHub theme which contains of templates (`/views/`) and assets (`/public/`).

If you need to customize the design of the site, you can create your own theme in the `/themes/` directory. E.g., we can create a theme called `example` with `public` and `views` directories so that they override default assets in `/public/` and templates in `/views/`:

```
/themes/example/public
/themes/example/views
```

::: warning
**NOTE**

The default assets and templates are used, if a file isn't found in your theme. This allows you to change specific part of the templates or assets.
:::

## Variables available in each page

### Macros (helpers)

All default macros are located at `/views/_snippets.html`.

Importing macros in a template:

```html
{% import '_snippets.html' as snippets %}
```

Use it:

```html
{{ snippets.package_list_show(packages) }}
```

#### List data packages

Example on search page:

![](https://i.imgur.com/jECzGkG.png)

* Macros: `package_list_show`
* Parameters:
  * list of data packages
* Returns: list of HTML elements. Each element is sort of a summary card for a data package.

#### List data package licenses or sources

Example:

![](https://i.imgur.com/Wa3yMQc.png)


* Macros: `listify`
* Parameters:
  * list of standard data package licenses or sources
* Returns: HTML anchor tag or span element

### Home page

Bespoke ...

### Search page

```javascript
{
  title: 'Search',
  result: [list of data packages],
  query: {q: '', size: '', from: '', sort: ''},
  pages: [list of pages to display in pagination]
}
```

### Showcase page

```javascript
{
  title: ...,
  dataset: datapackage, // a standard data package ...
  owner: {
    name: "rufuspollock"
    title: "Rufus Pollock",
    avatar: "...." // url to image for this
    route: "/rufuspollock",
  }
}
```

In standard Data package we have `created` and `modified` fields which is a timestamp and it isn't human readable (`2019-01-01 00:00:00`). We want to show it as `January 1, 2019`. The easiest would be to convert in controller and pass it through. E.g., in template if you access `dataset.created` it would print nicely formatted date.

### Organization page

```javascript
{
  // org
  title: 'owner name',
  owner (name): 'owner name',
  description: 'description from profile',
  avatar: 'url to image',
  joinDate: 'eg, June 2019',

  // misc ...
  result: [list of data packages],
  query: {q: '', size: '', from: '', sort: ''},
  pages: [list of pages to display in pagination]
}
```

### Collections page

List of collections page.

```javascript
{
  title: 'Dataset Collections',
  description: 'Catalogue of datasets ...',
  collections: [
    {
      name: '',
      title: '',
      summary: '',
      image: ''
    },
    ... // more collection objects
  ]
}
```

### Individual collection page

```javascript
{
  title: 'title of collection',
  item: {
    name: '',
    title: '',
    summary: '',
    image: ''
  },

  // Misc
  result: [list of data packages],
  query: {q: '', size: '', from: '', sort: ''},
  pages: [list of pages to display in pagination]
}
```

### Blog

List of posts.

```javascript
{
  posts: [{post}, ...]
}
```

``{post}`` object is a WP post object containing all available metadata. Below is main stuff that we use:

```javascript
{
  title: '',
  slug: '',
  content: '',
  date: ''
  modified: ''
}
```

### Article / post page

```javascript
{
  title: '',
  content: '',
  published: 'formatted published date',
  modified: 'formatted modified date'
}
```

## i18n

### Configure

Define location of translation files. We recommend creating `i18n` directory in your theme:

```
TRANSLATIONS=/themes/example/i18n
```

List of available locales then auto detected by filenames.

Use `defaultLocale` cookie to set the site's locale. E.g., if `defaultLocale=en`, then `/themes/example/i18n/en.json` file is used.

### i18n of the site

In your templates:

```html
{{ __('Hello world!') }}
{{ __('Hi %s', 'you') }} // Hi you
{{ __('Hi {{ name }}', { name: 'you' }) }} // Hi you
```

This will add a phrase/word to your translation file if it is unknown.

Plurals translation:

```html
{{ __n('%s dog', 1) }} // 1 dog
{{ __n('%s dog', 3) }} // 3 dogs
```

In your translation file:

```json
{
  "%s dog": {
    "one": "%s dog",
    "other": "%s dogs"
  }
}
```

### i18n of the content

You can have a page in WordPress with the same slug as original page plus locale at the end. E.g., for `/about` page we would have two pages on WP, `about` (English) and `about-da` (Danish). When fetching a content we can check the user's locale and get content in his/her language.

## Theme distribution and installation

We recommend either having your theme in a git repository or publish it to NPM.

### Theme is in a git repo

If your theme is not published to NPM but it is available in a git repo, you can install it from there:

```bash
# From gitlab repo and datopian org:
$ yarn add git+https://git@gitlab.com/datopian/repo-name.git

# From github repo and datopian org:
$ yarn add git+https://git@github.com/datopian/repo-name.git
```

### Theme is on NPM

If the theme is on NPM you can install it as a regular NPM package:

```bash
$ yarn add my-theme-name
```

### Enable it

Once you've installed the theme, you need to enable it via `.env` config file:

```
THEME=my-theme-name
THEME_DIR=node_modules
```

Done! Start the server and checkout how your theme looks like :wave:
