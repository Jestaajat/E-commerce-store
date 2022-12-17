import isDate from '../src/isDate';

describe('isDate.js', () => {
    test('Test isDate with a new Date with input', () => {
        expect(isDate(new Date(2022, 12, 24))).toBe(true);
    }) 

    test('Test isDate with a new Date without input', () => {
        expect(isDate(new Date(2022, 12, 24))).toBe(true);
    }) 

    test('Test isDate with a manual date without type', () => {
        expect(isDate(2022, 12, 24)).toBe(false);
    }) 

    test('Test isDate with no input', () => {
        expect(isDate()).toBe(false);
    }) 

    test('Test isDate with null', () => {
        expect(isDate(null)).toBe(false);
    })
}) 