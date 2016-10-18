#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs').promise
const path = require('path')

function rm(loc) {
  let filePath = loc
  if (!path.isAbsolute(filePath)) {
    filePath = path.join(__dirname, filePath)
  }
  fs.lstat(filePath)
  .then((stat) => {
    if (!stat.isDirectory()) {
      fs.unlink(filePath)
      .catch((e) => {
        throw e
      })
    } else {
      console.log('Do not support rm folder yet')
    }
  })
  .catch((e) => {
    console.log('Error', e.code)
  })
}

const loc = process.argv[2]

rm(loc)
