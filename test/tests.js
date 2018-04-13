#!/usr/bin/env node

'use strict';


const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const mlog = require('mocha-logger');
const util = require('util');

const GeneratorFunction = require('../GeneratorFunction').GeneratorFunction;


describe('GeneratorFunction', () => {

	it('is async function class', () => {
		expect(function *() {}).to.be.instanceof(GeneratorFunction);
	});

});
