import { Item } from '../src';

describe('Item', () => {
  describe('is a class', () => {
    test('typeof Item returns function', () => {
      expect(typeof Item).toBe('function');
    });
  });
});
