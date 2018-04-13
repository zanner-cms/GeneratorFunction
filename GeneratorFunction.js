#!/usr/bin/env node

'use strict';

const GeneratorFunction = Object.getPrototypeOf(async function () {}).constructor;

exports.GeneratorFunction = GeneratorFunction;
