# Workflow Triggers

## List all workflow triggers

> To list all triggers on a workflow:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/workflows/WORKFLOW_ID/triggers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
{
  "triggers": [
    {
      "id": "f7gysdf7gyd7",
      "type": "trigger",
      "trigger_type": "submitted_landing_page",
      "provider": "leadpages",
      "properties": {
        "landing_page": "My Landing Page"
      },
      "actions_required": [
        {
          "code": "configure_provider",
          "message": "Configure your LeadPages connection"
        }
      ]
    }
  ]
}
```

### HTTP Endpoint

`GET /:account_id/workflows/:workflow_id/triggers`

### Arguments

None.

## Create a workflow trigger

> To create a workflow trigger:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/workflows/WORKFLOW_ID/triggers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "triggers": [
      {
        "provider": "leadpages",
        "trigger_type": "submitted_landing_page",
        "properties": {
          "landing_page": "My Landing Page"
        }
      }
    ]
  }
  EOF
```

> The response looks like this:

```json
{
  "triggers": [
    {
      "id": "f7gysdf7gyd7",
      "type": "trigger",
      "provider": "leadpages",
      "trigger_type": "submitted_landing_page",
      "properties": {
        "landing_page": "My Landing Page"
      },
      "actions_required": [
        {
          "code": "configure_provider",
          "message": "Configure your LeadPages connection"
        }
      ]
    }
  ]
}
```

### HTTP Endpoint

`POST /:account_id/workflows/:workflow_id/triggers`

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
      <td><code>provider</code></td>
      <td>Required. A String indicating a provider.</td>
    </tr>
    <tr>
      <td><code>trigger_type</code></td>
      <td>Required. A String indicating the automation trigger type.</td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td>Optional. An Object containing properties for the given trigger.</td>
    </tr>
  </tbody>
</table>

## Update a workflow trigger

> To update a workflow trigger:

```shell
curl -X PUT "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/workflows/WORKFLOW_ID/triggers/TRIGGER_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "triggers": [
      {
        "provider": "leadpages",
        "trigger_type": "submitted_landing_page",
        "properties": {
          "landing_page": "My Landing Page"
        }
      }
    ]
  }
  EOF
```

> The response looks like this:

```json
{
  "triggers": [
    {
      "id": "f7gysdf7gyd7",
      "type": "trigger",
      "provider": "leadpages",
      "trigger_type": "submitted_landing_page",
      "properties": {
        "landing_page": "My Landing Page"
      },
      "actions_required": [
        {
          "code": "configure_provider",
          "message": "Configure your LeadPages connection"
        }
      ]
    }
  ]
}
```

### HTTP Endpoint

`PUT /:account_id/workflows/:workflow_id/triggers/:trigger_id`

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
      <td><code>provider</code></td>
      <td>Required. A String indicating a provider.</td>
    </tr>
    <tr>
      <td><code>trigger_type</code></td>
      <td>Required. A String indicating the automation trigger type.</td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td>Optional. An Object containing properties for the given trigger.</td>
    </tr>
  </tbody>
</table>
