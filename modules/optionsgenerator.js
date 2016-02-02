/**
 * Created by mario (https://github.com/hyprstack) on 01/02/2016.
 */

'use strict';

var fs = require('fs');
var _ = require('underscore');

var optGen = {};

optGen.readJson = function (fileJson, callback) {

    fs.readFile(fileJson, 'utf8', function (err, data) {
        var obj;
        if (err) {
            callback(err, null);
        }
        obj = JSON.parse(data);
        console.log(obj);
        callback(null, obj);
    });
};

optGen.generateObj = function (jsonObj, callback) {

    var arrayOfOptions = [];
    _.each(jsonObj, function (value, key, list) {
        var newObj = makeObject(key);
        arrayOfOptions.push(newObj);
    });
    callback(null, arrayOfOptions);
};

module.exports = optGen;

var makeObject =  function (section) {

    var newObj = {
        url: '',
        changefreq: section.frequency,
        priority: section.priority
    };

    _.each(section.urls, function (elem, index, list) {
        console.log(index);
        newObj.url = elem;
        return newObj;
    });
};

//[
//  { url: '/page-1/',  changefreq: 'daily', priority: 0.3 },
//  { url: '/page-2/',  changefreq: 'monthly',  priority: 0.7 },
//  { url: '/page-3/' } // changefreq: 'weekly',  priority: 0.5
//]

//"categories": {
//    "frequency": "Monthly",
//        "priority": 1,
//        "urls": ["aaaa", "bbbb", "cccc"]
//},
