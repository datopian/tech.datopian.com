# Giftless - the GIT LFS server

Context:

* Need: direct to (cloud) storage uploading (and download) including from client => you need a service that will issue tokens to upload direct to storage -- what we term a "Storage Access Gateway" =>The Git LFS server protocol actually provides this with its `batch` API. Rather than reinventing the wheel let's use this existing protocol.
* Need: git is already widespread and heavily used by data scientists and data engineers. However, git does not support large files well whilst data work often involves large files. Git LFS is the protocol designed to support large file storage stored outside of git blobstore. If we have our own git lfs server then we can integrate any storage we want with git.

Thus, we arrived at a need for for a standalone Git LFS server (standalone in contrast to the existing git lfs servers provided as an integrated part of existing git hosting providers such as github or gitlab). We also wanted to be able to customize it so it could be backed onto any major cloud storage backend (e.g. S3, GCS, Azure etc). We also had a preference for Python.

We looked around at the existing [Git LFS server implementations][impl] and couldn't find one that looked suit to our needs: there were only a few standalone servers, only one in Python, and those that did exist were usually quite out of date and supported old versions of the LFS protocol (see appendix below for further details).

[impl]: https://github.com/git-lfs/git-lfs/wiki/Implementations

## Summary of Git LFS

https://github.com/git-lfs/git-lfs/blob/master/docs/api/batch.md

* TODO: sequence diagram of git interaction with gif lfs server
* TODO: summary of server API

## Mapping to storage

One important question when using 

Because of the origins of Git LFS with git hosting there is a convention that 



## Authentication and Authorization



## Use with git

https://github.com/git-lfs/git-lfs/blob/master/docs/api/server-discovery.md

Set `.lfsconfig`


## Appendix: Existing Git LFS server implementations

* https://github.com/kzwang/node-git-lfs Node, well developed but now archived and last updated 5y ago. This implementation provided inspiration for giftless.
* https://github.com/mgax/lfs: Python, only speaks legacy v1 API and last updated properly ~2y ago
* https://github.com/meltingice/git-lfs-s3 - Ruby, repo is archived. Last updated 6y ago.
