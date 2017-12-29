# Authentication

> For private integrations, you may use your personal API Token (found [here](https://www.getdrip.com/user/edit)) via the `api_key` setting:

```ruby
require 'drip-ruby'

client = Drip::Client.new do |c|
  c.api_key = "YOUR_API_KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')(
  {
    token: YOUR_API_KEY,
    accountId: YOUR_ACCOUNT_ID
  }
);
```

```shell
curl "api_endpoint_here" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> For public integrations, pass in the user's OAuth token via the `access_token` setting or pass the `Bearer` token type when using the JS wrapper:

```ruby
client = Drip::Client.new do |c|
  c.access_token = "YOUR_ACCESS_TOKEN"
  c.account_id = "YOUR_ACCOUNT_ID"
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')(
  {
    token: YOUR_API_KEY,
    tokenType: "Bearer",
    accountId: YOUR_ACCOUNT_ID
  }
);
```

```shell
curl "api_endpoint_here" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

The REST API accepts both token-based authentication (intended for private integrations),
and full [OAuth 2](http://oauth.net/2/) authentication (for public integrations).

<aside class="notice">
You must replace <code>YOUR_API_KEY</code> / <code>YOUR_ACCESS_TOKEN</code> with your actual token.
</aside>
