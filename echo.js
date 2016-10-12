#!/usr/bin/env babel-node

require('./helper')

// const fs = require('fs').promise

async function echo(args) {
  console.log(args[2])
}

echo(process.argv);
