import {expect, test} from '@jest/globals';
import get from '../src/get.js'
const object = { 'a': [{ 'b': { 'c': 3 } }] , 'b': [{'d':{'e':78}}]}

test('Get Correctly gets the right value from the path', () => {
    expect(get(object,'a[0].b.c')).toBe(3)
    expect(get(object,'b[0].d.e')).toBe(78)
})
test('Get Correctly handles problems', () => {
    expect(get(object,'b.d.c','not found')).toBe('not found')
})
