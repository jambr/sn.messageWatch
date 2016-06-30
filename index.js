'use strict';
let Broker = require('sn.core').Default.Broker;
let broker = new Broker('stocknet.topic');

broker.subscribe(['sn.*', 'sn.*.*', 'sn.*.*.*'], () => {
}, () => {
  console.log('message watch started');
});
