(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{409:function(e,a,t){"use strict";t.r(a);var i=t(25),r=function(e){e.options.__data__block__={mermaid_64a56ff2:"graph TD\n\nclient[Client]\n\nsubgraph Application\n  ui1[UI Component 1]\n  ui2[UI Component 2]\nend\n\nclient --\x3e ui1\nclient --\x3e ui2\n\nui1 --\x3e apollo[Apollo State Management]\napollo --internal state management--\x3e apollo\napollo --\x3e sdk[SDK]\n\nsdk --\x3e metastore[MetaStore]\nsdk --\x3e storagegate[Storage Gatekeeper]\nsdk --\x3e storage[Storage - likely Cloud]\n\nclient -.-> storage\n",mermaid_64a567f4:"graph TD\n",mermaid_64a551ac:"graph TD\n\ndnew[Click Dataset New]\ndmeta[Dataset Metadata]\n\ndnew --\x3e dmeta\n\nrnew[New Resource]\n\ndmeta --saves dataset as draft--\x3e rnew\nrnew --finish--\x3e dpage[Dataset Page]\nrnew --add another--\x3e rnew\nrnew --previous--\x3edmeta\n\n\ndedit[Click Edit Dataset] --\x3e dupdate[Update Dataset Metadata]\ndupdate --save/update--\x3e dpage\ndedit --resources--\x3e res[Resources page]\nres --add new--\x3e rnew\nres --click on existing resource --\x3e redit[Resource Edit]\nredit --delete--\x3e dpage\nredit --update--\x3e resview[Resource view page]\n",mermaid_64a551a4:"graph TD\n\ndnew[Click Dataset New]\ndmeta[Dataset Metadata]\n\ndnew --\x3e dmeta\n\nrnew[New Resource]\n\ndmeta --saves dataset as draft--\x3e rnew\nrnew --save and publish + redirect--\x3e dpage[Dataset Page]\n\ndedit[Click Edit Dataset] --\x3e dupdate[Update Dataset Metadata]\ndupdate --save/update--\x3e dpage\ndedit --resources--\x3e res[Resources page]\nres --add new--\x3e rnew\nres --click on existing resource --\x3e redit[Resource Edit]\nredit --delete--\x3e dpage\nredit --update--\x3e resview[Resource view page]\n",mermaid_64a5519c:"graph TD\n\nstart --\x3e remove\nremove --\x3e showupload[Show Upload/Link options]\n"}},s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"publish-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-design"}},[e._v("#")]),e._v(" Publish - Design")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Design of a DMS publishing system, with a focus on CKAN v3 / DataHub.")]),e._v(" "),t("p",[e._v("Goal: an elegant single page application (that is easy to reuse and customize) that takes you from choosing your data file to a data package. Aka “a javascript app for turning a CSV into a data package”.")]),e._v(" "),t("p",[e._v("This application would form the UI part of a “manual” user flow of importing a data file into a Data Portal.")]),e._v(" "),t("h3",{attrs:{id:"the-framework-approach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-framework-approach"}},[e._v("#")]),e._v(" The framework approach")]),e._v(" "),t("p",[e._v("As a product, the Publish system should be thought of more as a framework than a single solution: a set of patterns, components and flows that can be composed together to build different applications and workflows.")]),e._v(" "),t("p",[e._v("A given solution is created by composing together different components into an overall flow.")]),e._v(" "),t("p",[e._v("This approach is is designed to be extensible so that new workflows and their requirements can be easily accommodated.")]),e._v(" "),t("h2",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("h3",{attrs:{id:"principles-and-remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principles-and-remarks"}},[e._v("#")]),e._v(" Principles and Remarks")]),e._v(" "),t("ul",[t("li",[e._v("Simplicity: a focus on extraordinary, easy and elegant user experience")]),e._v(" "),t("li",[e._v("Speed: not only responsiveness, but also speed to being “done”")]),e._v(" "),t("li",[e._v("Tabular: focus on tabular data to start with")]),e._v(" "),t("li",[e._v("Adaptable / Reusable: this system should be rapidly adaptable for other import flows\n"),t("ul",[t("li",[e._v("A copy-and-paste-able template that is then adapt with minor changes")]),e._v(" "),t("li",[e._v("Over time this may evolve to something configurable")])])]),e._v(" "),t("li",[e._v("CKAN-compatible (?): (Longer term) e.g. be able to reuse ckanext-scheming config")])]),e._v(" "),t("h3",{attrs:{id:"technology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technology"}},[e._v("#")]),e._v(" Technology")]),e._v(" "),t("ul",[t("li",[e._v("Build in Javascript as a SPA (single page application)")]),e._v(" "),t("li",[e._v("Use React as the framework")]),e._v(" "),t("li",[e._v("? Assume we can use NextJS as the SSR/SSG app")]),e._v(" "),t("li",[e._v("Use Apollo local storage (rather than Redux) for state management")])]),e._v(" "),t("h3",{attrs:{id:"architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),t("ul",[t("li",[e._v("Each step in a flow is “roughly” a react component")]),e._v(" "),t("li",[e._v("Each component will pass information between itself and the central store / other components. Those structures that are related to Datasets and Resources wll follow Frictionless formats.")]),e._v(" "),t("li",[e._v("Encapsulate interaction with backend in a library. Backend is CKAN MetaStore and Blob Storage access, raw Blob Storage itself (almost certainly cloud)")]),e._v(" "),t("li",[e._v("Split UI into clear components and even sub-applications (for example, a sub-application for resource adding)")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://f11s.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictioness specs"),t("OutboundLink")],1),e._v(" for structuring storage of data objects such as Dataset, Resource, Table Schema etc will be in")]),e._v(" "),t("li",[e._v("The specification of these formats themselves will be done in JSON schema and JSON Schema is what we use for specifying  new metadata profiles (usually extensions or customizations of the base Frictionless ones)")]),e._v(" "),t("li",[e._v("Data schemas are described using Table Schema (for tabular data) or JSON Schema.")])]),e._v(" "),t("p",[e._v("Diagram: SDK library encapsulates interaction with backend")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a56ff2",graph:e.$dataBlock.mermaid_64a56ff2}}),t("p",[e._v("Working assumptions")]),e._v(" "),t("ul",[t("li",[e._v("Permissions is “outside” of the UI: we can assume that UI is only launched for people with relevant permissions and that permissions are ultimately enforced in the backend (i.e. if someone attempts to save a dataset they don’t have permission for that will fail in the call to the backend). => we don’t need to show/hide/restrict based on permissions.")])]),e._v(" "),t("h2",{attrs:{id:"key-flows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-flows"}},[e._v("#")]),e._v(" Key Flows")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Ultra-simple resource(s) publishing")]),e._v(": Publish/share a resource (file) "),t("em",[e._v("fast")]),e._v(" to a new project (and dataset) - ultra-simple version (like adding a file to Drive or DropBox)\n"),t("ul",[t("li",[e._v("Implicitly creates a project and dataset")])])]),e._v(" "),t("li",[t("strong",[e._v("Publish resource(s) and make a dataset")]),e._v(" Publish a file and create the dataset explicitly (ie. add title, license etc)")]),e._v(" "),t("li",[t("strong",[e._v("Add resource(s) to a dataset")]),e._v(": a new resource to an existing dataset\n"),t("ul",[t("li",[e._v("Add multiple resources at once")])])]),e._v(" "),t("li",[e._v("Edit the metadata of an existing dataset")])]),e._v(" "),t("p",[e._v("Qu:")]),e._v(" "),t("ul",[t("li",[e._v("Do we even permit the super simple option - it’s attractive but it brings some complexity in the UI"),t("br"),e._v("\n(either we need to make user provide project/dataset level metadata at end or we guess it for them and guessing usually goes wrong). Note that Github makes you create the “project” and its repo before you can push anything.")])]),e._v(" "),t("h2",{attrs:{id:"components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),t("p",[e._v("UI")]),e._v(" "),t("ul",[t("li",[e._v("File uploader")]),e._v(" "),t("li",[e._v("Resource")])]),e._v(" "),t("p",[e._v("SDK")]),e._v(" "),t("ul",[t("li",[e._v("File upload")]),e._v(" "),t("li",[e._v("MetaStore\n"),t("ul",[t("li",[e._v("(Project creation / updating)")]),e._v(" "),t("li",[e._v("Dataset creation / updating")])])]),e._v(" "),t("li",[e._v("…")])]),e._v(" "),t("h2",{attrs:{id:"plan-of-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plan-of-work"}},[e._v("#")]),e._v(" Plan of Work")]),e._v(" "),t("p",[e._v("Task brainstorm")]),e._v(" "),t("ul",[t("li")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a567f4",graph:e.$dataBlock.mermaid_64a567f4}}),t("h2",{attrs:{id:"design-research"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-research"}},[e._v("#")]),e._v(" Design Research")]),e._v(" "),t("h3",{attrs:{id:"uploading-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-library"}},[e._v("#")]),e._v(" Uploading library")]),e._v(" "),t("p",[e._v("Atm we implement from “scratch”. Could we use an “off the shelf” solution e.g. uppy")]),e._v(" "),t("p",[e._v("Impressions of uppy:")]),e._v(" "),t("ul",[t("li",[e._v("Good support")]),e._v(" "),t("li",[e._v("Open-source MIT")]),e._v(" "),t("li",[e._v("Beautiful design")]),e._v(" "),t("li",[e._v("Customizable")]),e._v(" "),t("li",[e._v("Support (dropbox, google drive, AWS S3, Tus, XHR)")])]),e._v(" "),t("p",[e._v("Question:")]),e._v(" "),t("ul",[t("li",[e._v("how to implement uppy + CKAN SDK?")]),e._v(" "),t("li",[e._v("support for azure "),t("a",{attrs:{href:"https://github.com/transloadit/uppy/issues/1591",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/transloadit/uppy/issues/1591"),t("OutboundLink")],1),e._v(" (seems like it can work but maybe issue with large files (?))")])]),e._v(" "),t("h2",{attrs:{id:"previous-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#previous-work"}},[e._v("#")]),e._v(" Previous work")]),e._v(" "),t("ul",[t("li",[e._v("2019: "),t("a",{attrs:{href:"https://github.com/datopian/import-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datopian/import-ui"),t("OutboundLink")],1),e._v(" - alpha React App. Working demo at "),t("a",{attrs:{href:"http://datopian.github.io/import-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://datopian.github.io/import-ui"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("2018: "),t("a",{attrs:{href:"https://github.com/datopian/data-import-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datopian/data-import-ui"),t("OutboundLink")],1),e._v(" (unfinished React App)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/datahq/pm/issues/90",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datahq/pm/issues/90"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/datapackage-ui"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Cf also openspending version\n"),t("ul",[t("li",[e._v("can take from openspending but do it right 😃")])])]),e._v(" "),t("li",[e._v("the spreadsheet view is best - see "),t("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1RoKbiTXaxT_N5Vio93Er-BA3ev3iwWlu4KYv-M7kvqc/edit#gid=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("maybe given option to rotate if a lot of rows")])])]),e._v(" "),t("li",[e._v("v1 should assume tidy data")]),e._v(" "),t("li",[e._v("(?) v2 should allow for some simple wrangling to get tidy data (??)")]),e._v(" "),t("li",[e._v("This is a template for people building their own configurers")])]),e._v(" "),t("h3",{attrs:{id:"original-flow-for-datahub-data-cli-in-2016"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#original-flow-for-datahub-data-cli-in-2016"}},[e._v("#")]),e._v(" Original Flow for DataHub "),t("code",[e._v("data")]),e._v(" cli in 2016")]),e._v(" "),t("p",[e._v("Context:")]),e._v(" "),t("ul",[t("li",[e._v("you are pushing the raw file")]),e._v(" "),t("li",[e._v("and the extraction to get one or more data tables …")]),e._v(" "),t("li",[e._v("in the background we are creating a data package + pipeline")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("data push {file}\n")])])]),t("p",[e._v("Algorithm:")]),e._v(" "),t("ol",[t("li",[e._v("Detect type / format")]),e._v(" "),t("li",[e._v("Choose the data (e.g. sheet from excel)")]),e._v(" "),t("li",[e._v("Review the headers")]),e._v(" "),t("li",[e._v("Infer data-types and review")]),e._v(" "),t("li",[e._v("[Add constraints]")]),e._v(" "),t("li",[e._v("Data validation")]),e._v(" "),t("li",[e._v("Upload")]),e._v(" "),t("li",[e._v("Get back a link - view page (or the raw url) e.g. "),t("a",{attrs:{href:"http://datapackaged.com/core/finance-vix",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://datapackaged.com/core/finance-vix"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("You can view, share, publish, [fork]")])])])]),e._v(" "),t("p",[e._v("Details")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Detect file type")]),e._v(" "),t("ol",[t("li",[e._v("file extension")]),e._v(" "),t("li",[e._v("Offer guess")]),e._v(" "),t("li",[e._v("Probable guess (options?)")]),e._v(" "),t("li",[e._v("Unknown - tell us")]),e._v(" "),t("li",[e._v("Detect encoding (for CSV)")])])]),e._v(" "),t("li",[t("p",[e._v("Choose the data")]),e._v(" "),t("ol",[t("li",[e._v("Good data case")]),e._v(" "),t("li",[e._v("1 sheet => ok")]),e._v(" "),t("li",[e._v("Multiple sheets guess and offer")]),e._v(" "),t("li",[e._v("Multiple sheets - ask them (which to include)")]),e._v(" "),t("li",[e._v("bad data case - e.g. selecting within table")])])]),e._v(" "),t("li",[t("p",[e._v("Review the headers")]),e._v(" "),t("ul",[t("li",[e._v("Here is what we found")]),e._v(" "),t("li",[e._v("More than one option for headers - try to reconcile")])])])]),e._v(" "),t("h2",{attrs:{id:"appendix-integration-into-ckan-v2-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-integration-into-ckan-v2-flow"}},[e._v("#")]),e._v(" Appendix: Integration into CKAN v2 Flow")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/datopian/datapub/issues/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datopian/datapub/issues/38"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"current-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-system"}},[e._v("#")]),e._v(" Current system")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a551ac",graph:e.$dataBlock.mermaid_64a551ac}}),t("h3",{attrs:{id:"new-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-system"}},[e._v("#")]),e._v(" New system")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a551a4",graph:e.$dataBlock.mermaid_64a551a4}}),t("p",[e._v("Resource editor")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a5519c",graph:e.$dataBlock.mermaid_64a5519c}}),t("h2",{attrs:{id:"appendix-project-creation-flow-comparison"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-project-creation-flow-comparison"}},[e._v("#")]),e._v(" Appendix: Project Creation Flow Comparison")]),e._v(" "),t("h3",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" Github")]),e._v(" "),t("p",[e._v("Step 1")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/J5logpK.png",alt:""}})]),e._v(" "),t("p",[e._v("Step 2")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/ruAQxCL.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[e._v("#")]),e._v(" Gitlab")]),e._v(" "),t("p",[e._v("Step 1")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/jhtK4Ew.png",alt:""}})]),e._v(" "),t("p",[e._v("Step 2")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/me8uTRo.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/8HjRRFR.png",alt:""}})])],1)}),[],!1,null,null,null);"function"==typeof r&&r(s);a.default=s.exports}}]);