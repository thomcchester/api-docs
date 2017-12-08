# Triggering a Form Widget

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