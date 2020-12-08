'use strict';
const disable = require('../../common/helper').disableHelper;
const rq = require('../../common/helper').httpHelper;

module.exports = function (Job) {
  disable.disableAllMethods(Job, []);

  Job.position = function (page, cb) {
    const request = {
      uri: `http://jobs.github.com/positions.json?page=${page}`,
      method: 'GET',      
      json: true,
    };
    return rq.request(request);
  };

  Job.remoteMethod('position', {
    http: {
      path: '/position',
      verb: 'get'
    },
    accepts: [
      { 'arg': 'page', 'type': 'string', 'required': true }
    ],
    returns: { type: 'object', root: true }
  });

  Job.positionFilter = function (page, description, cb) {
    const request = {
      uri: `http://jobs.github.com/positions.json?page=${page}&description=${description}`,
      method: 'GET',      
      json: true,
    };
    return rq.request(request);
  };

  Job.remoteMethod('positionFilter', {
    http: {
      path: '/position-filter',
      verb: 'get'
    },
    accepts: [
      { 'arg': 'page', 'type': 'string', 'required': true },
      { 'arg': 'description', 'type': 'string', 'required': true }
    ],
    returns: { type: 'object', root: true }
  });
};
