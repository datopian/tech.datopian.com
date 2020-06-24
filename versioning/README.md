# Versioning

## Introduction

Versioning is a feature that records changes to metadata and/or data. Think of it like "git for data".

Versioning means that so we can go back to previous revisions, track history and more. Versioning can also include features such as the ability to "tag" a given revision with a label e.g. "v1.0".

### Terminology

Versioning as a term can be confusing because it is ambiguous. For example, when some people say "version" they mean a revision e.g. "does this tool support data versioning" (i.e. does it support recording each change to the data). Whilst, when other people say "version" they mean a (revision) tag e.g. "what version of this software are you using" (answer: "version 1.3".

We avoid this ambiguity by using specific terms -- revisioning and (revision) tagging -- for these different features and reserving versioning for the overall system incorporating these.

#### Revisioning

When you update a dataset (metadata or data) a new revision is created and the current state is "snapshotted" and preserved.

More generally, revisioning is functionality whereby changes to a dataset (and its child resources) are logged and prior state is accessible. For example, if a dataset with value "Foo" is changed to have value "Bar", one can still to access the previous revision where it had value "Foo".

Notes:

* Metadata or metadata and data revisioning: revisioning can be metadata only (it is rarely data only). For example, CKAN (as of v2) only revisions metadata.
* DAG or linear: revisioning can be simple "linear" revisioning or it can be full "DAG" (directed acyclic graph).
  * Linear: each revision has a single parent and successor e.g.
    ```mermaid
    graph LR

    a[rev A] --> b[rev B]
    b --> c[rev C]
    ```
    * DAG: "DAG" (directed acyclic graph) is where there can be branching and merging e.g.
    ```mermaid
    graph LR

    a[rev A] --> b[rev B]
    a --> c[rev C]
    b --> d[rev D]
    c --> d
    ```
* Branch labelling and management: with a DAG one can have multiple "branches" rather than just the single "trunk" of the linear case. With branches it can be useful to label these branches and to designate a "master" or primary branch to which new revisions are appended by default.

#### Tagging

Tagging is the ability to "tag" a revision, i.e. create a labelled pointer to that revisions e.g. `v1.2`.

Often referred to as revision tagging to disambiguate it from normal tagging with keywords.

In addition, to a convenient name e.g. `v1.2` a tag may also incorporate other metadata, for example a description e.g. `Introduced new column xyz and reformatted column abc`.

Whilst tagging itself is relatively trivial functionality, there may be significant business and technical processses associated. For example, a tag may be the basis for a "release".

### Features

All the benefits you get with revisioning for code but for data ...

* Rollback: you can rollback (aka revert) to previous states of the data.
  * => Greater freedom to make changes: This, in turn, brings more freedom in making changes and the ability to recover from errors
* Pinning: the ability for dependent applications (e.g. an analytic workflow, or a data-driven web app) to "pin" their use of this data to a particular revision. This would be like declaring explicit version dependences in a software application.
  * => Reduced coupling, improving collaboration and independence: data curators can make changes (without worrying about breaking downstream users) *and* client users have confidence that their applications won't suddenly break
* Pull requests: the ability to receive contribution from other parties in a structured way (you have a middle way between everyone needing access to contribute and no-one having access to contribute).
  * => Easier, faster, distributed collaboration: therefore structured contribution model which in turn allows much faster, more open, more distributed collaboration
* Complex Merge: distributed contribution models, feature branches etc
* Changelogs: ... and therefore auditability (NB: this can be achieved other ways)

Also worth mentioning is the potential integration with code: now that your data has revisioning too, you can keep in sync between, for example, your machine learning model in code and your training data in the data management system.

### Domain Model

* Revision: an object recording metadata of a revision e.g. when it happened, who created it etc.
* (Revision) Tag: a pointer to a specific revision with additional metadata e.g. name, description.

## Design

### Research

For research on how to build the next generation versioning solution see the [Versioning Research page &raquo;](./research.html)

## References

* [Git (and Github) for Data - Rufus Pollock - blog.okfn.org - July 2013](https://blog.okfn.org/2013/07/02/git-and-github-for-data/)
  * Discussion on okfn-labs: https://lists-archive.okfn.org/pipermail/okfn-labs/2013-July/002690.html
* [We Need Distributed Revision/Version Control for Data -Rufus Pollock - blog.okfn.org - July 2010](https://blog.okfn.org/2010/07/12/we-need-distributed-revisionversion-control-for-data/)
* [Diffing and patching tabular data - Paul Fitzpatrick - Aug 2013](http://okfnlabs.org/blog/2013/08/08/diffing-and-patching-data.html)
* Noms - Noms is a decentralized database philosophically descendant from the Git version control system. https://github.com/attic-labs/noms
  * Written in Go. Open source (apache license)
  * Functional but still alpha
  * Now abandonware as makers of Noms, Attic Labs, were acquired by Salesforce in Jan 2018 and developed stopped at that point. "Nobody is working on this right now. You shouldn't rely on it unless you're willing to take over development yourself." https://github.com/attic-labs/noms/blob/master/README.md#status
* (Old - last updated in 2018 and largely from before that) Collecting thoughts about data versioning - https://github.com/leeper/data-versioning
* TODO: See my revisioning work at Data Protocols

## Appendix: Mapping against Git

Git has following terminology

* Commit <=> Revision
* Tag <=> Tag
