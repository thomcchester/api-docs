# Accounts

> Accounts are represented as follows:

```json
{
  "id": "9999999",
  "name": "Acme, Inc.",
  "url": "www.acme.com",
  "default_from_name": "John Doe",
  "default_from_email": "john@acme.com",
  "default_postal_address": "123 Anywhere St\nFresno, CA 99999",
  "primary_email": "john@acme.com",
  "enable_third_party_cookies": false,
  "phone_number": "999-999-9999",
  "created_at": "2013-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/accounts/9999999"
}
```

> All responses containing account data also include the following top-level link data:

```json
{
  "links": {
    "accounts.broadcasts": "https://api.getdrip.com/v2/{accounts.id}/broadcasts",
    "accounts.campaigns": "https://api.getdrip.com/v2/{accounts.id}/campaigns",
    "accounts.goals": "https://api.getdrip.com/v2/{accounts.id}/goals"
  }
}
```

## List all accounts

> To list all accounts the authenticated user has access to:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/accounts" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The accounts property is an array of account objects.
{
  "links": { ... },
  "accounts": [ ... ]
}
```

### HTTP Endpoint

`GET /accounts`

### Arguments

None.

## Fetch an account

> To fetch a specific account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/accounts/ACCOUNT_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The accounts property is an array of one account object.
{
  "links": { ... },
  "accounts": [{ ... }]
}
```

### HTTP Endpoint

`GET /accounts/:account_id`

### Arguments

None.
