---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes_rest_api:
  - rest/authentication
  - rest/rate_limiting
  - rest/pagination
  - rest/errors
  - rest/accounts
  - rest/broadcasts
  - rest/campaigns
  - rest/custom_fields
  - rest/conversions
  - rest/events
  - rest/forms
  - rest/purchases
  - rest/subscribers
  - rest/tags
  - rest/users
  - rest/workflows
  - rest/batch_api
  - rest/webhooks
  - rest/webhook_events

includes_js_api:
  - js/getting_started
  - js/identify
  - js/track
  - js/tagging
  - js/campaign_subscriptions
  - js/unsubscribe
  - js/form_widget
  - js/form_events

search: true
---

# Introduction

Welcome to the Drip API! The REST API communicates exclusively in JSON over SSL (HTTPS).
All endpoint URLs begin with `https://api.getdrip.com/v2/`.

Parameters must be serialized in JSON and passed in the request body (not in the query string or form parameters).
This API is modeled after earlier versions of the [JSON API](http://jsonapi.org/) specification.

It is recommended that you use the media type designation of `application/vnd.api+json`,
although we will accept a media type designation of `application/json`.
