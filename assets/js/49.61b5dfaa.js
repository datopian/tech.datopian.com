(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{444:function(e,t,a){"use strict";a.r(t);var r=a(25),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"developer-experience"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-experience"}},[e._v("#")]),e._v(" Developer Experience")]),e._v(" "),a("p",[e._v("From the "),a("a",{attrs:{href:"/dx/rfc"}},[e._v("RFC")]),e._v(":")]),e._v(" "),a("blockquote",[a("p",[e._v("Developer Experience (DX) is a set of practices covered around cloud native environments that give organizations and teams unified, cross-functional representation, shared accountability from development, operations, the business and everybody in between.")]),e._v(" "),a("p",[e._v("An operating model for DX provides a set of best practices that unify deployment, management and monitoring for containerized clusters and applications. A path towards a DX for managing applications; where end-to-end CICD pipelines and Git workflows are applied to both operations, and development.")])]),e._v(" "),a("p",[e._v("In summary, DX is how we call the newly proposed best practices for developing and deploying software at Datopian. In Google Cloud, we have a whole new project called “datopian-dx,” with a new Kubernetes cluster that we hope to replace the current one.")]),e._v(" "),a("h2",{attrs:{id:"dx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dx"}},[e._v("#")]),e._v(" DX")]),e._v(" "),a("h3",{attrs:{id:"deploy-a-new-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-new-application"}},[e._v("#")]),e._v(" Deploy a New Application")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"./deploy"}},[e._v("Deploy »")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"deploy-with-google-cloud-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-with-google-cloud-builds"}},[e._v("#")]),e._v(" Deploy with Google Cloud Builds")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"./deploy-gitops-style"}},[e._v("Deploy GitOps Style;")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"run-a-data-migration-between-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-data-migration-between-environments"}},[e._v("#")]),e._v(" Run A Data Migration Between Environments")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"./data-migration"}},[e._v("Data Migration »")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"setting-up-monitoring-and-alerts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-monitoring-and-alerts"}},[e._v("#")]),e._v(" Setting Up Monitoring and Alerts")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"./monitoring"}},[e._v("Monitoring and Alerts »")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"using-logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-logging"}},[e._v("#")]),e._v(" Using Logging")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"./logging"}},[e._v("Using Logging »")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"what-s-the-purpose-of-terraform-in-our-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-purpose-of-terraform-in-our-stack"}},[e._v("#")]),e._v(" What’s The Purpose Of Terraform In Our Stack?")]),e._v(" "),a("p",[a("em",[e._v("or Why You Should Not Manually Change Terraform-Managed Resources Using Google Cloud Console (Or Other Ui For Different Services)?")])]),e._v(" "),a("p",[e._v("Terraform, is our stack, stands for IaC, “Infrastructure as Code.” In laypeople terms, we tell what third-party services we need to be configured and with what attributes e.g.,  I want a CloudAMQP instance, with one single node, the id “nationalgrid_dev,” with the plan “tiger,” using RabbitMQ version “3.8.2.” Once we declare this in Terraform’s language, Terraform will use CloudAMQP’s API to give us this instance in the expected final state and save it, internally, in a JSON file literally called “terraform state.”")]),e._v(" "),a("p",[e._v("Often, changing the terraform declarations will not trigger only one single API call, but dozens, with complicated dependencies and with distinct timeouts. For instance, I could declare the Google Cloud’s Kubernetes cluster in the same Terraform project as the CloudAMQP instance, and say that CloudAMQP should only allow requests from the cluster’s API. Something like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('resource "google_cloud_kubernetes_engine" "main_cluster" {\n  # ...\n}\n\nresource "cloudamqp_instance" "nationalgrid_dev" {\n  # ...\n  ip_filter = [google_cloud_kubernetes_engine.main_cluster.ip]\n}\n')])])]),a("p",[e._v("In this case, Terraform would calculate a dependence graph and detect that CloudAMQP’s "),a("code",[e._v("ip_filter")]),e._v(" attribute depends on "),a("code",[e._v("google_cloud_kubernetes_engine.main_cluster")]),e._v(", so it will first create the cluster, and then trigger an API call to change the ip_filter in CloudAMQP (considering that CloudAMQP’s instance was already created in the past). Terraform does that by comparing its “terraform state” with the current live state according to GET calls to CloudAMQP’s API.")]),e._v(" "),a("p",[e._v("In a recent incident, when changing other things in the Terraform project, I asked Terraform to calculate the diff between current and intended states (what’s currently live, and what will be changed to reach the new declarations I added). Contratry to my expectations, it was not showing only what I wanted, but also said it needed to change CloudAMQP’s instance back to the free plan (see image). Assuming that other people made this change outside of Terraform, I was able to prevent Terraform from applying its “diff,” fixing the declaration to expect the change you’ve made outside, and asking Terraform to calculate the diff again (this time, without planning to downgrade CloudAMQP).")]),e._v(" "),a("p",[e._v("I was only able to prevent this unintended downgrade with ease because 1. I was aware that we were upgrading CloudAMQP, so Terraform asking to go to the free plan didn’t make much sense to me; 2. I paid special attention to the diff before accepting Terraform to go forward; and 3. The diff was simple enough that both CloudAMQP’s intergration with Terraform and Terraform itself were able to recover from the surprising diff. If we weren’t lucky, Terraform would just break and say that its cached state (how all the services looked the last time we used Terraform) does not represent the current reality and it needs manual recover. This would prevent me and others from continuing to use Terraform for other applications until we manually checked all the services we have declared, deleted them, and importing them again, with the current live state. As the Terraform state is a JSON file with 1,000’s of lines, it’s not something we want to manually fix if we have the chance.")]),e._v(" "),a("h3",{attrs:{id:"how-does-https-work-in-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-https-work-in-the-cluster"}},[e._v("#")]),e._v(" How Does HTTPS Work In The Cluster?")]),e._v(" "),a("p",[a("em",[e._v("or How Does The Certificate Manager Uses The Ingress (Nginx Or Traefik) To Communicate With Let’s Encrypt To Generate TLS Certificates And Maintain Them Always Up-To-Date.")])]),e._v(" "),a("p",[e._v("Please watch this series of videos:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://youtu.be/T4Df5_cojAs",target:"_blank",rel:"noopener noreferrer"}},[e._v("How does HTTPS work? What’s a CA? What’s a self-signed Certificate?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/7K0gAYmWWho",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a Kubernetes TLS Ingress from scratch in Minikube"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/JJTJfl-V_UM",target:"_blank",rel:"noopener noreferrer"}},[e._v("Automatically Provision TLS Certificates in K8s with cert-manager"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/etC5d0vpLZE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use cert-manager with Let’s Encrypt® Certificates Tutorial: Automatic Browser-Trusted HTTPS"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" Cluster")]),e._v(" "),a("h3",{attrs:{id:"how-do-it-create-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-it-create-the-cluster"}},[e._v("#")]),e._v(" How Do It Create The Cluster")]),e._v(" "),a("p",[e._v("It’s under "),a("RouterLink",{attrs:{to:"/dx/cluster/#create-the-cluster"}},[e._v("How to Use the Developer Experience (DX) Setup")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"install-argo-cd-in-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-argo-cd-in-the-cluster"}},[e._v("#")]),e._v(" Install Argo CD in the Cluster")]),e._v(" "),a("p",[e._v("It’s under "),a("RouterLink",{attrs:{to:"/dx/cluster/#install-argo-cd-in-the-cluster"}},[e._v("How to Use the Developer Experience (DX) Setup")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);