import createMathOperation from '../src/divide';

describe('divide.js', () => {
  test('divide positive integers', () => {
    expect(createMathOperation(6,2)).toBe(3);
  })

  test('divide negative integers', () => {
    expect(createMathOperation(-6,-2)).toBe(3);
  })

  test('divide positive and negative integers', () => {
    expect(createMathOperation(6,-2)).toBe(-3);
  })

  test('divide floats', () => {
    expect(createMathOperation(6.5,2.5)).toBe(2.6);
  })
})