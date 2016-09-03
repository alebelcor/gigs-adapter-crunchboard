'use strict';

import test from 'ava';
import getRemote from '../lib/get-remote';

test('it should return true', t => {
  t.true(getRemote({title: 'Developer at Foo Inc. (Anywhere / Remote / Vancouver)'}));
  t.true(getRemote({title: 'Developer at Bar Inc. (Anywhere)'}));
  t.true(getRemote({title: 'Developer at Baz Inc. (Remote)'}));
  t.true(getRemote({title: 'Developer at Zaz Inc. (Remote or San Francisco)'}));
});

test('it should return false', t => {
  t.false(getRemote({title: 'Developer at Foo Inc. (San Francisco)'}));
});
