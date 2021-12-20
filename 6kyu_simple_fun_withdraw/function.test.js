const { test, expect } = require('@jest/globals');
const withDraw = require('./function');

test("expects a withdrawal"  , () => {
  expect(withDraw(40)).toEqual([0,0,2]);
});