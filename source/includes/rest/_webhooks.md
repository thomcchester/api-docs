# Webhooks

> Webhooks are represented as follows:

```json
{
  "id": "77777",
  "href": "https://api.getdrip.com/v2/9999999/webhooks/77777",
  "post_url": "http://www.mysite.com/my-webhook-endpoint",
  "version": "1",
  "include_received_email": false,
  "events": [
    "subscriber.created",
    "subscriber.subscribed_to_campaign"
  ],
  "created_at": "2013-06-21T10:31:58Z",
  "links": {
    "account": "9999999",
  }
}
```

> All responses containing webhook data also include the following top-level link data:

```json
{
  "links": {
    "webhooks.account": "https://api.getdrip.com/v2/accounts/{webhooks.account}"
  }
}
```

## List all webhooks

> To list all webhooks in an account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/webhooks" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The webhooks property is an array of webhook objects.
{
  "links": { ... },
  "webhooks": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/webhooks`

### Arguments

None.

## Fetch a webhook

> To fetch a specific webhook:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/webhooks/WEBHOOK_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The webhooks property is an array of one webhook object.
{
  "links": { ... },
  "webhooks": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/webhooks/:webhook_id`

### Arguments

None.

## Create a new webhook

> To create a webhook:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/webhooks" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "webhooks": [{
      "post_url": "http://www.mysite.com/my-webhook-endpoint",
      "events": [
        "subscriber.created",
        "subscriber.subscribed_to_campaign"
      ]
    }]
  }
  EOF
```

> Responds with a `201 Created` like this:

```json
{
  "links": { ... },
  "webhooks": [{
    "id": "77777",
    "href": "https://api.getdrip.com/v2/9999999/webhooks/77777",
    "post_url": "http://www.example.com/api/v2/form",
    "version": "1",
    "include_received_email": false,
    "events": [
      "subscriber.created",
      "subscriber.subscribed_to_campaign"
    ],
    "created_at": "2013-06-21T10:31:58Z",
    "links": {
      "account": "9999999",
    }
  }]
}
```

### HTTP Endpoint

`POST /:account_id/webhooks`

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
      <td><code>post_url</code></td>
      <td>The url that the webhook will post to.</td>
    </tr>
    <tr>
      <td><code>include_received_email</code></td>
      <td>Optional. A Boolean specifying whether we should send a notification whenever a subscriber receives an email. Defaults to <code>false</code>.</td>
    </tr>
    <tr>
      <td><code>events</code></td>
      <td>Optional. An Array specifiying which events we should send notifications for. Eligible events can be found in the <a href="/docs/webhooks">webhooks documentation</a>. By default, we will send notifications for all events except <code>subscrber.received_email</code>.</td>
    </tr>
  </tbody>
</table>

## Destroy a webhook

> To destroy an existing webhook:

```shell
curl -X DELETE "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/webhooks/WEBHOOK_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> Responds with a `204 No Content` if successful.

### HTTP Endpoint

`DELETE /:account_id/webhooks/:webhook_id`

### Arguments

None.
