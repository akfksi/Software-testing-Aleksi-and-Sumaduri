import {expect, test} from '@jest/globals';
import isArrayLikeObject from'../src/isArrayLikeObject.js'

test('Correctly determines if array object is arraylike', ()=> {
    expect(isArrayLikeObject(['one', 'two', 'three'])).toBe(true);
})
test('Correctly determines that string object is not arraylike', ()=> {
    expect(isArrayLikeObject('[one, two ,three]')).toBe(false);
})
test('Correctly determines if variable array object is arraylike', ()=> {
    const array_name = [1,'two',343];
    expect(isArrayLikeObject(array_name)).toBe(true);
})
