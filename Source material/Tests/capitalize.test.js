import {expect, test} from '@jest/globals';
import capitalize from '../src/capitalize.js'

test('Correctly capitalizes string', () => {
    expect(capitalize('MaNsaArI')).toBe('Mansaari');
    expect(capitalize('MANSAARI')).toBe('Mansaari');
    expect(capitalize('mansaari')).toBe('Mansaari');
})
test('Correctly returns for empty string',() => {
    expect(capitalize('')).toBe('');
})
test('Correctly returns for null',() => {
    expect(capitalize(null)).toBe('Null');
})
test('Correctly returns for numbers',() => {
    expect(capitalize(2365)).toBe('2365');
})