# Campaign Subscriptions

> Campaign subscriptions are represented as follows:

```json
{
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
}
```

> All responses containing campaign subscription data also include the following top-level link data:

```json
{
  "links": {
    "campaign_subscriptions.account": "https://api.getdrip.com/v2/accounts/{campaign_subscriptions.account}",
    "campaign_subscriptions.subscriber": "https://api.getdrip.com/v2/subscribers/{campaign_subscriptions.subscriber}"
  }
}
```

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
  "links": { ... },
  "meta": {
    "page": 1,
    "count": 5,
    "total_pages": 1,
    "total_count": 5
  },
  "campaign_subscriptions": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/subscribers/:subscriber_id/campaign_subscriptions`

### Arguments

None.
