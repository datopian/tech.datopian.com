(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{411:function(e,a,t){"use strict";t.r(a);var s=t(25),r=function(e){e.options.__data__block__={mermaid_382ee1e4:"graph TD\n\nckan --\x3e versioning[ckanext-versioning]\nversioning --add path--\x3e metastore-lib\nmetastore-lib --if not path not url & sha256 & lfs configured--\x3e write[write dp.json + files with lfs pointers]\nmetastore-lib --if url path--\x3e nothing[write dp.json]\n"}},i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"versioning-analysis-and-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versioning-analysis-and-design"}},[e._v("#")]),e._v(" Versioning Analysis and Design")]),e._v(" "),t("h2",{attrs:{id:"the-advantages-of-a-git-based-approach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-advantages-of-a-git-based-approach"}},[e._v("#")]),e._v(" The Advantages of a Git-Based Approach")]),e._v(" "),t("ul",[t("li",[e._v("Excellent command line support out of the box (git)")]),e._v(" "),t("li",[e._v("Full revisioning and tagging and more (e.g. branches) in an extremely robust system")]),e._v(" "),t("li",[e._v("Support for non-dataset files in same place … (e.g. code, visualization, data processing, data analytics)")])]),e._v(" "),t("h3",{attrs:{id:"what-shall-we-use-to-create-the-hub-part-of-the-datahub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-shall-we-use-to-create-the-hub-part-of-the-datahub"}},[e._v("#")]),e._v(" What shall we use to create the Hub part of the DataHub")]),e._v(" "),t("ul",[t("li",[e._v("CKAN Classic MetaStore")]),e._v(" "),t("li",[e._v("Gitea or Gitlab or Github …")])]),e._v(" "),t("p",[e._v("For now definitely CKAN Classic MetaStore")]),e._v(" "),t("h3",{attrs:{id:"what-shall-we-use-to-create-manage-git-repos-for-us"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-shall-we-use-to-create-manage-git-repos-for-us"}},[e._v("#")]),e._v(" What shall we use to create / manage git repos for us?")]),e._v(" "),t("ul",[t("li",[e._v("GitHub")]),e._v(" "),t("li",[e._v("Gitea")]),e._v(" "),t("li",[e._v("Azure Git Repos "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/devops/repos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://azure.microsoft.com/en-us/services/devops/repos/"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"metadata-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata-flow"}},[e._v("#")]),e._v(" Metadata flow")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee1e4",graph:e.$dataBlock.mermaid_382ee1e4}})],1)}),[],!1,null,null,null);"function"==typeof r&&r(i);a.default=i.exports}}]);