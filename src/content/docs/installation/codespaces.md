---
title: Codespaces Setup
description: Get a Frappe development environment using GitHub Codespaces.
---

You can use GitHub Codespaces to setup a Frappe development environment in just a click! You will only need a free GitHub account to do this.

Here are the steps:

1. Visit [this](https://github.com/ankush/frappe_codespace) repository
2. Click on the `Code` button, and then on `Create codespace on master`:
    ![Create Codespace Screenshot](/create_codespace.png)

3. Wait for the codespace to boot up (behind the scenes containers are being bought up!):

    ![Codespace Booting](/codespace_booting.png)

4. Once the codespace is created, it will open up a code editor (VS Code) right in your browser, with terminal and everything! Wait for a few seconds for the initialization script to complete:

    ![Codespace Init Script](/codespace_init_script.png)

5. After the script is done running, you can check your installation by running `bench --version` and then start the bench by running `bench start`:

    ![Codespace Terminal Screenshot](/codespace_bench_start.png)

    This will start the bench.

6. Visit the ports tab and click on the browser icon next to port `8000` (the web server runs on this port):

    ![Codespace Ports Tab](/codespace_ports.png)

Voila! This will open up the site in a new tab:

![Frappe Site Running through Codespace](/codespace_site_up.png)

### Credentials

* For the site created by default use `Administrator` and `admin` as username and password respectively.
* MariaDB Root Password: `123`

### Opening Codespace Locally

You can also open your codespace in your local VS Code by opening up command palette (`Cmd + Shift + P`) and running:

![Open Codespace in VSCode Desktop command](/codespace_vscode_desktop.png)

## Creating and Using a new site [Codespaces]

Codespace already comes with a site created (`dev.localhost`). If you want to create more sites, make sure you do that using these commands:

```bash
bench new-site <your-site-name> --mariadb-root-password 123 --admin-password admin --no-mariadb-socket

bench --site <your-site-name> set-config developer_mode 1
bench --site <your-site-name> clear-cache
```

Using a site (restart bench after running this):

```bash
bench use <your-site-name>
```

> `bench` runs only in single tenant mode (only 1 site can be served at a time) in codespaces as of now
