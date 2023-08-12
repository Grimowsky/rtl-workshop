import { describe, it, expect } from 'vitest';
import { add } from './utilTest';

describe('Util test', () => {
  it('Should add 2 numbers', () => {
    expect(add(2, 2)).eq(4);
  });
});
