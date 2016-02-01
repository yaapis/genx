# Command-line tool to generate sitemaps-xml file


## To run tool:

`genx -url <baseUrl> -jp <pathToJsonFile>`

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
        categories: ['a', 'b', 'c'],
        editions: ['a', 'b', 'c'],
        posts: [
            {
                edition: 'bla', 
                slug: 'bla'
            }
        ]
    }
```