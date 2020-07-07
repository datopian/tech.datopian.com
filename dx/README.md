# Developer Experience

From the [RFC](/dx/rfc):

> Developer Experience (DX) is a set of practices covered around cloud native environments that give organizations and teams unified, cross-functional representation, shared accountability from development, operations, the business and everybody in between.
> 
> An operating model for DX provides a set of best practices that unify deployment, management and monitoring for containerized clusters and applications. A path towards a DX for managing applications; where end-to-end CICD pipelines and Git workflows are applied to both operations, and development.

In summary, DX is how we call the newly proposed best practices for developing and deploying software at Datopian. In Google Cloud, we have a whole new project called "datopian-dx," with a new Kubernetes cluster that we hope to replace the current one.

## FAQ

### How Do I Deploy A New Project?

Given that your project will be deployed to Kubernetes, you should prepare a Docker image for each service. When possible, we use Terraform for provisioning infrastructure managed by third parties (e.g., prefer Cloud SQL rather than running a PostgreSQL instance inside Kubernetes).

At this moment:

* [ ] List the services you want to deploy
  * CKAN
  * Solr
  * PostgreSQL
* [ ] Fork experiments/dx-helm-national-grid and use it as a template
* [ ] Delete unused files in /templates
* [ ] Get access to the Google Cloud project datopian-dx (ask Irio or Irakli)
* [ ] Connect kubectl with your Google Cloud credentials
* [ ] Create Argo CD project (either via UI or CLI)
  * [ ] Install argocd cli locally
  * [ ] Run `argocd proj create [project name]` pointing to remote argo cd
* [ ] Push dx-helm-national-grid fork to Gitlab/GitHub
* [ ] Create Argo CD application inside this new project (pointing to the Git repo)

### How Do I Manage Multiple Environments For The Same Application?

You should follow the example given in dx-helm-national-grid, where we have an Argo CD "project" called National Grid with multiple "applications," one for each environment.

### How Do I Debug

You can use Argo CD's UI, or `kubectl`. In Argo CD, you can click in a Pod, select a container, and see the logs in real time. With `kubectl`, you can run the following:

```sh
kubectl get pods --all-namespaces
kubectl logs [pod name]
kubectl logs [pod name] --previous
```

`kubectl logs` shows the logs in realtime. The `--previous` flag is useful for when the container keeps restarting (usually due to a failed health check).

### How Do I Monitor

For now, please see the item related to debugging. At Datopian, we also use [StatusCake](https://www.statuscake.com/) for monitoring uptime.

### How Do I Rollback

For rolling back changes made to either Helm Chart or application code, you should write and push a new commit. Due to implementation details of Kubernetes, you might have to manually restart services (you can do that via Argo CD). For instance, if your application reads environment variables only on startup, it won't matter if Kubernetes replaced them while it's running. You should kill the container and see Kubernetes recreating it automatically.
