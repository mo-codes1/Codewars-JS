const { test, expect } = require('@jest/globals');
const withDraw = require('./function');

test("expects to return 2 £20 notes"  , () => {
  expect(withDraw(40)).toEqual([0,0,2]);
});

test("expects to return 2 £100 notes and 1 £50 note"  , () => {
  expect(withDraw(250)).toEqual([2,1,0]);
});

test("expects to return 2 £100 notes and 3 £20 notes"  , () => {
  expect(withDraw(260)).toEqual([2,0,3]);
});

test("expects to return 1 £100 note, 1 £50 note and 4 £20 notes"  , () => {
  expect(withDraw(230)).toEqual([1,1,4]);
});

test("expects to return 3 £20 notes"  , () => {
  expect(withDraw(60)).toEqual([0,0,3]);
});


