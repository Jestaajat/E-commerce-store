import memoize from '../src/memoize';
import {memoized} from '../src/memoize';

function testFunction(){
    return 'key';
};

const a = 'key';

describe('memoize.js', () => {
    test('Test memoize with Function', () => {
        expect(memoize(new Function)).not.toBe(false);
    }) 

    test('Test memoize with testFunction', () => {
        expect(memoize((a) => a)).toBe(memoize.Cache['key']);
    }) 
}) 