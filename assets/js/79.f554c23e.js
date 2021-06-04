(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{411:function(e,a,t){"use strict";t.r(a);var i=t(25),n=function(e){e.options.__data__block__={mermaid_64a570e0:"graph LR\n\na[rev A] --\x3e b[rev B]\nb --\x3e c[rev C]\n",mermaid_64a570a6:"graph LR\n\na[rev A] --\x3e b[rev B]\na --\x3e c[rev C]\nb --\x3e d[rev D]\nc --\x3e d\n"}},s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Versioning is a feature that records changes to metadata and/or data. Think of it like “git for data”.")]),e._v(" "),t("p",[e._v("Versioning means that so we can go back to previous revisions, track history and more. Versioning can also include features such as the ability to “tag” a given revision with a label e.g. “v1.0”.")]),e._v(" "),t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("p",[e._v("All the benefits you get with revisioning for code but for data …")]),e._v(" "),t("ul",[t("li",[e._v("Rollback: you can rollback (aka revert) to previous states of the data.\n"),t("ul",[t("li",[e._v("=> Greater freedom to make changes: This, in turn, brings more freedom in making changes and the ability to recover from errors")])])]),e._v(" "),t("li",[e._v("Pinning: the ability for dependent applications (e.g. an analytic workflow, or a data-driven web app) to “pin” their use of this data to a particular revision. This would be like declaring explicit version dependences in a software application.\n"),t("ul",[t("li",[e._v("=> Reduced coupling, improving collaboration and independence: data curators can make changes (without worrying about breaking downstream users) "),t("em",[e._v("and")]),e._v(" client users have confidence that their applications won’t suddenly break")])])]),e._v(" "),t("li",[e._v("Pull requests: the ability to receive contribution from other parties in a structured way (you have a middle way between everyone needing access to contribute and no-one having access to contribute).\n"),t("ul",[t("li",[e._v("=> Easier, faster, distributed collaboration: therefore structured contribution model which in turn allows much faster, more open, more distributed collaboration")])])]),e._v(" "),t("li",[e._v("Complex Merge: distributed contribution models, feature branches etc")]),e._v(" "),t("li",[e._v("Changelogs: … and therefore auditability (NB: this can be achieved other ways)")])]),e._v(" "),t("p",[e._v("Also worth mentioning is the potential integration with code: now that your data has revisioning too, you can keep in sync between, for example, your machine learning model in code and your training data in the data management system.")]),e._v(" "),t("h3",{attrs:{id:"terminology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),t("p",[e._v("Versioning as a term can be confusing because it is ambiguous. For example, when some people say “version” they mean a revision e.g. “does this tool support data versioning” (i.e. does it support recording each change to the data). Whilst, when other people say “version” they mean a release (revision tag) e.g. “what version of this software are you using” (answer: “version 1.3”."),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])])]),e._v(" "),t("p",[e._v("We avoid this ambiguity by using specific terms – revisioning and releases – for these different features and reserving versioning for the overall system incorporating these.")]),e._v(" "),t("h4",{attrs:{id:"revisioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revisioning"}},[e._v("#")]),e._v(" Revisioning")]),e._v(" "),t("p",[e._v("When you update a dataset (metadata or data) a new revision is created and the current state is “snapshotted” and preserved.")]),e._v(" "),t("p",[e._v("More generally, revisioning is functionality whereby changes to a dataset (and its child resources) are logged and prior state is accessible. For example, if a dataset with value “Foo” is changed to have value “Bar”, one can still to access the previous revision where it had value “Foo”.")]),e._v(" "),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[e._v("Metadata or metadata and data revisioning: revisioning can be metadata only (it is rarely data only). For example, CKAN (as of v2) only revisions metadata.")]),e._v(" "),t("li",[e._v("DAG or linear: revisioning can be simple “linear” revisioning or it can be full “DAG” (directed acyclic graph).\n"),t("ul",[t("li",[e._v("Linear: each revision has a single parent and successor e.g."),t("Mermaid",{attrs:{id:"mermaid_64a570e0",graph:e.$dataBlock.mermaid_64a570e0}}),t("ul",[t("li",[e._v("DAG: “DAG” (directed acyclic graph) is where there can be branching and merging e.g.")])]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a570a6",graph:e.$dataBlock.mermaid_64a570a6}})],1)])]),e._v(" "),t("li",[e._v("Branch labelling and management: with a DAG one can have multiple “branches” rather than just the single “trunk” of the linear case. With branches it can be useful to label these branches and to designate a “master” or primary branch to which new revisions are appended by default.")])]),e._v(" "),t("h4",{attrs:{id:"releases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[e._v("#")]),e._v(" Releases")]),e._v(" "),t("p",[e._v("A Release is a specifically labelled revision (or tagged in git terminology) e.g. “v1.2”. It is named Release because it is usually identifying a significant change in the data and hence something worthy of being “released” (i.e. formally shared). The tagging terminology arises because the simplest way to implement is “tag” a revision, i.e. create a labelled pointer to that revisions e.g. "),t("code",[e._v("v1.2")]),e._v(".")]),e._v(" "),t("p",[e._v("In addition, to a convenient name e.g. "),t("code",[e._v("v1.2")]),e._v(" a release may also incorporate other metadata, for example a description e.g. "),t("code",[e._v("Introduced new column xyz and reformatted column abc")]),e._v(".")]),e._v(" "),t("p",[e._v("A release in itself is relatively simple functionality (once we have revisions). However, there may be significant business and technical processses associated e.g. downstream users have to make changes for a major release.")]),e._v(" "),t("h3",{attrs:{id:"domain-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-model"}},[e._v("#")]),e._v(" Domain Model")]),e._v(" "),t("ul",[t("li",[e._v("Revision: an object recording metadata of a revision e.g. when it happened, who created it etc.")]),e._v(" "),t("li",[e._v("Release: a pointer to a specific revision with additional metadata e.g. name, description.")])]),e._v(" "),t("h2",{attrs:{id:"ckan-v2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v2"}},[e._v("#")]),e._v(" CKAN v2")]),e._v(" "),t("p",[e._v("Out of the box CKAN has the following support:")]),e._v(" "),t("ul",[t("li",[e._v("Revisioning: CKAN v2 (up to v2.8) used "),t("code",[e._v("vdm")]),e._v(" to provide metadata revisioning. However, there was no data revisioning. In v2.9 "),t("code",[e._v("vdm")]),e._v(" was removed and metadata revisioning is provided by the activity stream system.")]),e._v(" "),t("li",[e._v("Releases: no support for releases.")])]),e._v(" "),t("p",[e._v("There are significant limitations:")]),e._v(" "),t("ul",[t("li",[e._v("Data revisioning is not supported.")]),e._v(" "),t("li",[e._v("Releass (revision tags) are not supported.")]),e._v(" "),t("li",[e._v("Only linear revision trees i.e. no branching")])]),e._v(" "),t("p",[e._v("There have been efforts to implement this functionality via extensions however the functionality is limited (see e.g. Appendix re ckanext-datasetversions).")]),e._v(" "),t("p",[t("strong",[e._v("Recently as part of CKAN v3 work there is now support for data versioning in CKAN v2 (>= 2.8) via extensions.")])]),e._v(" "),t("h2",{attrs:{id:"ckan-v3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v3"}},[e._v("#")]),e._v(" CKAN v3")]),e._v(" "),t("p",[e._v("The CKAN v3 approach is based on extensions that are backwards compatible with CKAN v2. Implementing data versioning in CKAN involves three distinct aspects:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("Data")]),e._v(" revisioning (CKAN already has metadata revisioning).")]),e._v(" "),t("li",[e._v("Releases: support creating and managing releases (named labels plus a description for a specific revision of a dataset e.g. “v1.0”)")]),e._v(" "),t("li",[e._v("General UI and functionality: things like diffs, reverting, etc")])]),e._v(" "),t("p",[e._v("The first of these is is accomplished by using the new "),t("RouterLink",{attrs:{to:"/blob-storage/#ckan-v3"}},[e._v("Blob Storage v3")]),e._v(".")],1),e._v(" "),t("p",[e._v("The latter two are accomplished via "),t("a",{attrs:{href:"https://github.com/datopian/ckanext-versions",target:"_blank",rel:"noopener noreferrer"}},[e._v("ckanext-versions"),t("OutboundLink")],1),e._v(" extension.")]),e._v(" "),t("p",[t("strong",[e._v("Status: Beta")])]),e._v(" "),t("h2",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"./design"}},[e._v("Versioning Design doc")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"open-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-questions"}},[e._v("#")]),e._v(" Open Questions")]),e._v(" "),t("ul",[t("li",[e._v("How does revisioning work when a revisioned object e.g. Dataset has a reference to an unrevisioned object e.g. a Tag? For example, imagine an old dataset revision has a reference to a tag that has been deleted from the system? In this case displaying a link to that tag will fail.")])]),e._v(" "),t("h2",{attrs:{id:"appendix-mapping-against-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-mapping-against-git"}},[e._v("#")]),e._v(" Appendix: Mapping against Git")]),e._v(" "),t("p",[e._v("Git terminology on left, our terminology on the right.")]),e._v(" "),t("ul",[t("li",[e._v("Commit <=> Revision")]),e._v(" "),t("li",[e._v("Tag <=> Release")])]),e._v(" "),t("h2",{attrs:{id:"appendix-ckanext-datasetversions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-ckanext-datasetversions"}},[e._v("#")]),e._v(" Appendix: ckanext-datasetversions")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/aptivate/ckanext-datasetversions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/aptivate/ckanext-datasetversions/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("There is an extension called ckanext-datasetversions with a basic implementation of dataset versioning. It implements the version as a child - father relationship between datasets. There is a detailed analysis of the package in this document.")]),e._v(" "),t("p",[e._v("The package internally use child_of relationship to model versions: “The plugin models dataset versions internally by creating a parent dataset, with minimal metadata and no resources. A child dataset is created for each version.” So new versions are new datasets, and CKAN restrictions applies: these datasets cannot share url or name.")]),e._v(" "),t("p",[e._v("The package was created 4y ago and does not seem to be actively maintained.")]),e._v(" "),t("hr",{staticClass:"footnotes-sep"}),e._v(" "),t("section",{staticClass:"footnotes"},[t("ol",{staticClass:"footnotes-list"},[t("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[t("p",[e._v("Our terminology is the same as that identified by the "),t("a",{attrs:{href:"https://www.rd-alliance.org/group/data-versioning-wg/outcomes/principles-and-best-practices-data-versioning-all-data-sets-big",target:"_blank",rel:"noopener noreferrer"}},[e._v("Research Data Alliance Data Versioning Working Group Report (2020)"),t("OutboundLink")],1),e._v(". They use the terminology Revision and Release (they also include Manifestation for the same data in e.g. different formats taking inspiration from FRBR). "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);"function"==typeof n&&n(s);a.default=s.exports}}]);