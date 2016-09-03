'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getCompanyName = require('./get-company-name');
const getLocation = require('./get-location');
const getRemote = require('./get-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'crunchboard';
const ADAPTER_SOURCE_URL = 'https://www.crunchboard.com';

module.exports = function getGigs(json) {
  return json.items.map((job) => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: getTitle(job),
      description: job.content,
      url: job.url,
      company_name: getCompanyName(job),
      location: getLocation(job),
      remote: getRemote(job),
      published_at: getPublishedAt(job)
    });
  });
};
