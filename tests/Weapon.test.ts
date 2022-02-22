import { Weapon } from '../src';

describe('Weapon', () => {
  describe('is a class', () => {
    test('typeof Weapon returns function', () => {
      expect(typeof Weapon).toBe('function');
    });
  });
});
