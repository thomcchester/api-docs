# Unsubscribe a Subscriber

> Example request

```javascript
_dcq.push(["unsubscribe", { campaign_id: "9999999", email: "john@acme.com" }]);
```

Use this method to unsubscribe a subscriber from one or all of your campaigns.

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
      <td><code>email</code></td>
      <td>Required. The String email address of the subscriber you wish to unsubscribe.</td>
    </tr>
    <tr>
      <td><code>campaign_id</code></td>
      <td>Optional. The String campaign ID, which can be found on the campaign settings page. If not included, the subscriber will be unsubscribed from all campaigns.</td>
    </tr>
    <tr>
      <td><code>success</code></td>
      <td>Optional. A callback function that is executed upon successful completion of the request.</td>
    </tr>
    <tr>
      <td><code>failure</code></td>
      <td>Optional. A callback function that is executed if the request fails.</td>
    </tr>
  </tbody>
</table>