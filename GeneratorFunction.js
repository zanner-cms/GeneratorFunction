#!/usr/bin/env node

'use strict';

const GeneratorFunction = Object.getPrototypeOf(function *() {}).constructor;

exports.GeneratorFunction = GeneratorFunction;
