var assert = require('assert')
  , uaCompatible = require('../')

describe('ua-compatible', function () {

  it('should correctly set header', function (done) {
    var res =
      { setHeader: function (key, value) {
          assert.equal(key, 'X-UA-Compatible')
          assert.equal(value, 'IE=edge,chrome=1')
        }
      }
    uaCompatible(null, res, done)
  })

})
