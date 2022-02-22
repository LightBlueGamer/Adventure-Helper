import { Player } from '../src';

describe('Player', () => {
  describe('is a class', () => {
    test('typeof Player returns function', () => {
      expect(typeof Player).toBe('function');
    });
  });

  const player = new Player();

  test('getDamage', () => {
    expect(typeof player.getDamage).toBe('number');
  });

  test('getDefense', () => {
    expect(typeof player.getDefense).toBe('number');
  });

  test('getHealth', () => {
    expect(typeof player.getHealth).toBe('number');
  });

  test('getMana', () => {
    expect(typeof player.getMana).toBe('number');
  });

  test('getStamina', () => {
    expect(typeof player.getStamina).toBe('number');
  });

  test('injure()', () => {
    expect(typeof player.injure(0)).toBe('object');
  });
});
