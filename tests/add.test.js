import createMathOperation from '../src/add';

describe('add.js', () => {
  test('add positive integers', () => {
    expect(createMathOperation(1,2)).toBe(3);
  })

  test('add negative integers', () => {
    expect(createMathOperation(-1,-2)).toBe(-3);
  })

  test('add positive and negative integers', () => {
    expect(createMathOperation(1,-2)).toBe(-1);
  })

  test('add floats', () => {
    expect(createMathOperation(1.5,2.5)).toBe(4);
  })
})