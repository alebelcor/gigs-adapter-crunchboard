'use strict';

module.exports = function getCompanyName(json) {
  let companyName = null;
  let matches;

  if (json.title) {
    matches = /^.* at (.[^(]*) .*$/i.exec(json.title);

    if (Array.isArray(matches)) {
      companyName = matches[1].trim();
    }
  }

  return companyName;
};
