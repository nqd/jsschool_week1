#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs').promise
const path = require('path')

async function rm(loc) {
  if (!loc) return
  let dirPath = loc
  if (!path.isAbsolute(dirPath)) {
    dirPath = path.join(__dirname, dirPath)
  }
  console.log(dirPath);

  fs.rm(dirPath)
    .catch((e) => {
      console.log('Error:', e.code)
    })
}

const loc = process.argv[2]

rm(loc)
