---
title: API Scripts
description: Usage and examples of API type server scripts
---

## Creating API Scripts

<video style="width: 100%" src="/create-api-script.mp4" controls title="Title"></video>

:::note[API Path/Route]
If you set the **API Method** field to "my-method", the API will be accessible at:

`<your-site-url>/api/method/my-method`
:::

## Configurations

1. **Allow Guest**: When checked, the API will be publicly accessible **without any authentication**.

2. **Enable Rate Limit**: Enable to apply rate limits to this particular API. For example: *"only allow 10 requests per minute"*

## Script Examples

### 1. Simple response

```py
frappe.response['message'] = 'pong'

## response: 
# {
#  "message": "pong"
# }
```

### 2. Using data from the database

```py
expenses = frappe.db.get_all('Expense', pluck='amount') # e.g. [300, 200, 1000]

total_amount = sum(expenses)
frappe.response['total_expenses'] = total_amount

## response: 
# {
#  "total_expenses": 1500
# }
```

### 3. Using data that came with the request

The request data (JSON and Form) is available in `frappe.form_dict` as a dictionary of key-value pairs. The below simple API receives `first_name` and `last_name` and returns the `full_name` after joining the two.

```py
first_name = frappe.form_dict.first_name
last_name = frappe.form_dict.last_name

frappe.response['full_name'] = f'{first_name} {last_name}'

## response: 
# {
#   "full_name": "John Doe"
# }
```

### 4. Updating data in the database

Here is an example of simple API to increment a value in our database:

```py
article_name = frappe.form_dict.article_name
article_doc = frappe.get_doc('Article', article_name)

article_doc.num_likes = article_doc.num_likes + 1
article_doc.save()

frappe.response['message'] = 'success'

## response: 
# {
#  "message": "ok"
# }
```
