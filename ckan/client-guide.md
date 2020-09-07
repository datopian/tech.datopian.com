# CKAN Client Guide

Guide to interacting with [CKAN](/ckan) for power users such as data scientists, data engineers and data wranglers.

This guide is about adding and managing data in CKAN programmatically and it assumes:

* You are familiar with key concepts like metadata, data etc.
* You are working programmatically e.g. in one of Python, R, JavaScript, etc.

## Quick start

This guide currently assumes you are using Python. R and Javascript examples are coming soon.

### Prerequisites

[Install the SDK](https://github.com/datopian/ckan3-py-sdk#install) for your language and configure it.

Visit the repo and follow the instructions below. 

Create a client:

```python
from ckanclient import Client

endpoint = 'https://my-ckan.com/'
token = 'xxxx'              # your CKAN API key
org_name = 'my-org'         # default organization on CKAN to add datasets to
client = Client(endpoint, token, org_name)
```

We will also use the Frictionless library in what follows for abstracting loading files and datasets from disk:

```python
import frictionless as f11s
```

### Upload a resource (file) (and implicitly create a new Dataset)

```python
# loads a resource from a path
resource = f11s.load(resource_file_path)
dataset_name = 'sample-dataset'
dataset = f11s.Dataset({'name': dataset_name})
dataset.add_resource(resource)
client.push(resource)
```

### Create a new empty Dataset with metadata

```python
dataset = f11s.Dataset({
    'name': dataset_name,
    'metadata': {'maintainer_email': 'sample@datopian.com'}
})
client.push(dataset)
```

### Adding a resource to an existing Dataset

```python
resource = f11s.load('sample.csv')

# this will upload the file and add the resource to the dataset
# NB: resource metadata e.g. name, title etc will be auto-inferred from the file
client.push_resource(
    resource,
    dataset='dataset-name',
    append=True
)
```

### Edit a Dataset's metadata

> WARNING: Not implemented yet.

```python
dataset = client.get_dataset(dataset_name='sample_dataset')
client.update_metadata(
    dataset,
    metadata: {'maintainer_email': 'sample@datopian.com'}
)
```