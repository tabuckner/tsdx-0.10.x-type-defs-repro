
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tsdx-0.10.x-type-defs-repro.cjs.production.min.js')
} else {
  module.exports = require('./tsdx-0.10.x-type-defs-repro.cjs.development.js')
}
