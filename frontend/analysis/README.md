## SCQH for Why Decoupled

### Situation

- Several customers want a CMS and a DMS – they want a unified frontend
  - A data catalog = showcase, search, collections
  - Blog (and maybe some other pages)
- CKAN CMS functionality is pretty poor (ckanext-pages …)
  - UI editing is poor
  - Render is so-so
- To customize CKAN frontend you need to  
  - Install CKAN and run a python app
  - You are stuck in bootstrap land ... (at least you default way …)
  - Have to override many templates to make ~small changes, due to way template inheritance works etc
  - “Add complexity to make simple changes”
  - Templates often need to be updated for point version updates of CKAN

### Complications

- Getting a CMS in CKAN is clunky and painful
  - Do it all in CKAN: poor edit UX, render is so-so
  - Import from e.g. wordpress: render is so-so and no stable plugin for this  
  - Two separate sites nginx’d together: two sites to theme …  
  - Drupal / Wordpress in front: they need to duplicate …  
- Frontend devs have to install and run CKAN which rarely goes smoothly and which makes a relatively simply job a lot more complex
    - CKAN theming is expensive
- Maintainability of themes is painful - you have to keep upgrading for minor changes
- Coupling leads to more coupling: lots of functionality goes in extensions because you need to get into the frontend which shoves more stuff into CKAN (highly coupled vs loosely coupled …)
    - =&gt; impact on innovation
    - =&gt; impact on customer satisfaction
- CKAN looks dated …    

### Questions

Two different questions (though solutions may be related) …

- How do we support CMS and DMS together in one data portal
- How do we allow for easier, more fun, more sustainable theming of CKAN …  (??)


### Hypothesis

Have a decoupled Renderer Frontend built in frontend technologies (HTML+JS) that pulls data/content from DMS and CMS backends [and a data/content API …?] such that …

- We can support all of CKAN’s current render frontend
- Frontend developers can build their own frontends in whatever langauge quickly and easily
- There is standard HTML+JS “CKAN NG” frontend that people can quickly customize and adapt such that Frontend Devs / Designers users and Datopian can quickly build and adjust themes ..  
    - Unless a CKAN upgrade or plugin alters a “core” API in CKAN there is no need to adjust the theme …  
