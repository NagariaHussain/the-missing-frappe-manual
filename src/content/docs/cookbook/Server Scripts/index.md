---
title: Common Tasks
description: Common examples for Document Event, API, and Scheduled Server Scripts.
---

The below examples work in System Console, Server Scripts and Script Reports.

### 1. Making HTTP Requests / Calling external APIs

```py
# GET request
ping_endpoint = "https://frappe.io/api/method/ping"
response = frappe.make_get_request(ping_endpoint)

print(response) # {'message': 'pong'}
```

The above script makes a GET HTTP request to some other Frappe site.

### 2. Making POST HTTP Request with API Authentication Headers

```py
# POST request
todo_endpoint = "https://frappe.io/api/resource/ToDo"
api_token = "<api-key>:<api-secret>"

headers = {"Authorization": f"token {api_token}"}

data = {"description": "Build something with Hussain"}
response = frappe.make_post_request(todo_endpoint, data=data, headers=headers)

print(response) # created ToDo doc
```
