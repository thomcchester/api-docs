# Pagination

> An example `meta` payload:

```json
{
  "page": 1,
  "count": 100,
  "total_pages": 3,
  "total_count": 300
}
```

Some endpoints that return collections are paginated. For these endpoints,
the <code>meta</code> object will tell you the current page, count,
total number of pages, and total count of the collection.

By default, the API will return the first page of results. Each page contains
a maximum of 100 items, unless otherwise noted below. To fetch a particular page,
use the `page` query parameter.
