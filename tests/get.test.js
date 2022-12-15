import get from '../src/get'

const TEST_OBJECT = { 'a': [{ 'b': { 'c': 3 } }] };

describe('get.js', () => {
  test('get path of an object', () => {
    expect(get(TEST_OBJECT, 'a[0].b.c')).toBe(3);
  })

  test('get path of an object', () => {
    expect(get(TEST_OBJECT, ['a', '0', 'b', 'c'])).toBe(3)
  })

  test('get path of an object for undefined resolved values', () => {
    expect(get(TEST_OBJECT, 'a.b.c', 'default')).toBe('default')
  })
})