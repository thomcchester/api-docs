# Forms

> Forms are represented as follows:

```json
{
  "id": "77777",
  "href": "https://api.getdrip.com/v2/9999999/forms/77777",
  "headline": "Long Tail SEO Course",
  "description": "Get our FREE email course",
  "button_text": "Sign Up!",
  "confirmation_heading": "Thank you for subscribing",
  "confirmation_text": "Please click the link in your email",
  "send_ga_event": true,
  "seconds_before_popup": 5,
  "days_between_popup": 5,
  "days_between_popup_after_close": 10,
  "orientation": "bottom_right_tab",
  "opacity": 0.8,
  "show_labels": false,
  "primary_color": "#333333",
  "secondary_color": "#d8ab93",
  "is_widget_enabled": true,
  "whitelist": [ "/landing", "/public" ],
  "blacklist": [],
  "is_whitelist_enabled": true,
  "is_blacklist_enabled": false,
  "hide_on_mobile": false,
  "is_embeddable": true,
  "created_at": "2013-06-21T10:31:58Z",
  "links": {
    "account": "9999999"
  }
}
```

> All responses containing form data also include the following top-level link data:

```json
{
  "links": {
    "forms.account": "https://api.getdrip.com/v2/accounts/{forms.account}"
  }
}
```

## List all forms

> To list all forms in an account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/forms" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The forms property is an array of form objects.
{
  "links": { ... },
  "forms": [ ... ]
}
```

### HTTP Endpoint

`GET /:account_id/forms`

### Arguments

None.

## Fetch a form

> To fetch a specific form:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/forms/FORM_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The forms property is an array of one form object.
{
  "links": { ... },
  "forms": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/forms/:form_id`

### Arguments

None.
