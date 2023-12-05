import {expect, test} from '@jest/globals';
import add from './add.js'

test ('adds two numbers correcly', () => {
    expect(add(1,2)).toBe(3);
});