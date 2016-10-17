#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs').promise
const path = require('path')

async function mkdir(loc) {
  if (!loc) return
  let dirPath = loc
  if (!path.isAbsolute(dirPath)) {
    dirPath = path.join(__dirname, dirPath)
  }
  console.log(dirPath);

  fs.mkdir(dirPath)
    .catch((e) => {
      console.log('Error:', e.code)
    })
}

if (process.argv.length !== 3) {
  console.log('Error: Run with %s dir', process.argv[1])
  process.exit(0)
}

const dir = process.argv[2]

mkdir(dir)
