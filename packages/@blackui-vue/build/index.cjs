'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blackui.prod.cjs')
} else {
  module.exports = require('./blackui.dev.cjs')
}
