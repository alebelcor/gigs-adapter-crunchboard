'use strict';

import test from 'ava';

import getUrl from '../lib/get-url';

test('it should return the url', t => {
  t.deepEqual('foo.bar', getUrl({link: {href: 'foo.bar'}}));
});

test('it should return null', t => {
  t.deepEqual(null, getUrl({}));
});
