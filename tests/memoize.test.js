import memoize from '../src/memoize';
import {memoized} from '../src/memoize';

const res = 'result';
const func = memoize((res) => res);

describe('memoize.js', () => {
    test('Test memoize with Function', () => {
        expect(memoize(Function)).not.toBe(false);
    }) 

    test('Test memoize with test result', () => {
        expect(func(res)).toBe('result');
    })
    
    test('Test memoize cache', () => {
        expect(func.Cache).toBe(undefined);
    }) 
}) 