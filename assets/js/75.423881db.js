(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{380:function(e,a,t){"use strict";t.r(a);var r=t(18),n=function(e){e.options.__data__block__={mermaid_382ee165:'graph TD\n\n\nsubgraph Backend\n  dataset --user uploads --\x3e storage\n  dataset --user uploads --\x3e metastore\nend\n\nsubgraph "Data Factory"\n  metastore --\x3e viewgen[View Enhancer]\n  viewgen --\x3e metastore\nend\n\nuser -- user creates/edits a view --\x3e metastore\n\nsubgraph "Controller / Template"\n  storage -- download the file --\x3e visitor\n  metastore --renders  table--\x3e visitor\n  metastore --renders graph--\x3e visitor\nend\n',mermaid_382ee169:"graph LR\n\nfileupload --\x3e store\nstore --\x3e enhance[Enhance - auto add views]\nenhance --\x3e render\nenhance --\x3e useredit[User edits views]\nuseredit --\x3e render\n"}},s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"data-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-views"}},[e._v("#")]),e._v(" Data Views")]),e._v(" "),t("p",[e._v("Views of data e.g. tables, graphs, maps.")]),e._v(" "),t("h2",{attrs:{id:"how-it-works-in-ckan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-in-ckan"}},[e._v("#")]),e._v(" How it Works in CKAN")]),e._v(" "),t("ul",[t("li",[e._v("Controller / Template = frontend controller, templating library or even browser JS")]),e._v(" "),t("li",[e._v("“Data Factory” is a fancy name for any business logic that automatically adds views to a dataset. In CKAN 2 this happens as part of the resource creation logic")])]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee165",graph:e.$dataBlock.mermaid_382ee165}}),t("p",[e._v("The sequence of it …")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee169",graph:e.$dataBlock.mermaid_382ee169}})],1)}),[],!1,null,null,null);"function"==typeof n&&n(s);a.default=s.exports}}]);