(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{375:function(e,t,a){"use strict";a.r(t);var s=a(18),i=function(e){e.options.__data__block__={mermaid_64a56ff2:"graph TD\n\nclient[Client]\n\nsubgraph Application\n  ui1[UI Component 1]\n  ui2[UI Component 2]\nend\n\nclient --\x3e ui1\nclient --\x3e ui2\n\nui1 --\x3e apollo[Apollo State Management]\napollo --internal state management--\x3e apollo\napollo --\x3e sdk[SDK]\n\nsdk --\x3e metastore[MetaStore]\nsdk --\x3e storagegate[Storage Gatekeeper]\nsdk --\x3e storage[Storage - likely Cloud]\n\nclient -.-> storage\n",mermaid_64a567f4:"graph TD\n"}},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"publish-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-design"}},[e._v("#")]),e._v(" Publish - Design")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Design of a DMS publishing system, with a focus on CKAN v3 / DataHub.")]),e._v(" "),a("p",[e._v("Goal: an elegant single page application (that is easy to reuse and customize) that takes you from choosing your data file to a data package. Aka “a javascript app for turning a CSV into a data package”.")]),e._v(" "),a("p",[e._v("This application would form the UI part of a “manual” user flow of importing a data file into a Data Portal.")]),e._v(" "),a("h3",{attrs:{id:"the-framework-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-framework-approach"}},[e._v("#")]),e._v(" The framework approach")]),e._v(" "),a("p",[e._v("As a product, the Publish system should be thought of more as a framework than a single solution: a set of patterns, components and flows that can be composed together to build different applications and workflows.")]),e._v(" "),a("p",[e._v("A given solution is created by composing together different components into an overall flow.")]),e._v(" "),a("p",[e._v("This approach is is designed to be extensible so that new workflows and their requirements can be easily accommodated.")]),e._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("h3",{attrs:{id:"principles-and-remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principles-and-remarks"}},[e._v("#")]),e._v(" Principles and Remarks")]),e._v(" "),a("ul",[a("li",[e._v("Simplicity: a focus on extraordinary, easy and elegant user experience")]),e._v(" "),a("li",[e._v("Speed: not only responsiveness, but also speed to being “done”")]),e._v(" "),a("li",[e._v("Tabular: focus on tabular data to start with")]),e._v(" "),a("li",[e._v("Adaptable / Reusable: this system should be rapidly adaptable for other import flows\n"),a("ul",[a("li",[e._v("A copy-and-paste-able template that is then adapt with minor changes")]),e._v(" "),a("li",[e._v("Over time this may evolve to something configurable")])])]),e._v(" "),a("li",[e._v("CKAN-compatible (?): (Longer term) e.g. be able to reuse ckanext-scheming config")])]),e._v(" "),a("h3",{attrs:{id:"technology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technology"}},[e._v("#")]),e._v(" Technology")]),e._v(" "),a("ul",[a("li",[e._v("Build in Javascript as a SPA (single page application)")]),e._v(" "),a("li",[e._v("Use React as the framework")]),e._v(" "),a("li",[e._v("? Assume we can use NextJS as the SSR/SSG app")]),e._v(" "),a("li",[e._v("Use Apollo local storage (rather than Redux) for state management")])]),e._v(" "),a("h3",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("ul",[a("li",[e._v("Each step in a flow is “roughly” a react component")]),e._v(" "),a("li",[e._v("Each component will pass information between itself and the central store / other components. Those structures that are related to Datasets and Resources wll follow Frictionless formats.")]),e._v(" "),a("li",[e._v("Encapsulate interaction with backend in a library. Backend is CKAN MetaStore and Blob Storage access, raw Blob Storage itself (almost certainly cloud)")]),e._v(" "),a("li",[e._v("Split UI into clear components and even sub-applications (for example, a sub-application for resource adding)")]),e._v(" "),a("li",[e._v("Use "),a("a",{attrs:{href:"https://f11s.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictioness specs"),a("OutboundLink")],1),e._v(" for structuring storage of data objects such as Dataset, Resource, Table Schema etc will be in")]),e._v(" "),a("li",[e._v("The specification of these formats themselves will be done in JSON schema and JSON Schema is what we use for specifying  new metadata profiles (usually extensions or customizations of the base Frictionless ones)")]),e._v(" "),a("li",[e._v("Data schemas are described using Table Schema (for tabular data) or JSON Schema.")])]),e._v(" "),a("p",[e._v("Diagram: SDK library encapsulates interaction with backend")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a56ff2",graph:e.$dataBlock.mermaid_64a56ff2}}),a("p",[e._v("Working assumptions")]),e._v(" "),a("ul",[a("li",[e._v("Permissions is “outside” of the UI: we can assume that UI is only launched for people with relevant permissions and that permissions are ultimately enforced in the backend (i.e. if someone attempts to save a dataset they don’t have permission for that will fail in the call to the backend). => we don’t need to show/hide/restrict based on permissions.")])]),e._v(" "),a("h2",{attrs:{id:"key-flows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-flows"}},[e._v("#")]),e._v(" Key Flows")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Ultra-simple resource(s) publishing")]),e._v(": Publish/share a resource (file) "),a("em",[e._v("fast")]),e._v(" to a new project (and dataset) - ultra-simple version (like adding a file to Drive or DropBox)\n"),a("ul",[a("li",[e._v("Implicitly creates a project and dataset")])])]),e._v(" "),a("li",[a("strong",[e._v("Publish resource(s) and make a dataset")]),e._v(" Publish a file and create the dataset explicitly (ie. add title, license etc)")]),e._v(" "),a("li",[a("strong",[e._v("Add resource(s) to a dataset")]),e._v(": a new resource to an existing dataset\n"),a("ul",[a("li",[e._v("Add multiple resources at once")])])]),e._v(" "),a("li",[e._v("Edit the metadata of an existing dataset")])]),e._v(" "),a("p",[e._v("Qu:")]),e._v(" "),a("ul",[a("li",[e._v("Do we even permit the super simple option - it’s attractive but it brings some complexity in the UI"),a("br"),e._v("\n(either we need to make user provide project/dataset level metadata at end or we guess it for them and guessing usually goes wrong). Note that Github makes you create the “project” and its repo before you can push anything.")])]),e._v(" "),a("h2",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),a("p",[e._v("UI")]),e._v(" "),a("ul",[a("li",[e._v("File uploader")]),e._v(" "),a("li",[e._v("Resource")])]),e._v(" "),a("p",[e._v("SDK")]),e._v(" "),a("ul",[a("li",[e._v("File upload")]),e._v(" "),a("li",[e._v("MetaStore\n"),a("ul",[a("li",[e._v("(Project creation / updating)")]),e._v(" "),a("li",[e._v("Dataset creation / updating")])])]),e._v(" "),a("li",[e._v("…")])]),e._v(" "),a("h2",{attrs:{id:"plan-of-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plan-of-work"}},[e._v("#")]),e._v(" Plan of Work")]),e._v(" "),a("p",[e._v("Task brainstorm")]),e._v(" "),a("ul",[a("li")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a567f4",graph:e.$dataBlock.mermaid_64a567f4}}),a("h2",{attrs:{id:"design-research"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-research"}},[e._v("#")]),e._v(" Design Research")]),e._v(" "),a("h3",{attrs:{id:"uploading-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uploading-library"}},[e._v("#")]),e._v(" Uploading library")]),e._v(" "),a("p",[e._v("Atm we implement from “scratch”. Could we use an “off the shelf” solution e.g. uppy")]),e._v(" "),a("p",[e._v("Impressions of uppy:")]),e._v(" "),a("ul",[a("li",[e._v("Good support")]),e._v(" "),a("li",[e._v("Open-source MIT")]),e._v(" "),a("li",[e._v("Beautiful design")]),e._v(" "),a("li",[e._v("Customizable")]),e._v(" "),a("li",[e._v("Support (dropbox, google drive, AWS S3, Tus, XHR)")])]),e._v(" "),a("p",[e._v("Question:")]),e._v(" "),a("ul",[a("li",[e._v("how to implement uppy + CKAN SDK?")]),e._v(" "),a("li",[e._v("support for azure "),a("a",{attrs:{href:"https://github.com/transloadit/uppy/issues/1591",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/transloadit/uppy/issues/1591"),a("OutboundLink")],1),e._v(" (seems like it can work but maybe issue with large files (?))")])]),e._v(" "),a("h2",{attrs:{id:"appendix-project-creation-flow-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-project-creation-flow-comparison"}},[e._v("#")]),e._v(" Appendix: Project Creation Flow Comparison")]),e._v(" "),a("h3",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" Github")]),e._v(" "),a("p",[e._v("Step 1")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/J5logpK.png",alt:""}})]),e._v(" "),a("p",[e._v("Step 2")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/ruAQxCL.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[e._v("#")]),e._v(" Gitlab")]),e._v(" "),a("p",[e._v("Step 1")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/jhtK4Ew.png",alt:""}})]),e._v(" "),a("p",[e._v("Step 2")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/me8uTRo.png",alt:""}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/8HjRRFR.png",alt:""}})])],1)}),[],!1,null,null,null);"function"==typeof i&&i(o);t.default=o.exports}}]);