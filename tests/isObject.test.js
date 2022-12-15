import isObject from '../src/isObject';

describe('isObject.js', () => {
    test('Test isObject with an Object', () => {
        expect(isObject(Object)).toBe(true);
    })
    
    test('Test isObject with a Date', () => {
        expect(isObject(Date)).toBe(true);
    }) 

    test('Test isObject with no input', () => {
        expect(isObject(null)).toBe(false);
    }) 

    test('Test isObject with no input', () => {
        expect(isObject()).toBe(false);
    }) 

    test('Test isObject with 0', () => {
        expect(isObject(0)).toBe(false);
    })
}) 