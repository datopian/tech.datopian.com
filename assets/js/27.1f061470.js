(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{427:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-play-around-with-ckan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-play-around-with-ckan"}},[t._v("#")]),t._v(" How to play around with CKAN")]),t._v(" "),s("p",[t._v("In this section, we are going to show some basic functionality of CKAN focused on the API.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[t._v("We assume you’ve already completed the "),s("a",{attrs:{href:"/ckan"}},[t._v("Getting Started Guide")]),t._v(".")]),t._v(" "),s("li",[t._v("You have a basic understanding of Key data portal concepts:")])]),t._v(" "),s("p",[t._v("CKAN is a tool for making data portals to manage and publish datasets. You can read about the key concepts such as Datasets and Organizations in the User Guide – or you can just dive in and play around!")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.ckan.org/en/2.8/user-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ckan.org/en/2.8/user-guide.html"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Install a "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON formatter plugin for Chrome"),s("OutboundLink")],1),t._v(" or browser of your choice.")]),t._v(" "),s("p",[t._v("If you are familiar with the command line tool "),s("code",[t._v("curl")]),t._v(", you can use that.")]),t._v(" "),s("p",[t._v("In this tutorial, we will be using "),s("code",[t._v("curl")]),t._v(", but for most of the commands, you can paste a link in your browser. For POST commands, you can use "),s("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Chrome Plugin"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"first-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[t._v("#")]),t._v(" First steps")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("By default the portal is accessible on "),s("a",{attrs:{href:"http://localhost:5000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:5000"),s("OutboundLink")],1),t._v(". Let’s update your "),s("code",[t._v("/etc/hosts")]),t._v(" to access it on "),s("a",{attrs:{href:"http://ckan:5000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vi /etc/hosts      # You can use the editor of your choice\n# add following\n127.0.0.1 ckan\n")])])])]),t._v(" "),s("p",[t._v("At this point, you should be able to access the portal on "),s("a",{attrs:{href:"http://ckan:5000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/T5LWo8A.png",alt:"CKAN Home Page"}})]),t._v(" "),s("p",[t._v("Let’s add some fixtures to it. For software, a fixture is something used consistently (in this case, data for you to play around with). Run the following from your terminal (do NOT cut the previous docker process as this one depends on the already launched docker, run in another terminal):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker-compose -f docker-compose.dev.yml "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" ckan-dev paster --plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ckan create-test-data -c production.ini\n")])])]),s("p",[t._v("Optionally you can "),s("code",[t._v("exec")]),t._v(" into a running container using")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),s("p",[t._v("and run the "),s("code",[t._v("paster")]),t._v(" command there")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("paster --plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ckan create-test-data -c production.ini\n")])])]),s("p",[t._v("You should be able to see 2 new datasets on home page:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/BiSifyb.png",alt:"CKAN with data"}})]),t._v(" "),s("h3",{attrs:{id:"check-ckan-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-ckan-api"}},[t._v("#")]),t._v(" Check CKAN API")]),t._v(" "),s("p",[t._v("This tutorial focuses on the CKAN API as that is central to development work and requires more guidance. We also invite you to explore the user interface which you can do directly yourself by visiting "),s("a",{attrs:{href:"http://ckan:5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"let-s-check-the-portal-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let-s-check-the-portal-status"}},[t._v("#")]),t._v(" Let’s check the portal status")]),t._v(" "),s("p",[t._v("Go to "),s("a",{attrs:{href:"http://ckan:5000/api/3/action/status_show",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/status_show"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("You should see something like this:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ckan:5000/api/3/action/help_show?name=status_show"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ckan_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.8.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"site_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ckan:5000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"site_description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Testing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"site_title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CKAN Demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_emails_to"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locale_default"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"envvars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This means everything is OK: the CKAN portal is up and running, the API is working as expected. In case you see an internal server error, please check the logs in your terminal.")]),t._v(" "),s("h3",{attrs:{id:"a-few-useful-api-endpoints-to-start-with"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-few-useful-api-endpoints-to-start-with"}},[t._v("#")]),t._v(" A Few useful API endpoints to start with")]),t._v(" "),s("p",[t._v("CKAN’s Action API is a powerful, RPC-style API that exposes all of CKAN’s core features to API clients. All of a CKAN website’s core functionality (everything you can do with the web interface and more) can be used by external code that calls the CKAN API.")]),t._v(" "),s("h4",{attrs:{id:"get-a-list-of-all-datasets-on-the-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-list-of-all-datasets-on-the-portal"}},[t._v("#")]),t._v(" Get a list of all datasets on the portal")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ckan:5000/api/3/action/package_list",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/package_list"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=package_list"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"annakarenina"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warandpeace"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"search-for-a-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-for-a-dataset"}},[t._v("#")]),t._v(" Search for a dataset")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ckan:5000/api/3/action/package_search?q=russian",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/package_search?q=russian"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=package_search"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"get-dataset-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-dataset-details"}},[t._v("#")]),t._v(" Get dataset details")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ckan:5000/api/3/action/package_show?id=annakarenina",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/package_show?id=annakarenina"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=package_show"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license_title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Other (Open)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"search-for-a-resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-for-a-resource"}},[t._v("#")]),t._v(" Search for a resource")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ckan:5000/api/3/action/resource_search?query=format:plain%20text",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/resource_search?query=format:plain text"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=resource_search"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"results"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mimetype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ...\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"get-resource-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-details"}},[t._v("#")]),t._v(" Get resource details")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ckan:5000/api/3/action/resource_show?id=288455e8-c09c-4360-b73a-8b55378c474a",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/api/3/action/resource_show?id=288455e8-c09c-4360-b73a-8b55378c474a"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=resource_show"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mimetype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("em",[t._v("Note:")]),t._v(" These are only a few examples. You can find a full list of API actions in the "),s("a",{attrs:{href:"https://docs.ckan.org/en/2.8/api/#action-api-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKAN API guide"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"create-organizations-datasets-and-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-organizations-datasets-and-resources"}},[t._v("#")]),t._v(" Create Organizations, Datasets and Resources")]),t._v(" "),s("p",[t._v("There are 4 steps:")]),t._v(" "),s("ul",[s("li",[t._v("Get an API key;")]),t._v(" "),s("li",[t._v("Create an organization;")]),t._v(" "),s("li",[t._v("Create dataset inside an organization (you can’t create a dataset without a parent organization);")]),t._v(" "),s("li",[t._v("And add resources to the dataset.")])]),t._v(" "),s("h4",{attrs:{id:"get-a-sysadmin-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-sysadmin-key"}},[t._v("#")]),t._v(" Get a Sysadmin Key")]),t._v(" "),s("p",[t._v("To create your first dataset, you need an API key.")]),t._v(" "),s("p",[t._v("You can see sysadmin credentials in the file "),s("code",[t._v(".env")]),t._v(". By default, they should be")]),t._v(" "),s("ul",[s("li",[t._v("Username: "),s("code",[t._v("ckan_admin")])]),t._v(" "),s("li",[t._v("Password: "),s("code",[t._v("test1234")])])]),t._v(" "),s("ol",[s("li",[t._v("Navigate to "),s("a",{attrs:{href:"http://ckan:5000/user/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/user/login"),s("OutboundLink")],1),t._v(" and login.")]),t._v(" "),s("li",[t._v("Click on your username ("),s("code",[t._v("ckan_admin")]),t._v(") in the upright corner.")]),t._v(" "),s("li",[t._v("Scroll down until you see "),s("code",[t._v("API Key")]),t._v(" on the left side of the screen and copy its value. It should look similar to "),s("code",[t._v("c7325sd4-7sj3-543a-90df-kfifsdk335")]),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"create-organization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-organization"}},[t._v("#")]),t._v(" Create Organization")]),t._v(" "),s("p",[t._v("You can create an organization from the browser easily, but let’s use "),s("a",{attrs:{href:"https://docs.ckan.org/en/2.8/api/#ckan.logic.action.create.organization_create",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKAN API"),s("OutboundLink")],1),t._v(" to do so.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST http://ckan:5000/api/3/action/organization_create -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "name": "demo-organization",\n  "title": "Demo Organization",\n  "description": "This is my awesome organization"\n}\'')]),t._v("\n")])])]),s("p",[t._v("Response:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=organization_create"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"create-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-dataset"}},[t._v("#")]),t._v(" Create Dataset")]),t._v(" "),s("p",[t._v("Now, we are ready to create our first dataset.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST http://ckan:5000/api/3/action/package_create -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n "name": "my-first-dataset",\n "title": "My First Dataset",\n "description": "This is my first dataset!",\n "owner_org": "demo-organization"\n}\'')]),t._v("\n")])])]),s("p",[t._v("Response:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=package_create"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license_title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This will create an empty (draft) dataset.")]),t._v(" "),s("h4",{attrs:{id:"add-a-resource-to-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-resource-to-it"}},[t._v("#")]),t._v(" Add a resource to it")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST http://ckan:5000/api/3/action/resource_create -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: 9c04a69d-79f4-4b4b-b4e1-f2ac31ed961c"')]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "package_id": "my-first-dataset",\n  "url":  "https://raw.githubusercontent.com/frictionlessdata/test-data/master/files/csv/100kb.csv",\n  "description": "This is the best resource ever!" ,\n  "name": "brand-new-resource"\n}\'')]),t._v("\n")])])]),s("p",[t._v("Response:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ckan:5000/api/3/action/help_show?name=resource_create"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cache_last_updated"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("That’s it! Now you should be able to see your dataset on the portal at "),s("a",{attrs:{href:"http://ckan:5000/dataset/my-first-dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ckan:5000/dataset/my-first-dataset"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/ckan/install-extension"}},[t._v("Install Extensions")]),t._v(".")])])])}),[],!1,null,null,null);a.default=n.exports}}]);