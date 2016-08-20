'use strict'

const { fromFile } = require('rfunc-desc')

let descriptions = fromFile('lib/define.js')
console.log(descriptions) // -> { /* ... */ }
