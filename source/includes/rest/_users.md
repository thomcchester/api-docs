# Users

> Users are represented as follows:

```json
{
  "email": "john@acme.com",
  "name": "John Doe",
  "time_zone": "America/Los_Angeles"
}
```

## Fetch the authenticated user

> To fetch the current user:

```shell
curl "https://api.drip.com/v2/user" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
{
  "users":[{
    "email": "john@acme.com",
    "name": "John Doe",
    "time_zone": "America/Los_Angeles"
  }]
}
```

### HTTP Endpoint

`GET /user`

### Arguments

None.
