# Notebook

Our lab notebook. Our informal thoughts. Our very raw blog.

## Go modules and dependency management (re data package management) 2020-05-16 @rufuspollock

Generally Go does stuff well. They also punted on dependency management initially. First, you just installed a url it was up to you to manage your depedencies. Then there was a period of chaos as several package/dependency managers fought it out (GoDeps etc). Then, ~ 2018 the community came together led by Russ Cox and came up with a very solid proposal which is official as of 2019.

Go's approach to module (package) and dependency management can be an inspiration for Frictionless and Data Packages. Just as we learnt and borrowed a lot from Python and Node so we can learn and borrow from Go.

1. Overview (by Russ Cox the author): https://research.swtch.com/vgo
2. The Principles of Versioning in Go https://research.swtch.com/vgo-principles
3. A Tour of Versioned Go (vgo) https://research.swtch.com/vgo-tour
4. cmd/go: add package version support to Go toolchain https://github.com/golang/go/issues/24301
5. Using Go Modules - https://blog.golang.org/using-go-modules (official introduction on go blog)
6. Publishing Go Modules https://blog.golang.org/publishing-go-modules
7. Main wiki article and overview https://github.com/golang/go/wiki/Modules

### Key principles

> These are the three principles of versioning in Go, the reasons that the design of Go modules deviates from the design of Dep, Cargo, Bundler, and others.
>
> 1. Compatibility. The meaning of a name in a program should not change over time.
> 2. Repeatability. The result of a build of a given version of a package should not change over time. https://research.swtch.com/vgo-principles#repeatability
> 3. Cooperation. To maintain the Go package ecosystem, we must all work together. Tools cannot work around a lack of cooperation.

Summary

* Go used urls for identifiers for packages (including special cases for github) 
  * e.g. `import rsc.io/quote`
  * Brilliant! No more dependency resolution via some central service. Just use the internet.
* Go installed packages via `go get` e.g. `go get rsc.io/quote`. This would install the module into `$GOPATH` at `rsc.io/quote`
  * They did the absolute minimum: grab the files onto your hard disk under `$GOPATH/src`. `import` would then search this (IIUC)
