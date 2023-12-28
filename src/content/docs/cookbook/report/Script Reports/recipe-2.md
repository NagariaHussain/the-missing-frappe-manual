---
title: Action Buttons in Column
description: Example showing how to add a custom button as well as a column of buttons to a script report.
---

## Use Case

<video style="width: 100%" src="/mytodos-report.mp4" controls title="My ToDos Report"></video>

As seen above, we want an inline "Close" button for each row in the above report. Clicking on this button should close the corresponding ToDo and refresh the report automatically.

## The Report Python Script

The logic below is pretty simple. We are fetching the `status`, `description` and `name` for the **ToDo** documents that are either created by or allocated to the currently logged in user using `or_filters`:

```py {12-14}
# my_todos.py
import frappe

def execute(filters=None):
    return get_columns(), get_data()

def get_data():
    current_user = frappe.session.user
    todos = frappe.get_all(
        "ToDo",
        filters={"status": "Open"},
        # created by or allocated to current user
        or_filters=[{"owner": current_user}, {"allocated_to": current_user}],
        fields=["name", "description", "status"],
    )
    return todos

# 3 columns
def get_columns():
    return [
        {
            "label": "Description",
            "fieldname": "description",
            "fieldtype": "Data",
            "width": 400,
        },
        {"label": "Status", "fieldname": "status", "fieldtype": "Data", "width": 200},
        
        # This column will be used to render the close buttons
        {
            "label": "Close Action",
            "fieldname": "name",
            "fieldtype": "Data",
            "width": 150,
        },
    ]
```

## The JS Script

We will basically be making (*a clever* 😆) use of the `formatter` feature of query report scripts to render a button in every row of the "Close Action" column (field name is **name**):

```js {9-16}
// my_todos.js
frappe.query_reports["My ToDos"] = {
  filters: [],
  onload(report) {
    // add an action button to visit ToDo List View
    report.page.add_inner_button("Go to ToDo List", () => {
      frappe.set_route("List", "ToDo");
    });
  },
  formatter(value, row, column, data, default_formatter) {
    // Show a button instead of the "name"
    if (column.fieldname == "name") {
        const button_html = `<button class="btn btn-default btn-xs" onclick="frappe.query_reports['My ToDos'].close_todo('${value}')">Close</button>`;
        value = button_html;
    }
    return default_formatter(value, row, column, data);
  },
  close_todo(name) {
    frappe.db.set_value("ToDo", name, "status", "Closed").then(() => {
      // refresh this report and show alert
      frappe.query_report.refresh();
      frappe.show_alert("ToDo Closed Successfully!");
    });
  },
};
```

### Some Notes From Above Script

1. We are using the `add_inner_button` JavaScript API to add a button at the top of the report page:

    ```js
    report.page.add_inner_button("Go to ToDo List", () => {
        frappe.set_route("List", "ToDo");
    });
    ```

2. `frappe.query_report` refers to the currently open report view. (analogous to `cur_frm` in form view and `cur_list` in list view)

3. On click of a button, we are triggering the `close_todo` method of the report script:

    ```js
    // ${value} is the name of the ToDo document we sent from backend
    frappe.query_reports['My ToDos'].close_todo('${value}')
    ```
