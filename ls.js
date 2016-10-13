#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs')
const path = require('path')

async function ls(loc) {
  let filePath = loc
  if (!path.isAbsolute(filePath)) {
    filePath = path.join(__dirname, filePath)
  }
  fs.promise.readdir(filePath)
    .then((stats) => {
      stats.forEach((i) => {
        console.log(i)
      })
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

ls(process.argv[2]);
