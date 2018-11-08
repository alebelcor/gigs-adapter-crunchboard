'use strict';

module.exports = json => {
  return json.link ? json.link.href : null;
};
