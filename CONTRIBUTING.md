How to contribute to Datopian Technical Docs.

First, thank-you for your interest and we look forward to getting your contribution!

## Technical

This site is built using VuePress: https://vuepress.vuejs.org/

And deployed using Gitlab Pages (see `.gitlab-ci.yml`).

### Local Development

1. Git clone the repo.
2. Install node >= 8.0
3. Install VuePress etc: in this directory do `yarn install`
4. Then run the dev server: `yarn start`


## Structure for DMS Feature Sections

The following is the recommended structure for DMS feature sections, especially those that cover Classic / Next Gen.

- [ ] Intro: intro to feature (1 paragraph + e.g. what is harvesting)
- [ ] How it works in CKAN Classic it happens like this … and has this / that (dis)advantage … 
  - [ ] Cons / limitations
- [ ] Next Gen Feature e.g. harvesting:
  - [ ] Pros / Features e.g. memory consumption, data validation etc, testing
  - [ ] Installation
  - [ ] Run it standalone
  - [ ] Test File to be set up correctly
  - [ ] Here’s you integrate it with CKAN Classic
  - [ ] Here’s how you integrate it with Datopian DMS
  - [ ] Here’s how you use it in Datopian Cloud
  - [ ] Deploy in CKAN cloud
  - [ ] Live examples
- [ ] Developers - section
  - [ ] Design
  - [ ] Gotchas

