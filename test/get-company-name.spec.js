'use strict';

import test from 'ava';
import getCompanyName from '../lib/get-company-name';

test('it should return the company name', t => {
  t.deepEqual('Foo Inc.', getCompanyName({title: 'Developer at Foo Inc. (San Francisco)'}));
  t.deepEqual('Bar LLC', getCompanyName({title: 'Developer at Bar LLC (Brooklyn, NY)'}));
  t.deepEqual('Baz Corp.', getCompanyName({title: 'Developer at Baz Corp. (Los Angeles)'}));
  t.deepEqual('Foobar Inc.', getCompanyName({title: 'Developer at Foobar Inc. (San Jose (Remote position))'}));
});

test('it should return null', t => {
  t.deepEqual(null, getCompanyName({}));
  t.deepEqual(null, getCompanyName({title: 'Developer (San Francisco)'}));
});
