#!/usr/bin/env node
var program = require('commander');

program
  .version('1.0.0')
  .option('-l, --list', 'Get the pubs list')
  .option('-o, --open', 'Get the open bars')
  .parse(process.argv);

if (program.list) {
  require('../src/main').getListPub();
}
if (program.open){
  require('../src/main').getListOpenPubs(process.argv[3]);
}
