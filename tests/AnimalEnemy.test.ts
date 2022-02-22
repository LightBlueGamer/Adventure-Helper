import { AnimalEnemy } from '../src';

describe('AnimalEnemy', () => {
  describe('is a class', () => {
    test('typeof AnimalEnemy returns function', () => {
      expect(typeof AnimalEnemy).toBe('function');
    });
  });

  const enemy = new AnimalEnemy();

  test('injure()', () => {
    expect(typeof enemy.injure(0)).toBe('object');
  });
});
