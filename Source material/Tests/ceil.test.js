// ceil.test.js
import ceil from '../src/ceil.js';

describe('ceil', () => {
  it('should round up to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(6040, -2)).toBe(6100);
  });

 it('should handle precision as 0 by default', () => {
    expect(ceil(4.006)).toBe(5);
  });

 it('should handle positive precision values', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(123.456, 1)).toBe(123.5);
  });

 it('should handle negative precision values', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(123.456, -1)).toBe(130);
  });

  // You can also add edge cases or boundary tests
  it('should handle edge cases', () => {
    // Add your edge case tests here
  });
});