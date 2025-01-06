---
title: Day 4
description: Finals
---

## Resources

* [Caching Guide](https://frappeframework.com/docs/user/en/guides/caching)

## Final Assignment

Tap yourself on the back! You have finally reached here 🎉🎉

You have learnt a lot of new things about Frappe Framework and have implemented a lot of features in the Airplane mode app till now.

This is the final assignment for the Frappe Framework certification program and is more open ended as compared to the other three assignments. This assignment only contains requirements and you are free to implement them in any way you like, as long as the requirements are met.

:::note
You will extend the existing Airplane mode app you have been working on in the previous 3 assignments.
:::

### Part 1

Add the following features to your existing airplane mode app:

* Ability to track **crew members** in a flight
* Ability to track gate number in a ticket

### Part 2

The airport personnel are happy with the work your have done till now and want to **extend your contract to implement a new module in the airplane mode app**. This module will help them **track shops** (given on lease to 3rd party) at airports. Your job is to implement this module. Here is a rough requirement outline given to you by the airport authority, but feel free to go beyond this with your creativity:

1. New module (`Module Def`) to hold the doctypes and logic for this airport shop management
2. The system will help them track the shops in a given airport, with at least the below information:
    * tenant information (like name, email, etc.)
    * contract details (rent amount, date of expiry, etc.)
    * shop number, name etc.
    * physical properties like area of the shop
3. The system should have the ability to track the rent payments collected per month and issue a rent receipt (brownie points for using [Print Designer](https://github.com/frappe/print_designer) for designing a print format for receipt!) for the shop/tenant
4. Ability to track how many shops a particular airport has
5. Ability to track how many shops are available for lease and how many are occupied in a particular airport
6. The tenants should be reminded about rent due at every month via email (use scheduler events!)
7. Introduce two global configurations through which the user can: (Hint: think single)
    * set a default rent amount for shops
    * enable/disable rent reminders

#### A few important scenarios to implement

* What happens to gate numbers set in tickets when the gate number of a flight changes?
    > This must be done in a **background job** (so when gate number in flight is changed, a background job should be triggered to update the gate number in tickets)

* How will the payment schedule work?

#### Web Portal

Create a simple web portal that has the following:

* a page that shows a list of shops
* has a shop details page for each shop (on click of shop from the list)
* details page also contains a link to a web form for collecting "shop leads" (as in *they are interested to rent this shop*).
* download and use [this](https://cdn.jsdelivr.net/npm/picnic) CSS file for styling the pages. Don't inherit from the base `web.html` template. ([reading](https://frappeframework.com/docs/user/en/basics/static-assets))

### Part 3

#### Shop Types

* Create a DocType named `Shop Type` and link it to your shop DocType using a link field.
* This should have an **Enabled?** checkbox
* Your app should have/create the following types of shops **out of the box** (come with the app):
    1. Stall
    2. Walk-through
    3. Normal
* Filter the link field in shop form to only show shop types that are enabled.

:::tip[Hint]
Look for `fixtures` and `set_query` JS API!
:::

#### REST API Usage

1. Download [bruno](https://www.usebruno.com/) API client (FOSS)
2. [Create a request](https://docs.usebruno.com/get-started/bruno-basics/create-a-collection) to get a list of shops (with all fields) using Frappe's REST API
3. Create a POST request to create a new shop via API
4. Make sure you properly authenticate the API calls

You will have to demo both of these requests (and how did you authenticate the request) in your demo video (more information below).

## Submission

You must submit the below two pieces:

1. Compressed app (`airplane_mode`) folder.

2. A recorded a demo video (`mp4`) of your project (just Day 4), showcasing how you implemented each of the requirements (all the parts above) in your app. You should keep this page open and walk through each point one by one in your screen cast/demo video.

You will have the option to upload both the above things [here](https://frappe.school/assignments-portal/day-4).

This assignment will be manually evaluated by me and discussed during the evaluation call.

:::note[Need Help?]
If you have any problem in understanding the above assignment or have issues with submitting your assignment, feel free to drop me an email at <support@frappe.school>
:::

## Advanced Frappe

The following sections contain content on a lot of cool features of Frappe Framework, enjoy!

## Reading

* [Official Docs on Debugging](https://frappeframework.com/docs/v14/user/en/debugging)

* [Official Docs on Realtime](https://frappeframework.com/docs/v14/user/en/api/realtime)

* [Official Guide on Caching](https://frappeframework.com/docs/v14/user/en/guides/caching)

* [The Python Debugger: `pdb` Documentation](https://docs.python.org/3/library/pdb.html)

## Viewing

* [Ankush's talk from ERPNext Conference 2022](https://youtu.be/KTWwvHnjF5w)
