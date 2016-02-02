# Command-line tool to generate sitemaps-xml file


## To run tool:

`genx -url <baseUrl> <pathToJsonFile>`

Command takes two parameters:

    - base url
    - json file path with list of urls
    
Tool should produce a sitemaps xml file with provided urls.

### What the sitemap will contain:

    - Site's main url with slash. (Changes daily - Priority 1.0000)
    - All categories urls 'category/:categorySlug' (Changes daily - Priority 0.8000)
    - All editions urls ':editionSlug' (Changes daily - Priority 0.6400)
    - All posts urls ':editionSlug/:postSlug' (Changes yearly - Priority 0.5120)

Sample json structure:

```javascript
    {
      "categories": {
        "frequency": "Monthly",
        "priority": 1,
        "urls": ["aaaa", "bbbb", "cccc"]
      },
      "editions": {
        "frequency": "Weekly",
        "priority": 0.7,
        "urls": ["ffff", "gggg", "dddd"]
      },
      "posts": {
        "frequency": "Weekly",
        "priority": 0.5,
        "urls": ["hhhhh", "eeeee", "ttttt"]
      }
    }
```