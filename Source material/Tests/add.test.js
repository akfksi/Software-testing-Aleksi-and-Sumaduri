import {expect, test} from '@jest/globals';
import add from '../src/add.js'

test ('adds two numbers correcly', () => {
    expect(add(1,2)).toBe(3);
    expect(add(-2,2)).toBe(0);
});