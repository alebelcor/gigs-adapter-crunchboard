'use strict';

module.exports = function getUrl(json) {
  return json.link ? json.link.href : null;
};
