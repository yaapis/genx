# Command-line tool to generate sitemaps-xml file

## Installation:

    $ npm install cli-xml-genx


## To run tool:

`genx --url <baseUrl> --jp <pathToJsonFile>`

Command takes two parameters:

    - base url
    - json file path with list of urls
    
Tool should produce a sitemaps xml file with provided urls.

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