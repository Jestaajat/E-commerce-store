import memoize from '../src/memoize';

const TEST_OBJECT = 'result';
const TEST_FUNCTION = memoize((TEST_OBJECT) => TEST_OBJECT);

describe('memoize.js', () => {
    test('Test memoize with Function', () => {
        expect(memoize(Function)).not.toBe(false);
    }) 

    test('Test memoize with test result', () => {
        expect(TEST_FUNCTION(TEST_OBJECT)).toBe('result');
    })
    
    test('Test memoize cache', () => {
        expect(TEST_FUNCTION(TEST_OBJECT).Cache).toBe(undefined);
    }) 
}) 