const { test, expect } = require('@jest/globals');
const atomicNumber = require('./function');

test("expects to return 1 shell" , () => {
  expect(atomicNumber(1)).toEqual([1]);
});

test("expects to return 2 full shells" , () => {
  expect(atomicNumber(10)).toEqual([2,8]);
});

test("expects to return 2 full shells and one partial shell" , () => {
  expect(atomicNumber(11)).toEqual([2,8,1]);
});

test("expects to return 2 full shells and one partial shell" , () => {
  expect(atomicNumber(22)).toEqual([2,8,12]);
});

test("expects to return 2 full shells and one partial shell" , () => {
  expect(atomicNumber(23)).toEqual([2,8,13]);
});

test("expects to return 3 full shells and one partial shell" , () => {
  expect(atomicNumber(47)).toEqual([2,8,18,19]);
});

test("expects to return 3 full shells and one partial shell" , () => {
  expect(atomicNumber(50)).toEqual([2,8,18,22]);
});

test("expects to return 4 full shells" , () => {
  expect(atomicNumber(60)).toEqual([2,8,18,32]);
});

test("expects to return 4 full shells and one partial shell" , () => {
  expect(atomicNumber(61)).toEqual([2,8,18,32,1]);
});







