'use strict';

var config = {
  src:       process.env.PLIVO_NUMBER || err('PLIVO_NUMBER'),
  authId:    process.env.PLIVO_API_ID || err('PLIVO_API_ID'),
  authToken: process.env.PLIVO_API_TOKEN || err('PLIVO_API_TOKEN')
};

module.exports = config;

function err(environmentVariable) {
  throw 'ERROR: Please set the ' + environmentVariable + ' environmental variable';
}
