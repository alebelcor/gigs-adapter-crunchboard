'use strict';

import test from 'ava';
import getLocation from '../lib/get-location';

test('it should return the location', t => {
  t.deepEqual('San Francisco', getLocation({title: 'Developer at Foo Inc. (San Francisco)'}));
  t.deepEqual('Mountain View, CA, United States', getLocation({title: 'Developer at Bar LLC (Mountain View, CA, United States)'}));
  t.deepEqual('New York, NY, United States', getLocation({title: 'Developer at Baz Corp. (on behalf of hiring company) (New York, NY, United States)'}));
});

test('it should return null', t => {
  t.deepEqual(null, getLocation({}));
  t.deepEqual(null, getLocation({title: 'Developer (Remote, OR, United States)'}));
  t.deepEqual(null, getLocation({title: 'Developer (Anywhere / Remote / Vancouver)'}));
});
