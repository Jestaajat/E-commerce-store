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

  test('divide 0 and positive integer', () => {
    expect(createMathOperation(6,0)).toBe(NaN);
  })

  test('divide positive integer and 0', () => {
    expect(createMathOperation(0,6)).toBe(0);
  })

  test('divide floats', () => {
    expect(createMathOperation(6.5,2.5)).toBe(2.6);
  })
})