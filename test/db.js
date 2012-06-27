'use strict'

var chai = require('chai');
var sinon = require('sinon');
var should = chai.should();

var db = require('../lib/db');

chai.use(require('sinon-chai'));


describe('db', function () {
    describe('#init()', function () {
        it('should check that database exists', function (done) {
            var mockDb = {
                exists: sinon.stub().yields(null, true)
            };
            db.init(mockDb, function (err) {
                mockDb.exists.should.have.been.called;
                done(err);
            });
        });

        it('should create database if it does not exist', function (done) {
            var mockDb = {
                exists: sinon.stub().yields(null, false),
                create: sinon.stub().yields(),
            };
            db.init(mockDb, function (err) {
                mockDb.create.should.have.been.called;
                done(err);
            });
        });
    });
});