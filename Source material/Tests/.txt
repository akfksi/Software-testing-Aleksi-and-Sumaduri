import isEmpty from '../src/isEmpty'; // Adjust the path based on your project structure
import getTag from '../src/.internal/getTag';
import isArguments from '../src/isArguments';
import isArrayLike from '../src/isArrayLike';
import isBuffer from '../src/isBuffer';
import isPrototype from '../src/.internal/isPrototype';
import isTypedArray from '../src/isTypedArray';

describe('isEmpty', () => {
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for arguments object', () => {
    function testFunction() {
      expect(isEmpty(arguments)).toBe(true);
    }
    testFunction();
  });

 
});