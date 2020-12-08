'use strict';
const disable = require('../../common/helper').disableHelper;
const rq = require('../../common/helper').httpHelper;

module.exports = function (Job) {
  disable.disableAllMethods(Job, []);

  Job.position = function (cb) {
    const optionsStore = {
      uri: `http://jobs.github.com/positions.json`,
      method: 'GET',      
      json: true,
    };
    return rq.request(optionsStore);
  };
  Job.remoteMethod('position', {
    http: {
      path: '/position',
      verb: 'get'
    },
    returns: { type: 'object', root: true }
  });
};
