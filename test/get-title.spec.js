'use strict';

import test from 'ava';

import getTitle from '../lib/get-title';

test('it should return the title', t => {
  t.deepEqual('Developer', getTitle({title: ' Developer at Foo Inc. (New York, New York) '}));
  t.deepEqual('Engineer', getTitle({title: ' Engineer at Bar Inc. (San Francisco '}));
  t.deepEqual('Senior Developer (iOS)', getTitle({title: ' Senior Developer (iOS) at Baz Inc. (Boston) '}));
});

test('it should return null', t => {
  t.deepEqual(null, getTitle({}));
  t.deepEqual(null, getTitle({title: 'at Company'}));
});
