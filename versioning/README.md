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

