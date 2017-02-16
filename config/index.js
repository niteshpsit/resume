// Require dependies 
const _ = require('lodash')
const defaultconfig = require('./default')

/**
 * By using the environment variable choose the config file
 * If Environment variable is not set default will be development 
 **/
const config = require('./' + (process.env.NODE_ENV || 'development') + '.js')

// Merge the default config with the config file
module.exports = _.merge({}, defaultconfig, config)