'use strict';

module.exports = json => {
  let companyName = null;

  if (json.title) {
    const matches = /^.* at (.[^(]*) .*$/i.exec(json.title);

    if (Array.isArray(matches)) {
      companyName = matches[1].trim();
    }
  }

  return companyName;
};
