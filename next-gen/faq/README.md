# Next Gen FAQ

## Are NG Plugins just Express middleware?

Yes! It's just vanilla Express!

Plugin files are passed the Express `app` object which they can then extend with middleware or routes.

If you aren't familiar with Express or Express middleware, you may  want to get up to speed:

* [Plugins section of this guide](#plugins)
* https://expressjs.com/en/guide/writing-middleware.html

## Is an NG Theme's index.js file just Express?

Yes! It's just vanilla Express.

The NG theme's `index.js` file receives the app object which you can extend with routes or middleware.

If you aren't familiar with Express or Express routes, you may want to get up to speed:

* [Themes section of this guide](#themes)
* https://expressjs.com/en/guide/routing.html

## What is Nunjucks?

[Nunjucks](https://mozilla.github.io/nunjucks/templating.html) is the templating engine for CKAN NG. It is essentially a node.js port of [jinja2](http://jinja.pocoo.org/docs/) which is the templating engine for _CKAN CLASSIC_ -- if it looks familiar, that might be why.

## Would all the CKAN NG portals still need the CKAN Classic and its admin panels to manage datasets, groups users etc.?

At the moment in CKAN NG you would use CKAN Classic admin UI. In the future we plan to build a new SPA (single page application) that takes this on - we started some work on this in March 2019 when we built a dataset creation flow in javascript.
