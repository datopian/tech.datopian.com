---
sidebar: auto
---

# Introduction
A CKAN extension is a Python package that modifies or extends CKAN. Each extension contains one or more plugins that must be added to your CKAN config file to activate the extension’s features.

# Creating and Installing extensions
1. Boot up your docker compose
```
docker-compose -f docker-compose.dev.yml up
```


2. To create an extension template using this docker composition execute:

```
docker-compose -f docker-compose.dev.yml exec ckan-dev /bin/bash -c "paster --plugin=ckan create -t ckanext ckanext-example_theme -o /srv/app/src_extensions"
```

This command will create an extension template in your local `./src` folder that is mounted inside the containers in the `/srv/app/src_extension` directory. Any extension cloned on the `src` folder will be installed in the CKAN container when booting up Docker Compose (`docker-compose up`). This includes installing any requirements listed in a `requirements.txt` (or `pip-requirements.txt`) file and running `python setup.py develop`.


3. Add the plugin to the `CKAN__PLUGINS` setting in your `.env` file.

```
CKAN__PLUGINS = stats text_view recline_view example_theme
```


4. Restart your docker-compose:

```
# Shut down your instance with crtl+c and then run it again with:
docker-compose -f docker-compose.dev.yml up
```
::: tip
CKAN will be started running on the paster development server with the `--reload` option to watch changes in the extension files.
:::

You should see the following output in the console:

```
...
ckan-dev_1    | Installed /srv/app/src_extensions/ckanext-example_theme
...
```

# Edit the extension

Let's edit a template to change the way CKAN is displayed to the user!

1. First you will need write permissions to the extension folder since it was created by the user running docker. Replace `your_username` and execute the following command:

```
sudo chown -R <your_username>:<your_username> src/ckanext-example_theme
```

2. To customize pages, our plugin needs to register and add its own custom template directory containing template files that override the default ones. The `ckanext-example_theme/ckanext/example_theme/plugin.py` file should already have registered the template directories:

```python
import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


class Example_ThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'example_theme')
```

3. Create the `ckanext-example_theme/ckanext/example_theme/templates/home` directory and create an empty `index.html` file inside the home directory:

```
ckanext-example_theme/
  ckanext/
    example_theme/
      templates/
        home/
          index.html  <-- An empty file.
```

::: warning
Even when the server is being run with the `--reload` paramenter, if you’ve added a new file or directory, you need to restart the server manually.
:::

4. Restart the instance and navigate to your browser and you should see an empty page because we’ve replaced the template file for the front page with an empty file.

5. Edit the `index.html` to add some custom code:

```
<h1>My new Home Page!</h1>
```

6. Go back to the browser and refresh the page. You should see the new changes without the need to restart the instance!

Now you are ready to start developing CKAN Extensions!
