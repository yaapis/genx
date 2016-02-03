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
        callback(null, obj);
    });
};

optGen.generateObj = function (jsonObj, callback) {
    var newObj = [];

    _.each(jsonObj, function (value, key, list) {
        var newArray = makeObject(value);
        newObj.push(newArray);
    });

    newObj = _.flatten(newObj);

    callback(null, newObj);
};

module.exports = optGen;


var makeObject =  function (section) {

    var arrayOfOptions = [];

    var newObj = {
        url: '',
        changefreq: section.frequency,
        priority: section.priority
    };

    _.each(section.urls, function (elem, index, list) {
        newObj.url = elem;
        arrayOfOptions.push(newObj);
    });

    return arrayOfOptions;
};
