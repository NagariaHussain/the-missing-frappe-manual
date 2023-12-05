---
title: Client Scripts
description: Examples/Recipes for Client Scripts in Frappe Framework
---

You can use these snippets either in your `Client Script`s or DocType `js` files.

### 1. Adding Web Link to Sidebar

![Screenshot showing web link in form view side bar](../../../assets/images/view_in_youtube_web_link.png)

```js
// Assuming there is a "Live Stream" DocType 
// with a field `stream_link` that has the link to a YouTube video
frappe.ui.form.on('Live Stream', {
 refresh(frm) {
    const stream_link = frm.doc.stream_link;
    frm.add_web_link(stream_link, "View in YouTube");
 }
})
```

:::note
The link opens in a new browser tab. You can add multiple of these web links.
:::
