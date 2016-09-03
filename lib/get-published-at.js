'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  let publishedAt = null;

  if (json.published) {
    publishedAt = moment.utc(json.published).format('YYYY-MM-DD');
  }

  return publishedAt;
};
