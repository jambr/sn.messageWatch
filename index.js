'use strict';
let Broker = require('sn.core').Default.Broker;
let broker = new Broker('sn:topic');

broker.subscribe(['sn.*', 'sn.*.*', 'sn.*.*.*'], () => {
}, () => {
  console.log('message watch started');
});
