import isDate from '../src/isDate';

describe('isDate.js', () => {
    test('Test isDate with a new Date', () => {
        expect(isDate(new Date)).toBe(true);
    }) 

    test('Test isDate with no input', () => {
        expect(isDate()).toBe(false);
    }) 

    test('Test isDate with 0', () => {
        expect(isDate(0)).toBe(false);
    })
}) 