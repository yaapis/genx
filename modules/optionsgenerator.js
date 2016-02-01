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

    var optionsObject = {};

    optionsObject
};

module.exports = optGen;
