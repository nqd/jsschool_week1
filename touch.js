#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs')
const path = require('path')

async function touch(file) {
  let filePath = file
  if (!path.isAbsolute(file)) {
    filePath = path.join(__dirname, file)
  }
  console.log(filePath)
  fs.promise.stat(filePath)
    .then((stats) => {
      // the file existing
      fs.promise.utimes(filePath, new Date(), new Date())
    })
    .catch((e) => {
      // the file not existing or access denied
      if (e.code === 'ENOENT') {
        fs.promise.appendFile(filePath, '')
      } else {
        console.log('Error', e.code)
      }
    })
}

touch(process.argv[2]);