* There was no way originally to get a version but with go modules (go > 1.11) you could do `go get rsc.io/quote@[version]`
* Dependency management is actually complex: satisfying dependency requirements is NP complete. Solve this by ...
  * The Node/Bundler/Cargo/Dep approach is one answer. Allow authors to specify arbitrary constraints on their dependencies. Build a given target by collecting all its dependencies recursively and finding a configuration satisfying all those constraints. => SAT solver => this is complex.
  * Go has a different solution
  * Versioning is central to dependency management => you need to get really clear on versioning. Establish a community rule that you can only break compatibility with major versions ...
  * Put breaking version (e.g. major versions) **into the url** so that you actually have a different package ...

    > For Go modules, we gave this old advice a new name, the import compatibility rule:

    >> If an old package and a new package have the same import path,
    >> the new package must be backwards compatible with the old package.


    ![](https://research.swtch.com/impver@2x.png)

  * Install the minimal version of a package that satisfies the requirements (rather than the maximal version) => this yields repeatability (principle 2)
  * In summary Go differs in that: all versions are explicit (no `<=`, `>=`). Since we can assume that all later versions of a module are backwards compatible (and any breaking change generates a new module with explicit `vX` in name) we can simply cycle through a module and its dependencies and find the highest version that are listed and install that.
* Publishing a module is just pushing to github/gitlab or putting it somewhere on the web -- see https://blog.golang.org/publishing-go-modules
* Tagging versions is done with git tag
* "A module is a collection of related Go packages that are versioned together as a single unit."

Layout on disk in a module (see e.g. https://blog.golang.org/publishing-go-modules). Main file `go.mod` and one extra for storing hashes for verification (it's not a lock file)

```
$ cat go.mod
module example.com/hello

go 1.12

require rsc.io/quote/v3 v3.1.0

$ cat go.sum
golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c h1:qgOY6WgZOaTkIIMiVjBQcw93ERBE4m30iBm00nkL0i8=
golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c/go.mod h1:NqM8EUOU14njkJ3fqMW+pc6Ldnwhi/IjpwHt7yyuwOQ=
rsc.io/quote/v3 v3.1.0 h1:9JKUTTIUgS6kzR9mK1YuGKv6Nl+DijDNIc0ghT58FaY=
rsc.io/quote/v3 v3.1.0/go.mod h1:yEA65RcK8LyAZtP9Kv3t0HmxON59tX3rD+tICJqUlj0=
rsc.io/sampler v1.3.0 h1:7uVkIFmeBqHfdjD+gZwtXXI+RODJ2Wc4O7MPEh/QiW4=
rsc.io/sampler v1.3.0/go.mod h1:T1hPZKmBbMNahiBKFy5HrXp6adAjACjK9JXDnKaTXpA=
```


### Asides

#### Vendoring is an incomplete solution to package versioning problem

> More fundamentally, vendoring is an incomplete solution to the package versioning problem. It only provides reproducible builds. It does nothing to help understand package versions and decide which version of a package to use. Package managers like glide and dep add the concept of versioning onto Go builds implicitly, without direct toolchain support, by setting up the vendor directory a certain way. As a result, the many tools in the Go ecosystem cannot be made properly aware of versions. It's clear that Go needs direct toolchain support for package versions. https://research.swtch.com/vgo-intro

## 2020-05-16 @rufuspollock

Ruthlessly retain compatibility after v1 - inspiration from Go for Frictionless

> It is intended that programs written to the Go 1 specification will continue to compile and run correctly, unchanged, over the lifetime of that specification. Go programs that work today should continue to work even as future “point” releases of Go 1 arise (Go 1.1, Go 1.2, etc.).
>
> — https://golang.org/doc/go1compat

And they go further -- not just Go but also Go packages:

> Packages intended for public use should try to maintain backwards compatibility as they evolve. The Go 1 compatibility guidelines are a good reference here: don’t remove exported names, encourage tagged composite literals, and so on. If different functionality is required, add a new name instead of changing an old one. If a complete break is required, create a new package with a new import path.
>
> The Go FAQ has since Go 1.2 in November 2013

+frictionless

## 2020-05-15 @rufuspollock

`Project` should be the primary object in a DataHub/Data Portal -- not Dataset.

Why? Because actually this is more than a Dataset. For example, it includes issues or workflows. A project is a good name for this that is both generic and specific.

cf Git-hub e.g. Gitlab (and Github). Gitlab came later and did this right: it's primary object is a Project which hasA Repository. Github still insits on calling them repositories (see primary menu item which is "Create a new repository"). This is weird, a github "repository" isn't actually a github repository: it has issues, stats, workflows and even a discussion board now. Calling it a project is the accurate description and the repository label is a historical artifact when that was all it was. I sometimes create "repos" on Github just to have an issue tracker. Gitlab understands this and actually allows me to have projects without any associated repository.

TODO: take a screenshot to illustrate Gitlab and Github.

+flashes of insight. +datahub +data portal. +domain model.

## 2020-04-23 @rufuspollock

4 Stores of a DataHub

:::tip
Naming is one of the most important things -- and hardest!
:::

* MetaStore [service]: API (and store) of the metadata for datasets
* HubStore [service]: API for registry of datasets (+ potentially organizations and ownership relationships to datasets)
* BlobStore [service]: API for blobs of data
* StructuredStore [service]: API for structured data

Origins:

* Started using MetaStore in DataHub.io back in 2016
* Not used in CKAN v2
* Conceptually CKAN originally was MetaStore and HubStore.

In CKAN v2:

* MetaStore and HubStore (no explicit name) => main Postgres DB
* StructuredStore (called DataStore) => another separate Postgres DB
* BlobStore (called FileStore) => local disk (or cloud with an extension)

In CKAN v3: propose to separate these explicitly ...

## 2020-04-23 @rufuspollock

Data Portal vs DataHub vs Data OS

TODO: Is a Data Portal a DataHub? Is a DataHub a DataOS? If not, what are the differences?

+todo
