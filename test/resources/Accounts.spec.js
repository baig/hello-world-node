'use strict';

var Accounts = require('../../lib/resources/Accounts');
var expect = require('chai').expect;

describe('Accounts', function() {

    describe('sayHelloWorld', function() {
        it('should greet me with hello world.', function() {
            expect(Accounts.sayHelloWorld()).to.equal("hello world");
        });
    });

});