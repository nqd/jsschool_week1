#!/usr/bin/env babel-node

require('./helper')

// const fs = require('fs').promise

async function echo(arg) {
  console.log(arg)
}

echo(process.argv[2]);
