#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var restructured = require('../lib/RST.js').default;

program
  .usage('[options] < file.rst')
  .option('--position')
  .option('--blanklines')
  .option('--indent')
  .parse(process.argv)

var input = fs.readFileSync('/dev/stdin', 'utf8');
console.log(JSON.stringify(restructured.parse(input, program)));
