# Tags

## List all tags used in an account

> To list all tags:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/tags" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
{
  "tags": [
    "Customer",
    "SEO"
  ]
}
```

**Properties**

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>email</code></td>
      <td>The currently authenticated user's email address.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>The currently authenticated user's name.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td>The currently authenticated user's time zone.</td>
    </tr>
  </tbody>
</table>

### HTTP Endpoint

`GET /:account_id/tags`

### Arguments

None.

## Apply a tag to a subscriber

> To apply a tag to a specific subscriber:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/tags" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "tags": [{
      "email": "john@acme.com",
      "tag": "Customer"
    }]
  }
  EOF
```

> Responds with a `201 Created` and an empty JSON response:

```json
{}
```

### HTTP Endpoint

`POST /:account_id/tags`

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
      <td>The subscriber's email address.</td>
    </tr>
    <tr>
      <td><code>tag</code></td>
      <td>The String tag to apply. E.g. "Customer"</td>
    </tr>
  </tbody>
</table>

## Remove a tag from a subscriber

> To apply a tag to a specific subscriber:

```shell
curl -X DELETE "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL/tags/TAG" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> Responds with a `204 No Content` if successful.

### HTTP Endpoint

`DELETE /:account_id/subscribers/:email/tags/:tag`

### Arguments

None.
