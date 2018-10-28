'use strict';

import test from 'ava';
import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({title: ' Developer at Bar Inc. (Anywhere) '}));
  t.true(getIsRemote({title: ' Developer at Bar Inc. (anywhere) '}));
  t.true(getIsRemote({title: ' Developer at Foo Inc. (Anywhere / Remote / Vancouver) '}));
  t.true(getIsRemote({title: ' Developer at Baz Inc. (Remote) '}));
  t.true(getIsRemote({title: ' Developer at Baz Inc. (remote) '}));
  t.true(getIsRemote({title: ' Developer at Zaz Inc. (Remote or San Francisco) '}));
  t.true(getIsRemote({title: ' Developer at Foobar Inc. (San Jose, California (Remote position)) '}));
});

test('it should return false', t => {
  t.false(getIsRemote({}));
  t.false(getIsRemote({title: 'Developer at Foo Inc. (San Francisco)'}));
});
