#!/usr/bin/env node

'use strict';

var program = require('commander');
var sm = require('sitemap');
var optGen = require('./modules/optionsgenerator');
var path = require('path');
var fs = require('fs');

program
    .version('0.0.1')
    .option('-u, --url', 'Base url for site')
    .option('-j, --jp', 'Path to json file with list of paths to append to baseUrl')
    .action(function (url, jp) {
        optGen.readJson(jp, function (err, jsonObj) {
            if (err) {
                console.log(err);
                return;
            }
            optGen.generateObj(jsonObj, function (err, arrayOfOptions) {
                if (err) {
                    console.log(err);
                }

                var sitemap = sm.createSitemap({
                    hostname: url,
                    cacheTime: 600000,        // 600 sec - cache purge period
                    urls: arrayOfOptions
                });

                sitemap.toXML( function (err, xml) {
                    if (err) {
                        console.log(err);
                    }
                    fs.writeFile(path.join(process.cwd(), 'sitemap.xml'), xml, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('Witten new file xml!');
                    });
                });
            });
        });
    })
    .parse(process.argv);


