# Data Versioning

:::warning
This is an early stage stub. Much more material coming soon.
:::

Versioning: every change to metadata *and* data is recorded so we can go back to previous revisions

It also includes additional features such as the ability to "tag" a given revision with a label e.g. "v1.0".


## Features

All the benefits you get with code versioning but for data ...

* Rollback: ... and therefore more freedom in making changes and the ability to recover from errors
* Pinning[^pin]:  ... and therefore freedom for data curators to make changes (without worrying about breaking downstream users) *and* gives client users confidence their applications won't suddenly break
* Pull requests: ... and therefore structured contribution model which in turn allows much faster, more open collaboration
* Complex Merge: distributed contribution models, feature branches etc
* Changelogs: ... and therefore auditability (NB: this can be achieved other ways)

[^pin]: By pinning we mean the ability for dependent applications (e.g. an analytic workflow, or a data-driven web app) to "pin" their use of this data to a particular revision. This would be like declaring explicit version dependences in a software application.

## Notes

```bash

# all changes in timestamped order
# by "object" and "action"
# by "permissions area" (e.g. what org, what e.g. what org, what user, ...)
audit-log.db

# Dataset A r1 vmaster

revisions.db # r1
versions.db  # master
/master/datapackage.json
/master/data.csv

# Dataset A r2 - edited the metadata

/master/datapackage.json
/master/data.csv          # unchanged

/r1-{hash}/datapackage.json
/r1-{hash}/data.csv
...

```

## Further Reading

TODO: See my revisioning work at Data Protocols


## The Advantages of a Git-Based Approach

* Excellent command line support out of the box (git)
* Full revisioning and tagging and more (e.g. branches) in an extremely robust system
* Support for non-dataset files in same place ... (e.g. code, visualization, data processing, data analytics)

### What shall we use to create the Hub part of the DataHub

* CKAN Classic MetaStore
* Gitea or Gitlab or Github ...

For now definitely CKAN Classic MetaStore

### What shall we use to create / manage git repos for us?

* GitHub
* Gitea
* Azure Git Repos https://azure.microsoft.com/en-us/services/devops/repos/

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
