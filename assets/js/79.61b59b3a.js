(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{412:function(t,e,r){"use strict";r.r(e);var a=r(25),o=function(t){t.options.__data__block__={mermaid_382ee1e5:"graph TD\n\nblob[Blob] --tree structure--\x3e BlobTree\nBlobTree --dag of commits--\x3e vbt[VersionedBlobTree]\nvbt --datapackage.json--\x3e DatasetVersionedBlobTree\n",mermaid_382ee205:"graph TD\n\nvbt[VersionedBlobTree = Git]\ndvbt[DatasetVersionedBlobTree]\n\nvbt --registry of projects, users, teams and ownership--\x3e hub[Hub of Gits aka GitCodeHub]\n\ndvbt --registry of projects, users, teams and ownership--\x3e dhub[Hub of Data Projects aka DatasetHub]\n",mermaid_64a5706a:"graph TD\n\ndataset[Dataset on Disk]\n\ndf1[Data File 1 in Cloud A] --download--\x3e dataset\ndf2[Data File 2 in Cloud B] --download--\x3e dataset\n"}},s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"versioning-design-research"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#versioning-design-research"}},[t._v("#")]),t._v(" Versioning Design Research")]),t._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.okfn.org/2013/07/02/git-and-github-for-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git (and Github) for Data - Rufus Pollock - blog.okfn.org - July 2013"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Discussion on okfn-labs: "),r("a",{attrs:{href:"https://lists-archive.okfn.org/pipermail/okfn-labs/2013-July/002690.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lists-archive.okfn.org/pipermail/okfn-labs/2013-July/002690.html"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.okfn.org/2010/07/12/we-need-distributed-revisionversion-control-for-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("We Need Distributed Revision/Version Control for Data -Rufus Pollock - blog.okfn.org - July 2010"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://okfnlabs.org/blog/2013/08/08/diffing-and-patching-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Diffing and patching tabular data - Paul Fitzpatrick - Aug 2013"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Noms - Noms is a decentralized database philosophically descendant from the Git version control system. "),r("a",{attrs:{href:"https://github.com/attic-labs/noms",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/attic-labs/noms"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Written in Go. Open source (apache license)")]),t._v(" "),r("li",[t._v("Functional but still alpha")]),t._v(" "),r("li",[t._v("Now abandonware as makers of Noms, Attic Labs, were acquired by Salesforce in Jan 2018 and developed stopped at that point. “Nobody is working on this right now. You shouldn’t rely on it unless you’re willing to take over development yourself.” "),r("a",{attrs:{href:"https://github.com/attic-labs/noms/blob/master/README.md#status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/attic-labs/noms/blob/master/README.md#status"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("(Old - last updated in 2018 and largely from before that) Collecting thoughts about data versioning - "),r("a",{attrs:{href:"https://github.com/leeper/data-versioning",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/leeper/data-versioning"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("TODO: See Rufus’ revisioning work at Data Protocols")])]),t._v(" "),r("h2",{attrs:{id:"context-dataset-versioned-blob-trees"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context-dataset-versioned-blob-trees"}},[t._v("#")]),t._v(" Context: (Dataset) Versioned Blob Trees")]),t._v(" "),r("Mermaid",{attrs:{id:"mermaid_382ee1e5",graph:t.$dataBlock.mermaid_382ee1e5}}),r("ul",[r("li",[t._v("We could also add things like a dataflows.yml to a repo to make a data pipeline or a model.pkl file to store your machine learning analysis …")])]),t._v(" "),r("h2",{attrs:{id:"context-project-project-hub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context-project-project-hub"}},[t._v("#")]),t._v(" Context: Project => Project Hub")]),t._v(" "),r("Mermaid",{attrs:{id:"mermaid_382ee205",graph:t.$dataBlock.mermaid_382ee205}}),r("h2",{attrs:{id:"approaches-for-storing-large-files-and-versioning-them"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#approaches-for-storing-large-files-and-versioning-them"}},[t._v("#")]),t._v(" Approaches for storing large files and versioning them")]),t._v(" "),r("p",[t._v("For now I’ll assume we use Git for versioning "),r("em",[t._v("and")]),t._v(" we want large files outside of git.")]),t._v(" "),r("p",[t._v("My sense is that Git LFS with custom backend storage works fine for most CKAN use cases in which customer has their own storage.")]),t._v(" "),r("p",[t._v("In more ML use cases the ability to have multiple data sources from different systems could be valuable.")]),t._v(" "),r("p",[t._v("It seems to me some hybrid could be achieved using extensions to Data Resource (to use remote URLs that have a local cache) and a special client that is aware of those extensions.")]),t._v(" "),r("p",[t._v("See also this matrix comparison "),r("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1gc7vxcFt9OSVL7JoXXo9KSBVG4oIASaL08vdvoEst4o/edit#gid=1833965075",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.google.com/spreadsheets/d/1gc7vxcFt9OSVL7JoXXo9KSBVG4oIASaL08vdvoEst4o/edit#gid=1833965075"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"git-lfs-option"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-lfs-option"}},[t._v("#")]),t._v(" Git LFS option")]),t._v(" "),r("p",[t._v("Use git-lfs and build a custom lfs server to store to arbitrary cloud storage.")]),t._v(" "),r("ul",[r("li",[t._v("Pros: compatible with git lfs client")]),t._v(" "),r("li",[t._v("Cons: you are limited to one cloud storage and can’t pull data from different places (and no central caching)")])]),t._v(" "),r("p",[t._v("For example, suppose i have a project using an AWS public dataset. In this approach i have to first copy that large dataset down, add to git (lfs) and push into my own cloud storage via git lfs.")]),t._v(" "),r("h3",{attrs:{id:"manifest-option-dvc-approach-and-datahub-io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manifest-option-dvc-approach-and-datahub-io"}},[t._v("#")]),t._v(" Manifest option (dvc approach and "),r("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("datahub.io"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("p",[t._v("We store a manifest in git of the “local” paths that are not in git but in cloud storage.")]),t._v(" "),r("Mermaid",{attrs:{id:"mermaid_64a5706a",graph:t.$dataBlock.mermaid_64a5706a}}),r("p",[t._v("One approach would be to mod Data Resource to have a storage / cloud url option")]),t._v(" "),r("div",{staticClass:"language-json= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("{\n  path: 'mydata.csv'\n  storageUrl: 'https://cloudstorage.com/content-addressed-path'\n}\n")])])]),r("p",[t._v("As long as the storage url changes each time you change the file (e.g. using content addressing) you get proper data versioning.")]),t._v(" "),r("p",[t._v("Another option is to store soft links in the main repo pointing into a local cache directory that is gitignored but has a manifest listing what to download into it. These would have to get updatd each time the data changed (as we ould point to a new blob file in the cache)")]),t._v(" "),r("p",[t._v("Or you could store a special file"),r("br"),t._v(" "),r("a",{attrs:{href:"https://dvc.org/doc/user-guide/dvc-files-and-directories",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dvc.org/doc/user-guide/dvc-files-and-directories"),r("OutboundLink")],1),r("br"),t._v("\n(the dvc approach i think )")]),t._v(" "),r("p",[t._v("Notes")]),t._v(" "),r("ul",[r("li",[t._v("Authentication / authorization is sort of out of scope (we need to assume that user has access to storage url and permissions to upload)")]),t._v(" "),r("li",[t._v("Could achieve some degree of similar functionality by inverting and having a "),r("code",[t._v("cachePath")]),t._v(" or similar in datapackage.json and having a tool that pulls all resources that are remote and stores them to their "),r("code",[t._v("cachePath")])])]),t._v(" "),r("p",[t._v("Pros:")]),t._v(" "),r("ul",[r("li",[t._v("I could use multiple cloud storage sources in a given dataset (including pulling from public sources)")])]),t._v(" "),r("p",[t._v("Cons:")]),t._v(" "),r("ul",[r("li",[t._v("Need a separate tool other than git (lfs)")]),t._v(" "),r("li",[t._v("Some weird behaviour if i pull and mod a data file and then push - where does it now go? (not that weird though: my command line tool can take care of this)\n"),r("ul",[r("li",[t._v("Guess you would set a default storage “server/service”")])])])]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"research"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#research"}},[t._v("#")]),t._v(" Research")]),t._v(" "),r("h2",{attrs:{id:"git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),r("p",[t._v("See "),r("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"git-hubs-and-how-they-work"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-hubs-and-how-they-work"}},[t._v("#")]),t._v(" Git-Hubs and how they work …")]),t._v(" "),r("ul",[r("li",[t._v("It turns out git really needs to be backed onto disk (you couldn’t put git on s3 because of latency)\n"),r("ul",[r("li",[t._v("This has a good analysis "),r("a",{attrs:{href:"https://github.com/go-gitea/gitea/issues/2959",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/go-gitea/gitea/issues/2959"),r("OutboundLink")],1),t._v(" that led me to this excellent post "),r("a",{attrs:{href:"https://github.blog/2016-04-05-introducing-dgit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.blog/2016-04-05-introducing-dgit/"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("however, gitlab have built a git rpc service you can integrate with that abstracts git access "),r("a",{attrs:{href:"https://gitlab.com/gitlab-org/gitaly",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitlab.com/gitlab-org/gitaly"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Gitaly is a Git RPC service for handling all the git calls made by GitLab. As of GitLab 11.5, almost all application code accesses Git repositories through Gitaly instead of direct disk access. "),r("a",{attrs:{href:"http://GitLab.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab.com"),r("OutboundLink")],1),t._v(" production no longer uses direct disk access to touch Git repositories")])])])]),t._v(" "),r("h2",{attrs:{id:"git-hub-apis-for-creating-files-etc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-hub-apis-for-creating-files-etc"}},[t._v("#")]),t._v(" Git-Hub APIs for creating files etc")]),t._v(" "),r("ul",[r("li",[t._v("Github: does not support creating a “commit” with multiple files in standard API but does in low level “Data API” "),r("a",{attrs:{href:"https://developer.github.com/v3/git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.github.com/v3/git/"),r("OutboundLink")],1),t._v(" (via "),r("a",{attrs:{href:"https://github.com/isaacs/github/issues/199",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/isaacs/github/issues/199"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("Gitea: Can create and update files (but not in bulk)\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://try.gitea.io/api/swagger#/repository/repoCreateFile",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://try.gitea.io/api/swagger#/repository/repoCreateFile"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://try.gitea.io/api/swagger#/repository/repoUpdateFile",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://try.gitea.io/api/swagger#/repository/repoUpdateFile"),r("OutboundLink")],1)])])])]),t._v(" "),r("h2",{attrs:{id:"git-lfs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-lfs"}},[t._v("#")]),t._v(" Git LFS")]),t._v(" "),r("p",[t._v("Git LFS works as follows:")]),t._v(" "),r("ul",[r("li",[t._v("When committing LFS-tracked files replace them with pointer file")]),t._v(" "),r("li",[t._v("Store the actual file into some backend storage")]),t._v(" "),r("li",[t._v("When pulling cache thoese large files")]),t._v(" "),r("li",[t._v("On checkout into the working directory replace the pointer file with the actual file")])]),t._v(" "),r("p",[t._v("Key specs")]),t._v(" "),r("ul",[r("li",[t._v("Pointer file: "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/spec.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/spec.md"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("LFS client: "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/spec.md#intercepting-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/spec.md#intercepting-git"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("The server protocol: "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/tree/master/docs/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/tree/master/docs/api"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("How to mod the git command line")])]),t._v(" "),r("p",[t._v("Implementation has 3 components:")]),t._v(" "),r("ul",[r("li",[t._v("Git client “plugin”")]),t._v(" "),r("li",[t._v("Server API")]),t._v(" "),r("li",[t._v("Storage: use your storage of choice")])]),t._v(" "),r("p",[t._v("API "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/api/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/api/README.md"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"file-storage-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-storage-flow"}},[t._v("#")]),t._v(" File Storage flow")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/datopian/datahub-client/blob/master/lib/utils/datahub.js#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/datopian/datahub-client/blob/master/lib/utils/datahub.js#L22"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("In storing a file there are the following steps")]),t._v(" "),r("ul",[r("li",[t._v("Discover the LFS server to use")]),t._v(" "),r("li",[t._v("Authenticate")]),t._v(" "),r("li",[t._v("Call it with batch API with upload option\n"),r("ul",[r("li",[t._v("Tell it what protocols the client supports")])])]),t._v(" "),r("li",[t._v("Get back URLs to store to")]),t._v(" "),r("li",[t._v("Store to them\n"),r("ul",[r("li",[t._v("Note there are only certain protocols supported")])])])]),t._v(" "),r("h3",{attrs:{id:"servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[t._v("#")]),t._v(" Servers")]),t._v(" "),r("ul",[r("li",[t._v("Official Test Implementation: "),r("a",{attrs:{href:"https://github.com/git-lfs/lfs-test-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/lfs-test-server"),r("OutboundLink")],1),t._v(" - 507*, official test server")]),t._v(" "),r("li",[t._v("NodeJS + S3 Implementation: "),r("a",{attrs:{href:"https://github.com/Caellian/node-git-lfs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Caellian/node-git-lfs"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"batch-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#batch-api"}},[t._v("#")]),t._v(" Batch API")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/api/batch.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/api/batch.md"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Basic Transfers")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/api/basic-transfers.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/api/basic-transfers.md"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("The Basic transfer API is a simple, generic API for directly uploading and downloading LFS objects. Git LFS servers can offload object storage to cloud services like S3, or implement this API natively.")]),t._v(" "),r("p",[t._v("This is the original transfer adapter. All Git LFS clients and servers SHOULD support it, and default to it if the Batch API request or response do not specify a transfer property.")])]),t._v(" "),r("p",[t._v("They say that "),r("a",{attrs:{href:"http://tus.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("tus.io"),r("OutboundLink")],1),t._v(" may be supported … (and that in theory supports s3 tho’ issues with multipart "),r("a",{attrs:{href:"https://tus.io/blog/2016/03/07/tus-s3-backend.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tus.io/blog/2016/03/07/tus-s3-backend.html"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("h3",{attrs:{id:"batch-upload-to-cloud-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#batch-upload-to-cloud-storage"}},[t._v("#")]),t._v(" Batch Upload to Cloud Storage")]),t._v(" "),r("p",[t._v("Looks like this is def possible. Here’s someone doing it with GCS:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/issues/3567",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/issues/3567"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),r("ul",[r("li",[t._v("Can you plug in to cloud provider or choice => Yes, you can with a custom server")]),t._v(" "),r("li",[t._v("Size limitations at the big providers e.g. github is less than 2Gb")]),t._v(" "),r("li",[t._v("Does not support those nice cloud features e.g. multipart uploads, resumable etc\n"),r("ul",[r("li",[t._v("some discussion here "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/issues/802",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/issues/802"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("Can you configure your own backend? YES "),r("code",[t._v(".lfsconfig")]),t._v(" file …")]),t._v(" "),r("li",[t._v("Can you back onto s3?\n"),r("ul",[r("li",[t._v("I did not see a live implementation from my search but i found")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://sqr-001.lsst.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sqr-001.lsst.io/"),r("OutboundLink")],1),t._v(" => this looks really promising. They built their own lfs server.")])])]),t._v(" "),r("li",[t._v("Does it support multipart downloads NO\n"),r("ul",[r("li",[t._v("See “Please add multipart file downloads” "),r("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/issues/802",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/issues/802"),r("OutboundLink")],1),t._v(" Proposed 2015 and still open")])])])]),t._v(" "),r("h2",{attrs:{id:"git-annex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-annex"}},[t._v("#")]),t._v(" Git Annex")]),t._v(" "),r("ul",[r("li",[t._v("Seems to do content addressing built in …")]),t._v(" "),r("li",[t._v("May not be compatible with minio due to minor header issue (may be fixed now?) "),r("a",{attrs:{href:"https://github.com/minio/minio/issues/5007",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/minio/minio/issues/5007"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Example of working with s3 backend (via datalab it sounds like)  "),r("a",{attrs:{href:"https://git-annex.branchable.com/forum/slow_s3_transfer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-annex.branchable.com/forum/slow_s3_transfer/"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"content-addressed-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#content-addressed-storage"}},[t._v("#")]),t._v(" Content Addressed Storage")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Content-addressable_storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Content-addressable_storage"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("API ideas: "),r("a",{attrs:{href:"https://github.com/jakearchibald/byte-storage/issues/11",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jakearchibald/byte-storage/issues/11"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gist.github.com/mikeal/70daaf34ab39db6f979b8cf36fa5ac56",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gist.github.com/mikeal/70daaf34ab39db6f979b8cf36fa5ac56"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/mikeal/lucass",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mikeal/lucass"),r("OutboundLink")],1),t._v(" lucass (Lightweight Universal Content Addressable Storage Spec)")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("let key = await byteStorage(value) // value is a File, Blob, Stream, whatever\nlet value = await byteStorage(key) // could return a promise, or a stream, whatever you wanna go for\n")])])]),r("p",[t._v("Garbage collection: how do you do it …")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.usenix.org/system/files/conference/fast13/fast13-final91.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.usenix.org/system/files/conference/fast13/fast13-final91.pdf"),r("OutboundLink")],1),t._v(" - 2013 paper. Sort of useful.")])]),t._v(" "),r("h2",{attrs:{id:"dvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvc"}},[t._v("#")]),t._v(" DVC")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://dvc.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dvc.org"),r("OutboundLink")],1),t._v(" “Data Version Control”")]),t._v(" "),r("p",[t._v("It does large files but also much more related to machine learning workflow. e.g. it has a whole dep tree in each of its special files "),r("a",{attrs:{href:"https://dvc.org/doc/user-guide/dvc-file-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dvc.org/doc/user-guide/dvc-file-format"),r("OutboundLink")],1),t._v(" so it is doing some kind of optimiazation there …")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://dvc.org/doc/understanding-dvc/related-technologies",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dvc.org/doc/understanding-dvc/related-technologies"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Basically, it combines part of all of these")]),t._v(" "),r("ul",[r("li",[t._v("Git Large file management")]),t._v(" "),r("li",[t._v("Workflows: creating and running them esp machine learning workflows. Includes a DAGs for workflows (esp ML flows)")]),t._v(" "),r("li",[t._v("Experiment management")])]),t._v(" "),r("blockquote",[r("p",[t._v("DVC does not require special Git servers like Git-LFS demands. Any cloud storage like S3, GCS, or an on-premises SSH server can be used as a backend for datasets and models. No additional databases, servers, or infrastructure are required.")])]),t._v(" "),r("p",[t._v("NB: this is actually untrue about Git-LFS. Git LFS server could be backed by any cloud storage.")]),t._v(" "),r("h2",{attrs:{id:"misc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://towardsdatascience.com/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-f733b49e96e8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://towardsdatascience.com/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-f733b49e96e8"),r("OutboundLink")],1),t._v(" Argues against git-lfs and talks about dvc. However, my further reading on LFS suggests this article is attacking a bit of a straw man i.e. the Git LFS backend as provided by Github (which is expensive and limited). However, it is quite straightforward to back Git LFS onto your own cloud storage.")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.lsst.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.lsst.io/"),r("OutboundLink")],1),t._v("  - large synoptic survey telescope. Have built their own datahub afaict\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://www.lsst.org/about/dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.lsst.org/about/dm"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://sqr-001.lsst.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sqr-001.lsst.io/"),r("OutboundLink")],1),t._v(" => this looks really promising. They built their own lfs server.")])])]),t._v(" "),r("li",[t._v("Minio can provide a common interfact to all blob storage systems afaict …\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/minio/mc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/minio/mc"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Does it integrate with lfs? "),r("a",{attrs:{href:"https://github.com/mi2428/git-lfs-minio",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mi2428/git-lfs-minio"),r("OutboundLink")],1),t._v(" => 2* and only chinese")]),t._v(" "),r("li",[t._v("Works as a replacement for gitlab storage "),r("a",{attrs:{href:"https://github.com/minio/cookbook/issues/149",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/minio/cookbook/issues/149"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("Can you do raw git on cloud storage e.g. s3? Not sure??\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/7031729/publish-to-s3-using-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/7031729/publish-to-s3-using-git"),r("OutboundLink")],1),t._v(" => this is more about raw publishing of the repo …")])])]),t._v(" "),r("li",[t._v("gitea: go based open source git server. Backs onto cloud maybe via minio or fuse or …?")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/s3git/s3git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/s3git/s3git"),r("OutboundLink")],1),t._v(" - written in go and writes data to cloud storage\n"),r("ul",[r("li",[t._v("=> this is a potential lightweight alternative to full git and hacking lfs in it.")]),t._v(" "),r("li",[t._v("does have a big this is pre-release disclaimer")])])]),t._v(" "),r("li",[t._v("git-lfs vs git-annex: "),r("a",{attrs:{href:"https://anarc.at/blog/2018-12-21-large-files-with-git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://anarc.at/blog/2018-12-21-large-files-with-git/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("+10 "),r("a",{attrs:{href:"https://martinfowler.com/articles/cd4ml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://martinfowler.com/articles/cd4ml.html"),r("OutboundLink")],1),t._v(" (Sep '19) Continuous Delivery for Machine Learning (not actually writteby by fowler)\n"),r("ul",[r("li",[t._v("they cite "),r("a",{attrs:{href:"http://dvc.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("dvc.org"),r("OutboundLink")],1),t._v(" yet again …")])])]),t._v(" "),r("li",[t._v("Clearly big discussion happening around machine learning reproducibility\n"),r("ul",[r("li",[r("a",{attrs:{href:"http://dvc.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("dvc.org"),r("OutboundLink")],1),t._v(" are a play in this space …")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://christophergs.github.io/machine%20learning/2019/05/13/first-impressions-of-dvc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://christophergs.github.io/machine learning/2019/05/13/first-impressions-of-dvc/"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Mixed conclusion: it is useful but a new flow …")])])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://dvc.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("dvc.org"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("pachyderm")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.datalad.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.datalad.org/"),r("OutboundLink")],1),t._v(" Providing a data portal and a versioning system for everyone, DataLad lets you have your data and control it too.\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/datalad",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/datalad"),r("OutboundLink")],1),t._v(" 178*")]),t._v(" "),r("li",[t._v("Uses git and git-annex")]),t._v(" "),r("li",[t._v("Classic somewhat crude academic effort i suspect")]),t._v(" "),r("li",[t._v("Doesn’t have a web UI. Just a command line which is a wrapper around git stuff")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gin.g-node.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gin.g-node.org/"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Modern Research Data Management for Neuroscience …distributed version control, flavoured for science")]),t._v(" "),r("li",[t._v("Powered by gogs")]),t._v(" "),r("li",[t._v("Classic somewhat crude academic effort i suspect")]),t._v(" "),r("li",[t._v("Uses git, git-annex and gogs")])])])])],1)}),[],!1,null,null,null);"function"==typeof o&&o(s);e.default=s.exports}}]);