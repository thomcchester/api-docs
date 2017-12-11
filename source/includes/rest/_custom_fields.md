# Custom Fields

## List all custom field identifiers used in an account

> To list all custom fields:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/custom_field_identifiers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
{
  "custom_field_identifiers": [ "first_name", "last_name" ]
}
```

### HTTP Endpoint

`GET /:account_id/custom_field_identifiers`

### Arguments

None.
