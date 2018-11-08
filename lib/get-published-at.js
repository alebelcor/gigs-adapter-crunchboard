'use strict';

const moment = require('moment');

module.exports = json => {
  let publishedAt = null;

  if (json.published) {
    publishedAt = moment.utc(json.published, 'YYYY-MM-DDTHH:mm:ssZ', true).format('YYYY-MM-DD');
  }

  return publishedAt;
};
