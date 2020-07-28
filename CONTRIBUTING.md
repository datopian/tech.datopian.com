# Contributing

First, thank-you for your interest and we look forward to getting your contribution!

Here are some tips on how to contribute to these docs.


## Technical

This site is built using VuePress: https://vuepress.vuejs.org/

And deployed using Gitlab Pages (see `.gitlab-ci.yml`).

### Local Development

1. Git clone the repo.
2. Install node >= 8.0
3. Install VuePress etc: in this directory do `yarn install`
4. Then run the dev server: `yarn start`


## Structure for CKAN DMS Feature Sections

The following are recommended structures for DMS feature sections, especially those that cover CKAN v2 (Classic) and CKAN v3 (Next Gen).

### Design Layout

This structure is more oriented to the initial development of a feature topic when we are still analysing and designing the solution.

* [ ] Introduction
  * [ ] 1 short headline paragraph
  * [ ] Features and/or Key Job stories (if lots have an appendix for full job stories)
  * [ ] Key components and/or Flows
* [ ] How this works in CKAN 2
  * [ ] Organize corresponding to the key components (and maybe a bit job stories)
  * [ ] Limitations / issues
* [ ] CKAN 3 
  * [ ] Intro incl aims ...
  * [ ] Features / benefits
  * [ ] How it works against the key components
  * [ ] Tech documentation - how to install, setup etc (this can be inline or link out to READMEs etc)
  * [ ] Live examples (if any)
* [ ] Hybrid setup (using it with CKAN 2)
* [ ] Appendix

Copy and pastable version for issues:

```md
* [ ] Introduction
  * [ ] 1 short headline paragraph
  * [ ] Features
  * [ ] Key Job stories (if lots have an appendix for full job stories)
  * [ ] Key components
* [ ] How this works in CKAN 2
  * [ ] Organize corresponding to the key components (and maybe a bit job stories)
  * [ ] Limitations / issues
* [ ] CKAN 3 
  * [ ] Intro incl aims ...
  * [ ] Features / benefits
  * [ ] How it works against the key components
  * [ ] Tech documentation - how to install, setup etc (this can be inline or link out to READMEs etc)
  * [ ] Live examples (if any)
* [ ] Hybrid setup (using it with CKAN 2)
* [ ] Appendix
```

### Finished Feature

The above layout is more oriented to those designing and build the solution - and less to users. As a feature gets more mature in CKAN v3 we may want to refactor to have a structure more focused on using the feature and move design information down or even out to a separate page.

The following is a suggested structure that would be appropriate -- and a good one generally for a READMEs for tools or products.

* [ ] Intro: short paragraph describing
* [ ] Pros / features of this approach e.g. memory consumption, data validation etc, testing
* [ ] Installation
* [ ] Configuration
* [ ] Quickstart e.g. run it standalone
* [ ] Integrate with CKAN v2
* [ ] Integrate with CKAN v3
* [ ] Live examples
* [ ] Developers - section
  * [ ] Design
  * [ ] Gotchas
  * [ ] Testing

```md
* [ ] Intro: short paragraph describing
* [ ] Pros / features of this approach e.g. memory consumption, data validation etc, testing
* [ ] Installation
* [ ] Configuration
* [ ] Quickstart e.g. run it standalone
* [ ] Integrate with CKAN v2
* [ ] Integrate with CKAN v3
* [ ] Live examples
* [ ] Developers - section
  * [ ] Design
  * [ ] Gotchas
  * [ ] Testing
```
