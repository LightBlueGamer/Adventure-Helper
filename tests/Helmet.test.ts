import { Helmet } from '../src';

describe('Helmet', () => {
  describe('is a class', () => {
    test('typeof Helmet returns function', () => {
      expect(typeof Helmet).toBe('function');
    });
  });
});
