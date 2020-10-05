# CKAN Client Guide

Guide to interacting with [CKAN](/ckan) for power users such as data scientists, data engineers and data wranglers.

This guide is about adding and managing data in CKAN programmatically and it assumes:

* You are familiar with key concepts like metadata, data etc.
* You are working programmatically e.g. in one of Python, R, JavaScript, etc.

## Frictionless Formats

Clients use [Frictionless formats][f11s] by default for describing dataset and resource objects passed to client methods. Internally, we then use the a CKAN<=>Frictionless Mapper ([js][c2f], [python][c2fpy] to convert to CKAN formats before calling the API. Thus, you can use Frictionless Formats by default with the client. (As CKAN moves to Frictionless to default this will gradually become unnecessary).

[f11s]: https://specs.frictionlessdata.io/
[c2f]: https://github.com/datopian/frictionless-ckan-mapper-js

## Quick start

This guide currently uses a Python idiom by default (e.g. lower case, underscore). You can adapt to R and Javascript as needed and we provide alternative examples where possible.

### Prerequisites

Install the SDK for your language and configure it.

* Python: https://github.com/datopian/ckan3-py-sdk#install) 
* Javascript: ...
* R: coming soon

### Create a client

```python
from ckanclient import Client

endpoint = 'https://my-ckan.com/'
token = 'xxxx'              # your CKAN API key
org_name = 'my-org'         # default organization on CKAN to add datasets to
client = Client(endpoint, token, org_name)
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

For details of metadata see the metadata reference below ...

## API - Porcelain

### `retrieve`

### `push`

## API - Plumbing

### Action API

### Storage


## Metadata reference

:::tip NOTE
Your site may have custom metadata that differs from the default set below.
:::

## Generating templates

TODO

## Design Principles

The client SHOULD use Frictionless formats by default for describing dataset and resource objects passed to client methods.

In addition, where more than metadata is needed (e.g. we need to access the data stream of get the schema) we expect the Dataset and Resource object to follow the Frictionless Data Lib pattern https://github.com/frictionlessdata/project/blob/master/rfcs/0004-frictionless-data-lib-pattern.md
