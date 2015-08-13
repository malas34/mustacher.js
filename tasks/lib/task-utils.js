/**
 * Grunt Mustacher
 * https://github.com/malas34/grunt-mustacher
 *
 * Copyright (c) 2014 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * HANDLEBARS
 * @see http://handlebarsjs.com/
 *
 */
/*jslint plusplus: true, indent: 4 */
/*global module, require */
(function () {

    'use strict';

    var lodash = require('lodash');

    module.exports = {
        hasOptions: function (args) {
            var options;
            if (arguments.length < 1 || lodash.isEmpty(args) || Object.keys(args).length < 1) {
                return false;
            }
            args = lodash.toArray(args);
            options = args[args.length - 1];
            return lodash.isPlainObject(options) && options.hasOwnProperty('name') ? args : false;
        }
    };

}());