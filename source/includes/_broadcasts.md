# Broadcasts

> Broadcasts are represented as follows:

```json
{
  "id": "123456",
  "status": "sent",
  "name": "4 Marketing Automation Trends for 2015",
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "postal_address": "123 Anywhere St\nFresno, CA 99999",
  "localize_sending_time": true,
  "send_at": "2015-07-01T10:00:00Z",
  "bcc": null,
  "created_at": "2015-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/9999999/broadcast/123456",
  "subject": "4 Marketing Automation Trends for 2015",
  "html_body": "HTML body",
  "text_body": "Text body",
  "links": {
    "account": "9999999"
  }
}
```

> All responses containing broadcast data also include the following top-level link data:

```json
{
  "links": {
    "broadcasts.account": "https://api.getdrip.com/v2/accounts/{broadcasts.account}",
  }
}
```

## List all broadcasts

> To list broadcasts in an account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/broadcasts" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The broadcasts property is an array of broadcast objects.
{
  "links": { ... },
  "meta": {
    "page": 1,
    "sort": "created_at",
    "direction": "asc",
    "count": 5,
    "total_pages": 1,
    "total_count": 5,
    "status": "all"
  },
  "broadcasts": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/broadcasts`

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
      <td>Optional. Filter by one of the following statuses: <code>draft</code>, <code>scheduled</code>, or <code>sent</code>. Defaults to <code>all</code>.</td>
    </tr>
  </tbody>
</table>

## Fetch a broadcast

> To fetch a specific broadcast:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/broadcasts/BROADCAST_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The broadcasts property is an array of one broadcast object.
{
  "links": { ... },
  "broadcasts": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/broadcasts/:broadcast_id`

### Arguments

None.
