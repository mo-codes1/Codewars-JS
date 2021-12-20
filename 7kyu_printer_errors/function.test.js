const { test, expect } = require('@jest/globals');
const printer_error = require('./function');

test("expects to return 0 erros for letters between a and m" , () => {
  expect(printer_error("aaabbbbhaijjjm")).toEqual("0/14")

});