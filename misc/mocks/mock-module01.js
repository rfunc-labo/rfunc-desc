'use strict'

const co = require('co')

module.exports = {
  /**
   * Test the reachability of the api.
   * @method ping
   * @param {string} [pong='pong'] - Pong message to return
   * @returns {string} - Pong message
   */
  ping (pong = 'pong') {
    return co(function * () {
      console.log('pong:', pong)
      return pong
    })
  }
}
