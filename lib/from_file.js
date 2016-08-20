/**
 * Parse comments from file
 * @function fromFile
 * @param {string} filename - Source file name
 * @param {Object} [options] - Optional settings
 * @param {string} [options.marker='method'] - Marker of method
 * @returns {Object}
 */
'use strict'

const parser = require('comment-parser')
const fs = require('fs')

/** @lends fromFile */
function fromFile (filename, options = {}) {
  let {
    marker = 'method'
  } = options
  let content = fs.readFileSync(filename).toString()
  let data = parser(content)
  let described = {}
  for (let { tags, description } of data) {
    let dict = tags.reduce((dict, tag) => Object.assign(dict, {
      [tag.tag]: (dict[ tag.tag ] || []).concat(tag)
    }), {})
    let method = (dict[ marker ] || []).shift()
    if (!method) {
      continue
    }
    described[ method.name ] = {
      desc: description,
      params: (dict.param || []).map(({
        name, type, optional, default: default_, description
      }) => ({
        name, type, optional, default: default_, desc: String(description).replace(/^\-/, '').trim()
      })),
      returns: (dict.returns || []).map(({ type, description }) => ({ type, desc: description })).shift()
    }
  }
  return described
}

module.exports = fromFile
