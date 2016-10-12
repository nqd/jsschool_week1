#!/usr/bin/env babel-node

require('./helper')

// const fs = require('fs').promise

async function echo(args) {
  let argsStr = ''
  args.forEach((arg) => {
    argsStr = argsStr.concat(arg, ' ')
  })
  console.log(argsStr)
}

const args = process.argv
const argsArg = args.slice(2, args.length);
echo(argsArg);
