(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{389:function(e,t,n){"use strict";n.r(t);var a=n(18),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installing-extensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-extensions"}},[e._v("#")]),e._v(" Installing extensions")]),e._v(" "),n("p",[e._v("A CKAN extension is a Python package that modifies or extends CKAN. Each extension contains one or more plugins that must be added to your CKAN config file to activate the extension’s features.")]),e._v(" "),n("p",[e._v("In this sections we will teach you only how to install existing extensions. See "),n("a",{attrs:{href:"/ckan/create-extension"}},[e._v("next steps")]),e._v(" in case you need to create or modify extensions")]),e._v(" "),n("h2",{attrs:{id:"add-new-extension"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-new-extension"}},[e._v("#")]),e._v(" Add new extension")]),e._v(" "),n("p",[e._v("Lets install "),n("a",{attrs:{href:"https://github.com/rclark/ckanext-helloworld",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hello World"),n("OutboundLink")],1),e._v(" on the portal. For that we need to do 2 thing:")]),e._v(" "),n("ol",[n("li",[e._v("Install extension when building docker image")]),e._v(" "),n("li",[e._v("Add new extension to CKAN plugins")])]),e._v(" "),n("h3",{attrs:{id:"install-extension-on-docker-build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-extension-on-docker-build"}},[e._v("#")]),e._v(" Install extension on docker build")]),e._v(" "),n("p",[e._v("For this we need to modify Dockerfile for ckan service. Let’s edit it:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vi ckan/Dockerfile.dev\n\n# Add following\nRUN pip install -e git+https://github.com/rclark/ckanext-helloworld.git#egg=ckanext-helloworld\n")])])]),n("p",[n("em",[e._v("Note:")]),e._v(" In this example we use vi editor, but you can choose any of your choice.")]),e._v(" "),n("h3",{attrs:{id:"add-new-extension-to-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-new-extension-to-plugins"}},[e._v("#")]),e._v(" Add new extension to plugins")]),e._v(" "),n("p",[e._v("We need to modify .env file for that - Search for "),n("code",[e._v("CKAN_PLUGINS")]),e._v(" and add new extension to the existing list:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vi .env\n\nCKAN__PLUGINS=helloworld envvars image_view text_view recline_view datastore datapusher\n")])])]),n("h2",{attrs:{id:"check-extension-is-installed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-extension-is-installed"}},[e._v("#")]),e._v(" Check extension is installed")]),e._v(" "),n("p",[e._v("After modifying configuration files you will need to restart the portal. If your CKAN protal is up and running bring it down and re-start")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker-compose -f docker-compose.dev.yml stop\ndocker-compose -f docker-compose.dev.yml up --build\n")])])]),n("h3",{attrs:{id:"check-what-extensions-you-already-have"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-what-extensions-you-already-have"}},[e._v("#")]),e._v(" Check what extensions you already have:")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://ckan:5000/api/3/action/status_show",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ckan:5000/api/3/action/status_show"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Response should include list of all extensions including "),n("code",[e._v("helloworld")]),e._v(" in it.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"extensions": [\n  "envvars",\n  "helloworld",\n  "image_view",\n  "text_view",\n  "recline_view",\n  "datastore",\n  "datapusher"\n]\n')])])]),n("h3",{attrs:{id:"check-the-extension-is-actually-working"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-the-extension-is-actually-working"}},[e._v("#")]),e._v(" Check the extension is actually working")]),e._v(" "),n("p",[e._v("This extension simply adds new route "),n("code",[e._v("/hello/world/name")]),e._v(" to the base ckan and says hello")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://ckan:5000/hello/world/John-Doe",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ckan:5000/hello/world/John-Doe"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("p",[n("a",{attrs:{href:"/ckan/create-extension"}},[e._v("Create your own extension")])])])}),[],!1,null,null,null);t.default=s.exports}}]);