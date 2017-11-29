---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - authentication
  - rate_limiting
  - pagination
  - errors
  - accounts
  - subscribers
  - batch_api

search: true
---

# Introduction

Welcome to the Drip API! The REST API communicates exclusively in JSON over SSL (HTTPS).
All endpoint URLs begin with `https://api.getdrip.com/v2/`.

Parameters must be serialized in JSON and passed in the request body (not in the query string or form parameters).
This API is modeled after earlier versions of the [JSON API](http://jsonapi.org/) specification.

It is recommended that you use the media type designation of `application/vnd.api+json`,
although we will accept a media type designation of `application/json`.
