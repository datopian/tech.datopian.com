---
sidebar: auto
---

# Configs

By default, the app uses a config file named `.env`. We provide a template that you need to rename and edit:

```bash
$ cp env.template .env
```

Description of each variable:

* `API_URL` - URL to the DMS backend API endpoint, e.g., if you're using CKAN Classic, it would be: `ckan-domain.com/api/action/`.
* `NODE_ENV` - this is just a node environment to indicate in which environment you are. If it is unset or `development`, the app will use mocked APIs. If you're working against live endpoint, set this config to, e.g., `staging`.
* `THEME` - name of your theme.
* `PLUGINS` - list of space separated plugins, e.g., if you're using wordpress and dashboard: `wp dashboard`.
* TODO: other configs

## Use custom path to your `.env` file

When starting a server pass `DOTENV_PATH` environment variable to specify path to your `.env`. This is useful if you're running several projects and have a config file for each of them:

```bash
# Running my first project:
$ DOTENV_PATH=.project1.env yarn dev

# Now running my second project:
$ DOTENV_PATH=.project2.env yarn dev
```
