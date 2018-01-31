# Command-line tool to generate sitemaps-xml file

## Installation:

    $ npm install cli-xml-genx


## To run tool:

`xml-genx --url <baseUrl> --jp <pathToJsonFile> --dest <destinationDir>` 

Command takes three parameters:

    - base url
    - json file path with list of urls
    - destination path. Current working directory by default.
    
Tool produces a site-maps xml file with provided urls and dumps the file in the destination working directory.

Example json structure:

```javascript
    {
      "categories": {
        "frequency": "monthly",
        "priority": 1,
        "urls": ["aaaa", "bbbb", "cccc"]
      },
      "editions": {
        "frequency": "weekly",
        "priority": 0.7,
        "urls": ["ffff", "gggg", "dddd"]
      },
      "posts": {
        "frequency": "weekly",
        "priority": 0.5,
        "urls": ["hhhhh", "eeeee", "ttttt"]
      }
    }
```
