# Handling Forms

## Opening and closing a form

> Example requests

```javascript
_dcq.push(["showForm", { id: "9999999" }]);
_dcq.push(["hideForm", { id: "9999999" }]);
```

The native Drip form widget can be opened or closed via the JS API.

### Arguments

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>Required. The String form ID, which can be found on the form settings page.</td>
    </tr>
    <tr>
      <td><code>showTab</code></td>
      <td>Optional. If <code>true</code>, the teaser tab will show when the form is closed. Defaults to <code>true</code>.</td>
    </tr>
  </tbody>
</table>

## Form Submission Events

> Example listener

```javascript
$(document).on("submitted.drip", function(ev, data){
  console.log(data);
})
```

> Example Event Data

```json
{
  "account_id": "999999",
  "fields[email]": "john@acme.com",
  "fields[first_name]": "John",
  "form_id": "999999",
  "page_title": "Drip :: Email Marketing Automation for Visitors, Trials and Customers",
  "submit": "Let's do it!",
  "time_zone": "America/Los_Angeles",
  "url": "https://www.getdrip.com/",
  "visitor_uuid": "f627ee608adb01315d1022000ab2058a"
}
```

If jQuery is available on your page, the following events are triggered as the widget is submitted:

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Fired when...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>submitting.drip	</code></td>
      <td>a form submit button is clicked.</td>
    </tr>
    <tr>
      <td><code>submitFailed.drip	</code></td>
      <td>a form submission fails.</td>
    </tr>
    <tr>
      <td><code>submitted.drip	</code></td>
      <td>a form submission succeeds.</td>
    </tr>
  </tbody>
</table>

By listening for these events, you can hook your own javascript onto the widget's actions. Each of the above events carries a data Object with the form's information.