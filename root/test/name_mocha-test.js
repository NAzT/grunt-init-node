'use strict';

require('expectations'); // exports a global, so use anywhere
var sinon = require('sinon');
var request = require('request');
var {%= js_test_safe_name %} = require('../lib/{%= name %}.js');

describe("awesome", function () {
    beforeEach(function () {
    });

    it("should be awesome", function() {
      expect({%= js_test_safe_name %}.awesome()).toEqual('awesome');
    });

    afterEach(function() {
    });
});