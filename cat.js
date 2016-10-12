#!/usr/bin/env babel-node

require('./helper')

const fs = require('fs')
const path = require('path')

async function cat(file) {
  if (!file) return

  let filePath = file
  if (!path.isAbsolute(file)) {
    filePath = path.join(__dirname, file)
  }

  fs.promise.readFile(filePath, 'utf8')
    .then(console.log)
    .catch((e) => {
      console.log('Error', e.code)
    })
}

cat(process.argv[2]);
