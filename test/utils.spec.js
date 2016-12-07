'use strict';

var utils = require('../lib/utils');
var expect = require('chai').expect;

describe('utils', function() {

    describe('clone', function() {
        it('should deep clone the object', function() {
            var json = { 'a': 1, 'b': 2, 'c': { 'a': 1 } };
            var jsonClone = utils.clone(json);
            jsonClone.a = 3;
            jsonClone.b = 4;
            jsonClone.c.a = 2;
            expect(json.a).to.equal(1);
            expect(json.b).to.equal(2);
            expect(json.c.a).to.equal(1);
        });
    });

});