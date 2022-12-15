const add = require('../src/add');

describe('add.js', () => {
  test('add positive integers', () => {
    expect(add(1,2)).toBe(3);
  })
})