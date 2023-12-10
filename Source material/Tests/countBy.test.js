import countBy from '../src/countBy'; // Adjust the path based on your project structure
import baseAssignValue from '../src/.internal/baseAssignValue';

describe('countBy', () => {
 /* it('should count elements based on iteratee function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];*/

  /*  const result = countBy(users, value => value.active);

    expect(result).toEqual({ true: 2, false: 1 });*/
  });

 /* it('should handle different types of keys', () => {
    const collection = ['apple', 'banana', 'orange'];

    const result = countBy(collection, fruit => fruit.length);

    expect(result).toEqual({ 5: 2, 6: 1 });
  });*/

  it('should handle empty collection', () => {
    const result = countBy([], value => value);

    expect(result).toEqual({});
  });

/* it('should handle undefined and null values in collection', () => {
    const collection = [1, undefined, null, 2, undefined, null, 1];

    const result = countBy(collection, value => value);

    expect(result).toEqual({ 1: 2, undefined: 2, null: 2, 2: 1 });
  });

});*/
