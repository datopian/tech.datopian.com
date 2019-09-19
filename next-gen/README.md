# Next Gen

“Next Gen” (NG) is our name for the evolution of CKAN from its current state as “CKAN Classic”.

Next Gen has a decoupled, microservice architecture in contrast to CKAN Classic's monolithic architecture. It is also built from the ground up on the Frictionless Data principles and specifications which provide a simple, well-defined and widely adopted set of core interfaces and tooling for managing data.

## Classic to Next Gen

CKAN classic: monolithic architecture -- everything is one big python application. Extension is done at code level and "compiled in" at compile/run-time (i.e. you end up with one bigger docker file).

CKAN Next Gen: decoupled, service-oriented -- services connected by network calls. Extension is done by adding new services,

<mermaid>
graph LR
subgraph "CKAN Classic"
  plugins
end
subgraph "CKAN Next Gen"
  microservices
end
plugins --> microservices
</mermaid>

You can read more about monolithic vs microservice architectures in the Appendix below.


## Next Gen lays the foundation for the future and brings major immediate benefits

This new architecture and approach is important in several ways.

### Microservices are big for Scalability, Reliability, Extensibility and Flexibility

First, decoupled microservices have become *the* way to design and deploy (web) applications (after first being pioneered by the likes of Amazon in the early 2000s). In particular, in the last five-to-ten years have brought microservice "for the masses" where relevant tooling and technology has been standardized, open-sourced and widely deployed -- e.g. not only containerization tech such as Docker, Kubernetes etc but even programming languages like (server-side) Javascript and Golang.

By adopting a microservice approach CKAN can reap the the benefits of what is becoming a mature and standard way to design and build (web) applications. This includes the immediate advantages of being aligned with the technical paradigm such as tooling and developer familiarity. But it also includes the major benefits of the microservice approach in general:

1. **Scalability**: dramatically easier and cheaper to scale up -- and down -- both in size *and* complexity. Size-wise this is because you can replicate eplicate individual services rather than the whole application. Complexity-wise this is because monolithic architectures tend to become "big" where service-oriented encourages smaller lightweight components. This means you can have a much smaller core.
    * not so big or difficult to install
    * use what you need (smaller core)
2. **Reliability**: easier (and cheaper) to build highly reliable, high availability solutions (because you can replicate).
3. **Extensibility**: much easier to create and maintain extensions because they are more decoupled with cleaner interfaces.
4. **Flexibility** aka "Bring your own tech": services can be written in any language so, for example, you can write your frontend in javascript and your backend in Python. In a monolithic architecture all parts must be written in the same language because everything is compiled together. This flexibility makes it easier to use the best tool for the job. It also makes it much easier for teams to collaborate and cooperate and fewer bottlenecks in development.

ASIDE: decoupled microservices reflect the "unix" way of building networked applications. As with the "unix way" in general, whilst this approach better -- and simpler -- in the long-run, in the short-run it often demands a substantial amount of foundational work (those Unix authors were legends!) and is, at least initially, more resource demanding and more complex infrastructurally and so more appropriate for high end applications (not every one was Amazon!). This is why it took a while to get adoption and it is only really now that we have robust, easy to use microservices for the "masses".

In summary, the Next Gen approach provides an essential foundation for the continuing growth and evolution of CKAN as a platform for building world-class data portal and data management solutions.

### Next Gen Components Work with CKAN Classic, Evolution not Revolution

*Gradual evolution from CKAN classic (keep what is working, keep your investments, incremental change)*


Next Gen components are specifically designed to work with CKAN "Classic" in its current form. This means existing CKAN users can immediately benefit from Next Gen components and features whilst retaining the value of their existing investment. New (or existing) CKAN-based solutions can adopt a "hybrid" approach using components from both Classic and Next Gen. It also means that the owner of a CKAN-based solution can incrementally evolve from "Classic" to "Next Gen" by replacing one component one at a time, gaining new functionality without sacrificing existing work.

ASIDE: we're fortunate that CKAN Classic itself was ahead of its time in its level of "service-orientation". From the start, it had a very rich and robust API and it has continued to develop this with almost almost all functionality exposed via the API. It is this rich API and well factored design that makes it relatively straightforward to evolve CKAN in its current "Classic" form towards Next Gen.

### New Features, Improved Existing Functionality ...

In addition to its architecture, Next Gen provides a rapidly growing set of improvements and extensions of existing CKAN functionality. For example:

* Theming and Frontend Customization: theming and customizing CKAN's frontend has got radically easier and quicker.
* DMS + CMS unified: integrate the full power of a modern CMS into your data portal and have one unified interface for data and content.
* Data Explorer: the existing CKAN data preview/explorer has been completely rewritten in modern React-based Javascript (ReclineJS is now 7y old!)
* Dashboards: build rich data-driven dashboards and integrate
* Harvesting: simpler, more powerful harvesting built on modern ETL

And each of these features is easily deployed into an existing CKAN solution!


## Appendix: Monolithic vs Microservice architecture

Monolithic: Libraries or modules communicate via function calls (inside one big application)

Microservices: Services communicate over a network

https://martinfowler.com/articles/microservices.html

> Microservice architectures will use libraries, but their primary way of componentizing their own software is by breaking down into services. We define libraries as components that are linked into a program and called using in-memory function calls, while services are out-of-process components who communicate with a mechanism such as a web service request, or remote procedure call.


### Monolithic

<mermaid>
graph TD
subgraph "Monolithic - all inside"
  a
  b
  c
end
a --in-memory function all--> b
a --in-memory function all--> c
</mermaid>

### Microservice

<mermaid>
graph TD
subgraph "A Container"
  a
end
subgraph "B Container"
  b
end
subgraph "C Container"
  c
end
a -.network call.-> b
a -.network call.-> c
</mermaid>

