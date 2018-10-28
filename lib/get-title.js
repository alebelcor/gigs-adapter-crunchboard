'use strict';

module.exports = function getTitle(json) {
  let title = null;
  let matches;

  if (json.title) {
    matches = /^(.*) at .*$/i.exec(json.title);

    if (Array.isArray(matches)) {
      title = matches[1].trim();
    }
  }

  return title;
};
