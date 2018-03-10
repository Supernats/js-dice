const Roll = require('../src/roll.js').Roll;

describe('::sum', () => {
  it('can handle a flat number', () => {
    const val = Roll.sum('2');
    const max = 2;
    const min = 2;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle multiple flat numbers', () => {
    const val = Roll.sum('2 + 3 + 5');
    const max = 10;
    const min = 10;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle a die with no number', () => {
    const val = Roll.sum('d4');
    const max = 4;
    const min = 1;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle two dice with no number', () => {
    const val = Roll.sum('d4 + d6');
    const max = 10;
    const min = 2;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle a die with a number', () => {
    const val = Roll.sum('3d4');
    const max = 12;
    const min = 3;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle a die with a number', () => {
    const val = Roll.sum('3d4');
    const max = 12;
    const min = 3;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle all the different things together', () => {
    const val = Roll.sum('3d4 + 5d6 + 7 + 3');
    const max = 52;
    const min = 19;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle some negatives', () => {
    const val = Roll.sum('5d6 - 3d4 + 12 - 6');
    const max = 33;
    const min = -1;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('works without spaces', () => {
    const val = Roll.sum('5d6-3d4+12-6');
    const max = 32;
    const min = -1;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });
});
