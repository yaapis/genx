#!/usr/bin/env node

'use strict';

var program = require('commander');
var sm = require('sitemap');
var optGen = require('./modules/optionsgenerator');

program
    .version('0.0.1')
    .option('-u, --url <string>', 'Base url for site')
    .option('-j, --jp <path>', 'Path to json file with list of paths to append to baseUrl')
    .action(function (url, path) {
        console.log(program.jp);
        console.log(program.url);
        optGen.readJson(program.jp, function (err, jsonObj) {
            if (err) {
                console.log(err);
                return;
            }
            optGen.generateObj(jsonObj, function (err, arrayOfOptions) {
                if (err) {
                    console.log(err);
                }
                console.log(arrayOfOptions);
                //var sitemap = sm.createSitemap({
                //    hostname: program.url,
                //    cacheTime: 600000,        // 600 sec - cache purge period
                //    urls: arrayOfOptions
                //});
            });
        });
    })
    .parse(process.argv);


