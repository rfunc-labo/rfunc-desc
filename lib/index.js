/**
 * Describer for rfunc
 * @module rfunc-desc
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get fromFile () { return d(require('./from_file')) }
}
