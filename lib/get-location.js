'use strict';

module.exports = json => {
  let location = null;

  if (json.title) {
    const matches = /^.* at .* \(((?!anywhere|remote).*)\) *$/i.exec(json.title);

    if (Array.isArray(matches)) {
      const isRemote = /remote|anywhere*/i.test(matches[1]);
      location = isRemote ? null : matches[1];
    }
  }

  return location;
};
