const {mergeDeepRight} = require('ramda');
const base = require('./config.base');
const local = require('./config.local');
const dev = require('./config.dev');
const prod = require('./config.prod');

let config;

switch(process.env.ENV) {
case 'prod':
    config = prod;
    break;
case 'dev':
    config = dev;
    break;
case 'local':
    config = local;
    break;
default:
    config = local;
}

module.exports = mergeDeepRight(base, config);