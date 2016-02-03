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

    var newObj = _.map(jsonObj, function (value, key) {
        return makeObject(value);
    }, this);

    newObj = _.flatten(newObj);

    callback(null, newObj);
};

module.exports = optGen;


var makeObject =  function (section) {

    var arrayOfOptions = [];

    /***** This section is added so that the base url is also crawled ****/
    var baseObj = {
        "frequency": "monthly",
        "priority": 1,
        "urls": ["/"]
    };

    arrayOfOptions.push(baseObj);

    /************************************/

    _.each(section.urls, function (elem, index, list) {
        var newObj = {};
        newObj.changefreq = section.frequency;
        newObj.priority = section.priority;
        newObj.url = elem;
        arrayOfOptions.push(newObj);

    }, this);

    return arrayOfOptions;
};
