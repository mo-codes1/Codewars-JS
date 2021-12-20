const { test, expect } = require('@jest/globals');
const withDraw = require('./function');

test("expects a withdrawal"  , () => {
  expect(withDraw(40)).toEqual([0,0,2]);
});

test("expects a withdrawal"  , () => {
  expect(withDraw(250)).toEqual([2,1,0]);
});

test("expects a withdrawal"  , () => {
  expect(withDraw(260)).toEqual([2,0,3]);
});

test("expects a withdrawal"  , () => {
  expect(withDraw(230)).toEqual([1,1,4]);
});

test("expects a withdrawal"  , () => {
  expect(withDraw(60)).toEqual([0,0,3]);
});


