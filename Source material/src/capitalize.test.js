import {expect, test} from '@jest/globals';
import capitalize from './capitalize.js'

test('Correctly capitalizes string', () => {
    expect(capitalize('MaNsaArI')).toBe('Mansaari');
    expect(capitalize('MANSAARI')).toBe('Mansaari');
    expect(capitalize('mansaari')).toBe('Mansaari');
})