'use strict';

module.exports = json => {
  let title = null;

  if (json.title) {
    const matches = /^(.*) at .*$/i.exec(json.title);

    if (Array.isArray(matches)) {
      title = matches[1].trim();
    }
  }

  return title;
};
