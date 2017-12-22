# Custom Fields

## List all custom field identifiers used in an account

> To list all custom fields:

```shell
curl "https://api.drip.com/v2/YOUR_ACCOUNT_ID/custom_field_identifiers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

response = client.custom_fields

if response.success?
  puts response.body
end
```

> The response looks like this:

```json
{
  "custom_field_identifiers": [ "first_name", "last_name" ]
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
      <td><code>custom_field_identifiers</code></td>
      <td>Returns a list of all active custom field identifiers used in the target account.</td>
    </tr>
  </tbody>
</table>

### HTTP Endpoint

`GET /:account_id/custom_field_identifiers`

### Arguments

None.
