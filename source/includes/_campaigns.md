# Campaigns

> Campaigns are represented as follows:

```json
{
  "id": "123456",
  "status": "active",
  "name": "SEO Email Course",
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "postal_address": "123 Anywhere St\nFresno, CA 99999",
  "minutes_from_midnight": 440,
  "localize_sending_time": true,
  "days_of_the_week_mask": "0111110",
  "start_immediately": true,
  "double_optin": true,
  "send_to_confirmation_page": false,
  "use_custom_confirmation_page": false,
  "confirmation_url": null,
  "notify_subscribe_email": "derrick@getdrip.com",
  "notify_unsubscribe_email": "derrick@getdrip.com",
  "bcc": null,
  "email_count": 10,
  "active_subscriber_count": 320,
  "unsubscribed_subscriber_count": 5,
  "email_open_rate": 0.15531,
  "email_click_rate": 0.68232,
  "created_at": "2013-06-21T10:31:58Z",
  "updated_at": "2013-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/9999999/campaigns/123456",
  "links": {
    "account": "9999999",
    "forms": ["888"]
  }
}
```

> All responses containing campaign data also include the following top-level link data:

```json
{
  "links": {
    "campaigns.account": "https://api.getdrip.com/v2/accounts/{campaigns.account}",
    "campaigns.form": "https://api.getdrip.com/v2/{campaigns.account}/forms/{campaigns.forms}",
    "campaigns.subscribers": "https://api.getdrip.com/v2/{campaigns.account}/campaigns/{campaigns.id}/subscribers"
  }
}
```

## List all campaigns

> To list all campaigns:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The campaigns property is an array of campaign objects.
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
  "campaigns": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/campaigns`

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
      <td>Optional. Filter by one of the following statuses: <code>draft</code>, <code>active</code>, or <code>paused</code>. Defaults to <code>all</code>.</td>
    </tr>
  </tbody>
</table>

## Fetch a campaign

> To fetch a specific campaign:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns/CAMPAIGN_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The campaigns property is an array of campaign objects.
# The forms property is an array of forms that feed directly into to the campaign.
{
  "links": { ... },
  "campaigns": [{ ... }],
  "linked": {
    "forms": [{ ... }]
  }
}
```

### HTTP Endpoint

`GET /:account_id/campaigns/:campaign_id`

### Arguments

None.

## Activate a campaign

> To activate a campaign:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns/CAMPAIGN_ID/activate" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> Responds with a `204 No Content` if successful. If the campaign cannot be activated, returns a `422 Unprocessable Entity`.

### HTTP Endpoint

`POST /:account_id/campaigns/:campaign_id/activate`

### Arguments

None.

## Pause a campaign

> To pause a campaign:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns/CAMPAIGN_ID/pause" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> Responds with a `204 No Content` if successful. If the campaign cannot be paused, returns a `422 Unprocessable Entity`.

### HTTP Endpoint

`POST /:account_id/campaigns/:campaign_id/pause`

### Arguments

None.

## List all subscribers subscribed to a campaign

