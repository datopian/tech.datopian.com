(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{409:function(e,a,t){"use strict";t.r(a);var i=t(25),r=function(e){e.options.__data__block__={mermaid_64a5692a:"graph LR\n\na[Add a file]\nb[Add metadata]\nc[Save]\n\n\na --\x3e b\nb --\x3e c\n",mermaid_64a56928:"graph LR\n\na[Add a file]\nb[Add metadata]\nc[Save]\nd[Add table schema]\n\n\na --\x3e b\nb -.-> d\nd -.-> c\n",mermaid_64a56926:"graph LR\n\na[Add a file]\nb[Add metadata]\nc[Save]\nd[Add table schema]\ne[Check for PII]\n\na --\x3e b\nb -.-> d\nd -.-> e\ne --\x3e c\n",mermaid_64a56918:'graph TD\n\nuser[User with data and/or metadata]\npublish[Publish process]\nplatform["Storage (metadata and blobs)"]\n\nuser --\x3e publish --\x3e platform\n',mermaid_64a568e6:'graph TD\n\nproject[Project/Dataset create]\naddres["Add resource(s)"]\nsave[Save / Commit]\n\nproject --\x3e addres\naddres --\x3e save\n',mermaid_64a568de:'graph TD\n\nproject[Project/Dataset create]\naddres["Add resource(s)"]\naddmeta["Add dataset metadata"]\nsave[Save / Commit]\n\nproject --\x3e addres\naddres -.optional.-> addmeta\naddmeta -.-> save\naddres -.-> save\n',mermaid_64a568a6:'graph TD\n\nproject[Project/Dataset create]\naddres["Add resource(s)"]\naddmeta[Add dataset metadata]\nsave[Save / Commit]\n\nproject --\x3e addmeta\naddmeta --\x3e addres\naddres --\x3e save\naddmeta -.-> save\n',mermaid_64a567b0:"graph TD\n\naddfile[Select a file]\nmetadata[Add Metadata]\nupload[Upload to Storage]\nsave[Save]\n\naddfile -.in the background.-> upload\naddfile --\x3e metadata\nupload -.progress reporting.-> save\nmetadata --\x3e save\n",mermaid_64a56734:"graph TD\n\naddfile[Select a file]\ninfer[Infer the fields, their names and perhaps their types]\nedit[Edit the fields and their details e.g. description, types]\nsave[Save]\n\naddfile --\x3e infer\ninfer --\x3e edit\nedit --\x3e save\n"}},o=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"publish-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-data"}},[e._v("#")]),e._v(" Publish Data")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Publish functionality covers the whole area of creating and editing datasets and resources, including data upload. The core job story is something like:")]),e._v(" "),t("blockquote",[t("p",[e._v("When a Data Curator has a data file or dataset they want to add it to their data portal/platform quickly and easily so that it is available there.")])]),e._v(" "),t("p",[e._v("Publication can be divided by its "),t("em",[e._v("mode")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Manual")]),e._v(": publication is done by people via a user interfaces or other tool")]),e._v(" "),t("li",[t("strong",[e._v("Programmatic")]),e._v(": publication is done programatically using APIs and is usually part of automated processes")]),e._v(" "),t("li",[t("strong",[e._v("Hybrid")]),e._v(": which combines manual and programmatic. An example would be harvesting where setup and configuration may be done in a UI manually with the process then running automatically and programmatically (in addition, some new harvesting flows require manual programmatic setup e.g. writing a harvester in Python for a new source data format).")])]),e._v(" "),t("p",[t("strong",[e._v("Focus on Manual")]),e._v(" we will focus on the manual in this section: programmatic is by nature largely up to the client programmer (assuming the APIs are there) whilst "),t("RouterLink",{attrs:{to:"/harvesting/"}},[e._v("Harvesting")]),e._v(" has a section of its own. That said, many concepts here are relevant for other cases e.g. material on "),t("RouterLink",{attrs:{to:"/glossary/#profile"}},[e._v("profiles")]),e._v(" and "),t("RouterLink",{attrs:{to:"/glossary/#schema"}},[e._v("schemas")]),e._v(".")],1),e._v(" "),t("p",[t("strong",[e._v("Data uploading")]),e._v(": included in publish is the process of uploading data into the DMS, and specifically into "),t("RouterLink",{attrs:{to:"/storage/"}},[e._v("storage")]),e._v(" and especially "),t("RouterLink",{attrs:{to:"/blob-storage/"}},[e._v("(blob) storage")]),e._v("."),t("br"),e._v("\n.")],1),e._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("At its simplest, a publishing process can just involve providing a few metadata fields in a form – with the data itself stored elsewhere.")]),e._v(" "),t("p",[e._v("At the other end of the spectrum, we could have a multi-stage and complex process like this:")]),e._v(" "),t("ul",[t("li",[e._v("Multiple (simultaneous) resource upload with shared metadata e.g. I’m creating a timeseries dataset with the last 12 months of data and I want each file to share the same column information but to have different titles")]),e._v(" "),t("li",[e._v("A variety of metadata profiles")]),e._v(" "),t("li",[e._v("Data validation (prior to ingest) including checking for PII (personally identifiable infromation)")]),e._v(" "),t("li",[e._v("Complex workflow related to approval e.g. only publish if at least two people have approved")]),e._v(" "),t("li",[e._v("Embargoing (only make public at time X)")])]),e._v(" "),t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("ul",[t("li",[e._v("Create and edit datasets and resources")]),e._v(" "),t("li",[e._v("File upload as part of resource creation")]),e._v(" "),t("li",[e._v("Custom metadata for both profile and schemas")])]),e._v(" "),t("h3",{attrs:{id:"job-stories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job-stories"}},[e._v("#")]),e._v(" Job Stories")]),e._v(" "),t("p",[e._v("When a Data Curator has a data file or dataset they want to add it manually (e.g. via drag and drop etc) to their data portal quickly and easily so that it is avaialble there.")]),e._v(" "),t("p",[e._v("More specifically: As a Data Curator I want to drop a file in and edit the metadata and have it saved in a really awesome interactive way so that the data is “imported” and of good quality (and i get feedback)")]),e._v(" "),t("h4",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("A resource is any data item in a dataset e.g. a file.")])]),e._v(" "),t("p",[e._v("When adding a resource to a dataset I want metadata pre-entered for me (e.g. resource name from file name, encoding, …) to save time and reduce errors")]),e._v(" "),t("p",[e._v("When adding a resource to a dataset I want to be able to edit the metadata whilst uploading so that I save time")]),e._v(" "),t("p",[e._v("When uploading a resource’s data as part of adding a resource to a dataset I want to see upload progress so that I have a sense of how long this will take")]),e._v(" "),t("p",[e._v("When adding resources to a dataset I want to be able to add and upload multiple files at once so that I save time and make one big change")]),e._v(" "),t("p",[e._v("When adding a resource which is tabular (e.g. csv, excel) I want to enter the (table) schema (i.e. the names, description and types of columns) so that my data is more useable, presentable, importable (e.g. to DataStore) and validatable")]),e._v(" "),t("p",[e._v("When adding a resource which is currently stored in dropbox/gdrive/onedrive I want to pull the bytes directly from there so as to speed up the upload process")]),e._v(" "),t("h3",{attrs:{id:"domain-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-model"}},[e._v("#")]),e._v(" Domain Model")]),e._v(" "),t("p",[e._v("The domain model here is that of the "),t("a",{attrs:{href:""}},[e._v("DMS")]),e._v(" and we recommend visiting that page for more information. The key items are:")]),e._v(" "),t("ul",[t("li",[e._v("Project")]),e._v(" "),t("li",[e._v("Dataset")]),e._v(" "),t("li",[e._v("Resource")])]),e._v(" "),t("h3",{attrs:{id:"principles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[e._v("#")]),e._v(" Principles")]),e._v(" "),t("ul",[t("li",[e._v("Most ordinary data users don’t distinguish resources and datasets in their everyday use. They also prefer a single (denormalized) view onto their data.")]),e._v(" "),t("li",[e._v("Normalization is not normal for users (it is a convenience, economisation and consistency device)")]),e._v(" "),t("li",[e._v("And in any case most of us start from files not datasets (even if datasets evolve later).")]),e._v(" "),t("li",[e._v("Minimize the information the user has to provide to get going. For example, does a user "),t("em",[e._v("have")]),e._v(" to provide a license to start with? If that is not absolutely required leave this item for later.")]),e._v(" "),t("li",[e._v("Automate where you can but only where you can guess reliably. If you do guess, give the user ability to modify. Otherwise, magic often turns into mud. For example, if we are guessing file types let the user check and correct this.")])]),e._v(" "),t("h2",{attrs:{id:"flows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flows"}},[e._v("#")]),e._v(" Flows")]),e._v(" "),t("ul",[t("li",[e._v("Publish flows are highly custom: different platforms have different needs")]),e._v(" "),t("li",[e._v("At the same time there are core components that most people will use (and customize) e.g. uploading a file, adding dataset metadata etc")]),e._v(" "),t("li",[e._v("The flows shown here are therefore illustrative and inspirational rather than definitive")])]),e._v(" "),t("h3",{attrs:{id:"evolution-of-a-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evolution-of-a-flow"}},[e._v("#")]),e._v(" Evolution of a Flow")]),e._v(" "),t("p",[e._v("Here’s a simple illustration of how a publishing flow might evolve:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a5692a",graph:e.$dataBlock.mermaid_64a5692a}}),t("Mermaid",{attrs:{id:"mermaid_64a56928",graph:e.$dataBlock.mermaid_64a56928}}),t("Mermaid",{attrs:{id:"mermaid_64a56926",graph:e.$dataBlock.mermaid_64a56926}}),t("p",[e._v("PII = personally identifiable info")]),e._v(" "),t("h3",{attrs:{id:"the-30-000-foot-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-30-000-foot-view"}},[e._v("#")]),e._v(" The 30,000 foot view")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a56918",graph:e.$dataBlock.mermaid_64a56918}}),t("h3",{attrs:{id:"add-dataset-high-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-dataset-high-level"}},[e._v("#")]),e._v(" Add Dataset: High Level")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a568e6",graph:e.$dataBlock.mermaid_64a568e6}}),t("h3",{attrs:{id:"add-dataset-mid-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-dataset-mid-level"}},[e._v("#")]),e._v(" Add Dataset: Mid Level")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a568de",graph:e.$dataBlock.mermaid_64a568de}}),t("p",[e._v("The approach above is “file driven” rather than “metadata driven”, in the sense that you are start by providing a file rather than providing metadata.")]),e._v(" "),t("p",[e._v("Here’s the metadata driven flow:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a568a6",graph:e.$dataBlock.mermaid_64a568a6}}),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Comment: The file driven approach is preferable")]),e._v(" "),t("p",[e._v("We think the “file driven” approach where the flow starts with a user adding and uploading a file (and then adding metadata) is preferable to an metadata driven approach where you start with a dataset and metatdata and then add files (as is the default today in CKAN).")]),e._v(" "),t("p",[e._v("Why do we think a file driven approach is better? a) a file is what the user has immediately to hand b) it is concrete whilst “metadata” is abstract c) common tools for storing files e.g. Dropbox or Google Drive start with providing a file - only later, and optionally, do you rename it, move it etc.")]),e._v(" "),t("p",[e._v("That said, tools like GitHub or Gitlab require one to create a “project”, albeit a minimal one, before being able to push any content. However, GitHub and Gitlab are developer oriented tools that can assume a willingness to tolerate a slightly more cumbersome UX. Furthermore, the default use case is that you have a git repo that you wish to push so the the use case of a non-technical user uploading files is clearly secondary. Finally, in these systems you can create a project just to have an issue tracker or wiki (without having fiile storage). In this case, creating the project first makes sense.")]),e._v(" "),t("p",[e._v("In a DMS, we are often dealing with non-technical or semi-technical users. Thus, providing a simple, intuitive flow is preferable. That said, one may still have a very lightweight project creation flow so that we have a container for the files (just as in, say, Google Drive you already have a folder to put your files in).")])]),e._v(" "),t("h3",{attrs:{id:"dataset-metadata-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataset-metadata-editor"}},[e._v("#")]),e._v(" Dataset Metadata editor")]),e._v(" "),t("p",[e._v("There are lots of ways this can be designed. We always encourage minimalism.")]),e._v(" "),t("ul",[t("li",[e._v("Adding information e.g. license, description, author …")]),e._v(" "),t("li",[e._v("? Default the license (and explain what the license means …)")])]),e._v(" "),t("h3",{attrs:{id:"add-a-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-resource"}},[e._v("#")]),e._v(" Add a Resource")]),e._v(" "),t("p",[e._v("From here on, we’ll zoom in on the “publish” part of that process. Let’s start with the simplest case of adding a single resource in the form of an uploading file:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a567b0",graph:e.$dataBlock.mermaid_64a567b0}}),t("p",[e._v("Notes")]),e._v(" "),t("ul",[t("li",[e._v("Alternative to “Select a file” would be to just “Link” to a file that is already online and available")])]),e._v(" "),t("h3",{attrs:{id:"schema-data-dictionary-for-a-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-data-dictionary-for-a-resource"}},[e._v("#")]),e._v(" Schema (Data Dictionary) for a Resource")]),e._v(" "),t("p",[e._v("One part of a publishing flow would be to describe the "),t("RouterLink",{attrs:{to:"/glossary/#schema"}},[e._v("schema")]),e._v(" for a resource. Usually, we restrict this to tabular data resources and hence this is a Table Schema.")],1),e._v(" "),t("p",[e._v("Usually adding and editing a schema for a resource will be an integrated part of managing the overall metadata for the resource but it can also be a standalone step. The following flow focuses solely on the add schema:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a56734",graph:e.$dataBlock.mermaid_64a56734}}),t("p",[e._v("Notes")]),e._v(" "),t("ul",[t("li",[e._v("We recommend using "),t("a",{attrs:{href:"https://frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictionless Table Schema"),t("OutboundLink")],1),e._v(" as format for storing table schema information")])]),e._v(" "),t("h4",{attrs:{id:"schema-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-editor"}},[e._v("#")]),e._v(" Schema editor")]),e._v(" "),t("p",[t("strong",[e._v("Fig 1.2: Schema editor wireframe")])]),e._v(" "),t("img",{attrs:{src:"https://docs.google.com/drawings/d/e/2PACX-1vRD7XUc9iBYjEH11Zqsfrk7tAv688UTqEJMxOg4Bc-9p4Vkrcq8Oghpe5OfimfVoEzjfDRMLeUNIP63/pub?w=695&h=434"}}),e._v(" "),t("ul",[t("li",[t("p",[e._v("can add title as well as description? Maybe we should have both but i often find them duplicative and why do people want a title …? (For display in charting …)")])]),e._v(" "),t("li",[t("p",[e._v("Could pivot the display if lots of columns (e.g. have cols down left). This is traditional approach e.g. in CKAN 2 data dictionary")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/nhb5H7Q.png",alt:""}})])])]),e._v(" "),t("p",[e._v("Advanced:")]),e._v(" "),t("ul",[t("li",[e._v("Displaying validation errors could/should be live as you change types …  (highlight with a hover)")]),e._v(" "),t("li",[e._v("add semantic/taxonomy option (after format) i.e. ability to set rich type")])]),e._v(" "),t("h4",{attrs:{id:"overview-deck"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview-deck"}},[e._v("#")]),e._v(" Overview Deck")]),e._v(" "),t("p",[t("strong",[e._v("Deck")]),e._v(": This deck (Feb 2019) provides an overview of the core flow publishing a single tabular file e.g. CSV and includes a a basic UI mockup illustrating the flow described below.")]),e._v(" "),t("iframe",{attrs:{src:"https://docs.google.com/presentation/d/e/2PACX-1vQD09jo3Mwq-jM32rns_ehyd6GOv7cQ7F9UAK1U_jzO5G4ZgZ8ktG9rwK03-N-0XmQyJx-9kSW7-U4I/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e._v(" "),t("h4",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("For v1: could assume small data (e.g. < 5Mb) so we can load into memory …?")]),e._v(" "),t("p",[t("strong",[e._v("Tabular data only")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Load")]),e._v(" "),t("ol",[t("li",[e._v("File select")]),e._v(" "),t("li",[e._v("Detect type")]),e._v(" "),t("li",[e._v("Preview                  <= start preview here and continue throughout (?)")]),e._v(" "),t("li",[e._v("Choose the data")])])]),e._v(" "),t("li",[t("p",[e._v("Structural check and correction")]),e._v(" "),t("ol",[t("li",[e._v("Structural validation")]),e._v(" "),t("li",[e._v("Error presentation")]),e._v(" "),t("li",[e._v("Mini-ETL to correct errors")])])]),e._v(" "),t("li",[t("p",[e._v("Table metadata")]),e._v(" "),t("ol",[t("li",[e._v("[Review the headers]")]),e._v(" "),t("li",[e._v("Infer data-types and review")]),e._v(" "),t("li",[e._v("[Add constraints]")]),e._v(" "),t("li",[e._v("Data validation (and correction?)")])])]),e._v(" "),t("li",[t("p",[e._v("General metadata (if necessary)")]),e._v(" "),t("ol",[t("li",[e._v("Title, description")]),e._v(" "),t("li",[e._v("License")])])]),e._v(" "),t("li",[t("p",[e._v("Publish (atm: just download metadata (and cleaned data)")])])]),e._v(" "),t("h4",{attrs:{id:"_1-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-load"}},[e._v("#")]),e._v(" 1. Load")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("User drops a file or uploads a file")]),e._v(" "),t("ul",[t("li",[e._v("What about a url? Secondary for now")]),e._v(" "),t("li",[e._v("What about import from other sources e.g. google sheets, dropbox etc? KISS => leave for now")]),e._v(" "),t("li",[e._v("Size restrictions? Let’s assume we’re ok")]),e._v(" "),t("li",[e._v("Error reporting: any errors loading the data file should be reported …")]),e._v(" "),t("li",[e._v("[Future]: in the background we’d be uploading this file to a file store while we do the rest of this process")]),e._v(" "),t("li",[e._v("Tooling options: "),t("a",{attrs:{href:"https://uppy.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://uppy.io/"),t("OutboundLink")],1),e._v(" (note does lots more!), roll out own, "),t("a",{attrs:{href:"http://filepicker.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("filepicker.io"),t("OutboundLink")],1),e._v(" (proprietary => no), …\n"),t("ul",[t("li",[e._v("How do we find something that just does file selection and provides us with the object")])])]),e._v(" "),t("li",[e._v("[Final output] => a raw file object, raw file info (? or we already pass to data.js?)")])])]),e._v(" "),t("li",[t("p",[e._v("Detect type / format (from file name …)")])])]),e._v(" "),t("ul",[t("li",[e._v("Prompt user to confirm the guess (or proceed automatically if guessed)?")]),e._v(" "),t("li",[e._v("Tooling: data.js already does this …")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[e._v("Choose the data (e.g. sheets from excel)")]),e._v(" "),t("ul",[t("li",[e._v("Skip if CSV or if one sheet")]),e._v(" "),t("li",[e._v("Multiple sheets:\n"),t("ul",[t("li",[e._v("Present preview of the sheets ?? (limit to first 10 if a lot of sheets)")]),e._v(" "),t("li",[e._v("Option of choosing all sheets")])])])])])]),e._v(" "),t("h4",{attrs:{id:"_2-structural-check-and-correction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-structural-check-and-correction"}},[e._v("#")]),e._v(" 2. Structural check and correction")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Run a goodtables structure check on the data")]),e._v(" "),t("ul",[t("li",[e._v("=> ability to load a sample of the data (not all of it if big)")]),e._v(" "),t("li",[e._v("=> goodtables js version")])])]),e._v(" "),t("li",[t("p",[e._v("Preview the data and show structural errors")])]),e._v(" "),t("li",[t("p",[e._v("[Optional / v2] Simple ETL in browser to correct this")])])]),e._v(" "),t("h4",{attrs:{id:"_3-table-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-table-metadata"}},[e._v("#")]),e._v(" 3. Table metadata")]),e._v(" "),t("p",[e._v("All done in a tabular like view if possible.")]),e._v(" "),t("p",[e._v("Infer the types and present this in a view that allows review:")]),e._v(" "),t("ol",[t("li",[e._v("[Review the headers]")]),e._v(" "),t("li",[e._v("Infer data-types and review")]),e._v(" "),t("li",[e._v("[Add constraints] - optional and could leave out for now.")])]),e._v(" "),t("p",[e._v("Then we do data validation against types (could do this live whilst they are editing …)")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Data validation (and correction?)")])]),e._v(" "),t("h4",{attrs:{id:"_4-general-metadata-if-necessary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-general-metadata-if-necessary"}},[e._v("#")]),e._v(" 4. General metadata (if necessary)")]),e._v(" "),t("p",[e._v("Add the general metadata.")]),e._v(" "),t("ol",[t("li",[e._v("Title, description")]),e._v(" "),t("li",[e._v("License")])]),e._v(" "),t("h4",{attrs:{id:"_5-publish-atm-just-download-metadata-and-cleaned-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-publish-atm-just-download-metadata-and-cleaned-data"}},[e._v("#")]),e._v(" 5. Publish (atm: just download metadata (and cleaned data)")]),e._v(" "),t("p",[e._v("Show the dataresource.json and datapackage.json for now …")]),e._v(" "),t("h2",{attrs:{id:"ckan-v2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v2"}},[e._v("#")]),e._v(" CKAN v2")]),e._v(" "),t("p",[e._v("In CKAN 2 the data publishing flow is a integral part of core CKAN. See this section of the user guide for a walkhthrough: "),t("a",{attrs:{href:"https://docs.ckan.org/en/2.9/user-guide.html#features-for-publishers",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.ckan.org/en/2.9/user-guide.html#features-for-publishers"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Key points of note:")]),e._v(" "),t("ul",[t("li",[e._v("Classic python webapp approach using a combination of html templates (in Jinja) with processing code in Python backend code using controllers etc.")]),e._v(" "),t("li",[e._v("Customization is done via client extensions using CKAN extensions model")]),e._v(" "),t("li",[e._v("There is also a dedicated extension ckanext-scheming for creating froms from a JSON DSL.")])]),e._v(" "),t("h3",{attrs:{id:"data-dictionary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[e._v("#")]),e._v(" Data Dictionary")]),e._v(" "),t("p",[e._v("Integrated with DataStore extension since CKAN v2.7. Old documentation with visuals at:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://extensions.ckan.org/extension/dictionary/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://extensions.ckan.org/extension/dictionary/"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),t("ul",[t("li",[e._v("Classic webapp is showing its age vs modern javascript based web application development. Nowadays, you’d usually build a UI like this in javascript and e.g. React or VueJS. This has implications for both:\n"),t("ul",[t("li",[e._v("UX: e.g. general lack of responsiveness, client side operations etc.")]),e._v(" "),t("li",[e._v("Development: miss out on modern dev stack")])])]),e._v(" "),t("li",[e._v("No client-side direct to cloud upload etc")]),e._v(" "),t("li",[e._v("Extension model has got complex and cumbersome: the template inheritance model is now somewhat byzantine to navigate. Changing data structures can operate at multiple levels.\n"),t("ul",[t("li",[e._v("The extension approach is “inheritance” based")])])]),e._v(" "),t("li",[e._v("ckanext-scheming uses its own DSL. Today, one would probably use JSON Schema and use a javascript framework.")])]),e._v(" "),t("p",[e._v("In short, building a rich UI like this today would almost certainly be done in pure JS in something like React.")]),e._v(" "),t("h2",{attrs:{id:"ckan-v3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ckan-v3"}},[e._v("#")]),e._v(" CKAN v3")]),e._v(" "),t("p",[e._v("We recommend a pure JS React-based approach. The CKAN dataset and resource editor becomes a React app.")]),e._v(" "),t("p",[e._v("We have developed a “DataPub(lishing)” framework that provides core components and template apps that you can use to get started building out a data publishing UI:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/datopian/datapub/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datopian/datapub/"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/publish/design/"}},[e._v("Design page »")])],1)],1)}),[],!1,null,null,null);"function"==typeof r&&r(o);a.default=o.exports}}]);