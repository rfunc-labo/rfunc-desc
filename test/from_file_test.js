/**
 * Test case for fromFile.
 * Runs with mocha.
 */
'use strict'

const fromFile = require('../lib/from_file.js')
const assert = require('assert')
const co = require('co')

describe('from-file', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('From file', () => co(function * () {
    let descriptions = fromFile(require.resolve('../misc/mocks/mock-module01.js'))
    assert.deepEqual(descriptions, {
      'ping': {
        'desc': 'Test the reachability of the api.',
        'params': [
          {
            'name': 'pong',
            'type': 'string',
            'optional': true,
            'default': 'pong',
            'desc': 'Pong message to return'
          }
        ],
        'returns': {
          'type': 'string',
          'desc': 'Pong message'
        }
      }
    })
  }))
})

/* global describe, before, after, it */
