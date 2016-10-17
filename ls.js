#!/usr/bin/env babel-node

/*
 * - check for absolute path
 * - print out error code
 */

require('./helper')

const fs = require('fs')
const path = require('path')

async function ls(loc, recursive) {
  if (!loc) return
  let filePath = loc
  if (!path.isAbsolute(filePath)) {
    filePath = path.join(__dirname, filePath)
  }
  fs.promise.readdir(filePath)
    .each((item) => {
      fs.promise.lstat(path.join(loc, item))
        .then((stat) => {
          if (!stat.isDirectory()) {
            console.log(path.join(loc, item))
          }
          if (stat.isDirectory() && recursive) {
            ls(path.join(loc, item), recursive)
          }
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

let recursive = false
if (process.argv.indexOf('-R') > 0) {
  recursive = true;
}

console.log(recursive)

ls(process.argv[2], recursive);
