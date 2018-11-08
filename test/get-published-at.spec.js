'use strict';

import test from 'ava';

import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-08-08', getPublishedAt({published: '2016-08-08T17:49:47Z'}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