> To list subscribers on a campaign:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns/CAMPAIGN_ID/subscribers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The subscribers property is an array of subscriber objects.
{
  "links": { ... },
  "meta": {
    "page": 1,
    "sort": "created_at",
    "direction": "desc",
    "count": 20,
    "total_pages": 1,
    "total_count": 20
  },
  "subscribers": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/campaigns/:campaign_id/subscribers`

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
      <td>Optional. The status to filter by: <code>active</code>, <code>unsubscribed</code>, or <code>removed</code>. Defaults to <code>active</code>.</td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td>Optional. The page number. Defaults to <code>1</code>.</td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td>Optional. The attribute by which to sort the results: <code>id</code> or <code>created_at</code>. Defaults to <code>created_at</code>.</td>
    </tr>
    <tr>
      <td><code>direction</code></td>
      <td>Optional. The direction to sort the results: <code>asc</code> or <code>desc</code>. Defaults to <code>desc</code>.</td>
    </tr>
    <tr>
      <td><code>per_page</code></td>
      <td>Optional. The number of records to be returned on each page. Defaults to <code>100</code>. Maximum <code>1000</code>.</td>
    </tr>
  </tbody>
</table>

## Subscribe someone to a campaign

> To start a subscriber on a campaign:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/campaigns/CAMPAIGN_ID/subscribers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "subscribers": [{
      "email": "john@acme.com",
      "utc_offset": 660,
      "double_optin": true,
      "starting_email_index": 0,
      "reactivate_if_removed": true,
      "custom_fields": {
        "name": "John Doe"
      }
    }]
  }
  EOF
```

> The response looks like this:

```json
# The subscribers property is an array of one object.
{
  "links": { ... },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`POST /:account_id/campaigns/:campaign_id/subscribers`

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
      <td>Required. The subscriber's email address.</td>
    </tr>
    <tr>
      <td><code>user_id</code></td>
      <td>Optional. A unique identifier for the user in your database, such as a primary key.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td>Optional. The subscriber's time zone (in Olson format). Defaults to <code>Etc/UTC</code></td>
    </tr>
    <tr>
      <td><code>double_optin</code></td>
      <td>Optional. If <code>true</code>, the double opt-in confirmation email is sent; if <code>false</code>, the confirmation email is skipped. Defaults to the value set on the campaign.</td>
    </tr>
    <tr>
      <td><code>starting_email_index</code></td>
      <td>Optional. The index (zero-based) of the email to send first. Defaults to <code>0</code>.</td>
    </tr>
    <tr>
      <td><code>custom_fields</code></td>
      <td>Optional. An Object containing custom field data. E.g. <code>{ "name": "John Doe" }</code>.</td>
    </tr>
    <tr>
      <td><code>tags</code></td>
      <td>Optional. An Array containing one or more tags. E.g. <code>["Customer", "SEO"]</code>.</td>
    </tr>
    <tr>
      <td><code>reactivate_if_removed</code></td>
      <td>Optional. If <code>true</code>, re-subscribe the subscriber to the campaign if there is a removed subscriber in Drip with the same email address; otherwise, respond with <code>422 Unprocessable Entity</code>. Defaults to <code>true</code>.</td>
    </tr>
    <tr>
      <td><code>prospect</code></td>
      <td>Optional. A Boolean specifiying whether we should attach a lead score to the subscriber (when lead scoring is enabled). Defaults to <code>true</code>.
        <strong>Note:</strong> This flag used to be called <code>potential_lead</code>, which we will continue to accept for backwards compatibility.</td>
    </tr>
    <tr>
      <td><code>base_lead_score</code></td>
      <td>Optional. An Integer specifying the starting value for lead score calculation for this subscriber. Defaults to <code>30</code>.</td>
    </tr>
  </tbody>
</table>

## List all of a subscriber's campaign subscriptions

> To list campaign subscriptions for a subscriber:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/SUBSCRIBER_ID/campaign_subscriptions" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The campaign subscriptions property is an array of campaign subscription objects.
{
  "links": {
    "campaign_subscriptions.account": "https://api.getdrip.com/v2/accounts/{campaign_subscriptions.account}",
    "campaign_subscriptions.subscriber": "https://api.getdrip.com/v2/subscribers/{campaign_subscriptions.subscriber}"
  },
  "meta": {
    "page": 1,
    "count": 5,
    "total_pages": 1,
    "total_count": 5
  },
  "campaign_subscriptions": [{
    "id": "123456",
    "campaign_id": "999999",
    "status": "active",
    "is_complete": false,
    "lap": 1,
    "last_sent_email_index": 0,
    "last_sent_email_at": "2016-03-25T11:00:00Z",
    "links": {
      "account": "9999999",
      "subscriber": "z1togz2hcjrkpp5treip"
    }
  }]
}
```

### HTTP Endpoint

`GET /:account_id/subscribers/:subscriber_id/campaign_subscriptions`

### Arguments

None.
