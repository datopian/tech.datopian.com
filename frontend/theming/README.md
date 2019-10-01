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
