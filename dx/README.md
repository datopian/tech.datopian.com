# Developer Experience

From the [RFC](/dx/rfc):

> Developer Experience (DX) is a set of practices covered around cloud native environments that give organizations and teams unified, cross-functional representation, shared accountability from development, operations, the business and everybody in between.
> 
> An operating model for DX provides a set of best practices that unify deployment, management and monitoring for containerized clusters and applications. A path towards a DX for managing applications; where end-to-end CICD pipelines and Git workflows are applied to both operations, and development.

In summary, DX is how we call the newly proposed best practices for developing and deploying software at Datopian. In Google Cloud, we have a whole new project called "datopian-dx," with a new Kubernetes cluster that we hope to replace the current one.

## DX

### Deploy a New Application

See [Deploy &raquo;](./deploy).

### Run A Data Migration Between Environments

See [Data Migration &raquo;](./data-migration).

### Setting Up Monitoring and Alerts

See [Monitoring and Alerts &raquo;](./monitoring).

### Using Logging

See [Using Logging &raquo;](./logging).

### What's The Purpose Of Terraform In Our Stack?

_or Why You Should Not Manually Change Terraform-Managed Resources Using Google Cloud Console (Or Other Ui For Different Services)?_

Terraform, is our stack, stands for IaC, "Infrastructure as Code." In laypeople terms, we tell what third-party services we need to be configured and with what attributes e.g.,  I want a CloudAMQP instance, with one single node, the id "nationalgrid_dev," with the plan "tiger," using RabbitMQ version "3.8.2." Once we declare this in Terraform's language, Terraform will use CloudAMQP's API to give us this instance in the expected final state and save it, internally, in a JSON file literally called "terraform state."

Often, changing the terraform declarations will not trigger only one single API call, but dozens, with complicated dependencies and with distinct timeouts. For instance, I could declare the Google Cloud's Kubernetes cluster in the same Terraform project as the CloudAMQP instance, and say that CloudAMQP should only allow requests from the cluster's API. Something like:

```
resource "google_cloud_kubernetes_engine" "main_cluster" {
  # ...
}

resource "cloudamqp_instance" "nationalgrid_dev" {
  # ...
  ip_filter = [google_cloud_kubernetes_engine.main_cluster.ip]
}
```

In this case, Terraform would calculate a dependence graph and detect that CloudAMQP's `ip_filter` attribute depends on `google_cloud_kubernetes_engine.main_cluster`, so it will first create the cluster, and then trigger an API call to change the ip_filter in CloudAMQP (considering that CloudAMQP's instance was already created in the past). Terraform does that by comparing its "terraform state" with the current live state according to GET calls to CloudAMQP's API.

In a recent incident, when changing other things in the Terraform project, I asked Terraform to calculate the diff between current and intended states (what's currently live, and what will be changed to reach the new declarations I added). Contratry to my expectations, it was not showing only what I wanted, but also said it needed to change CloudAMQP's instance back to the free plan (see image). Assuming that other people made this change outside of Terraform, I was able to prevent Terraform from applying its "diff," fixing the declaration to expect the change you've made outside, and asking Terraform to calculate the diff again (this time, without planning to downgrade CloudAMQP).

I was only able to prevent this unintended downgrade with ease because 1. I was aware that we were upgrading CloudAMQP, so Terraform asking to go to the free plan didn't make much sense to me; 2. I paid special attention to the diff before accepting Terraform to go forward; and 3. The diff was simple enough that both CloudAMQP's intergration with Terraform and Terraform itself were able to recover from the surprising diff. If we weren't lucky, Terraform would just break and say that its cached state (how all the services looked the last time we used Terraform) does not represent the current reality and it needs manual recover. This would prevent me and others from continuing to use Terraform for other applications until we manually checked all the services we have declared, deleted them, and importing them again, with the current live state. As the Terraform state is a JSON file with 1,000's of lines, it's not something we want to manually fix if we have the chance.

### How Does HTTPS Work In The Cluster?

_or How Does The Certificate Manager Uses The Ingress (Nginx Or Traefik) To Communicate With Let's Encrypt To Generate TLS Certificates And Maintain Them Always Up-To-Date._

Please watch this series of videos:

1. [How does HTTPS work? What's a CA? What's a self-signed Certificate?](https://youtu.be/T4Df5_cojAs)
2. [Create a Kubernetes TLS Ingress from scratch in Minikube](https://youtu.be/7K0gAYmWWho)
3. [Automatically Provision TLS Certificates in K8s with cert-manager](https://youtu.be/JJTJfl-V_UM)
4. [Use cert-manager with Let's Encrypt® Certificates Tutorial: Automatic Browser-Trusted HTTPS](https://youtu.be/etC5d0vpLZE)

## Cluster

### How Do It Create The Cluster

It's under [How to Use the Developer Experience (DX) Setup](/dx/cluster/#create-the-cluster).

### Install Argo CD in the Cluster

It's under [How to Use the Developer Experience (DX) Setup](/dx/cluster/#install-argo-cd-in-the-cluster).
