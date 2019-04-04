'use strict';

const applyCustomFind = require('./arrayMethodFind');

const source = [0, 10, 20, 30];
applyCustomFind();

test('`find2` is added to [].__proto__', () => {
  expect([].find2)
    .toBeInstanceOf(Function);
});

test('for find(item => item > 10)', () => {
  expect(source.find2(x => x > 10))
    .toBe(20);
});

test('for find(item => item > 100)', () => {
  expect(source.find2(x => x > 100))
    .toBe(undefined);
});

test('undefined is returned for [])', () => {
  expect([].find2(x => true))
    .toBe(undefined);
});

test('for find(item => item > 0)', () => {
  expect(source.find2(x => x > 0))
    .toBe(10);
});

test('for find((item, index, arr) => arr === source))', () => {
  expect(source.find2((x, i, arr) => arr === source))
    .toBe(0);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
