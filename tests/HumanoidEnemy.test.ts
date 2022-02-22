import { HumanoidEnemy } from '../src';

describe('HumanoidEnemy', () => {
  describe('is a class', () => {
    test('typeof Humanoidenemy returns function', () => {
      expect(typeof HumanoidEnemy).toBe('function');
    });
  });

  const enemy = new HumanoidEnemy();

  test('getDamage', () => {
    expect(typeof enemy.getDamage).toBe('number');
  });

  test('getDefense', () => {
    expect(typeof enemy.getDefense).toBe('number');
  });

  test('getHealth', () => {
    expect(typeof enemy.getHealth).toBe('number');
  });

  test('injure()', () => {
    expect(typeof enemy.injure(0)).toBe('object');
  });
});
