# Conversions

> Conversions are represented as follows:

```json
{
  "id": "99999",
  "status": "active",
  "name": "Trial Signup",
  "url": "/receipt",
  "default_value": 2000,
  "counting_method": "one_per_visitor",
  "created_at": "2013-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/9999999/goals/99999",
  "links": {
    "account": "9999999"
  }
}
```

> All responses containing conversion data also include the following top-level link data:

```json
{
  "links": {
    "goals.account": "https://api.getdrip.com/v2/accounts/{goals.account}"
  }
}
```

See the Events API for recording conversion events.

## List all conversions

> To list all conversions in an account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/goals" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The goals property is an array of conversion goal objects.
{
  "links": { ... },
  "goals": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/goals`

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
      <td><code>status</code></td>
      <td>Optional. The status to filter by: <code>active</code>, <code>disabled</code>, or <code>all</code>. Defaults to <code>all</code>.</td>
    </tr>
  </tbody>
</table>

## Fetch a conversion

> To fetch a conversion:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/goals/CONVERSION_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The goals property is an array of one conversion goal object.
{
  "links": { ... },
  "goals": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/goals/:conversion_id`

### Arguments

None.
