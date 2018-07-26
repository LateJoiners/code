const local = require('config.local.json');
const dev = require('config.dev.json');
const prod = require('config.prod.json');

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

module.exports = config;