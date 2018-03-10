const Value = require('../src/value.js').Value;

describe('.toNumber()', () => {
  it('can handle a flat number', () => {
    const val = Value.toNumber('2');
    const max = 2;
    const min = 2;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle a die with no number', () => {
    const val = Value.toNumber('d4');
    const max = 4;
    const min = 1;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle a die with a number', () => {
    const val = Value.toNumber('3d4');
    const max = 12;
    const min = 3;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly positive flat number', () => {
    const val = Value.toNumber('+2');
    const max = 2;
    const min = 2;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly positive die with no number', () => {
    const val = Value.toNumber('+d4');
    const max = 4;
    const min = 1;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly positive die with a number', () => {
    const val = Value.toNumber('+3d4');
    const max = 12;
    const min = 3;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly negative flat number', () => {
    const val = Value.toNumber('-2');
    const max = -2;
    const min = -2;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly negative die with no number', () => {
    const val = Value.toNumber('-d4');
    const max = -1;
    const min = -4;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('can handle an explicitly negative die with a number', () => {
    const val = Value.toNumber('-3d4');
    const max = -3;
    const min = -12;
    expect(val).toBeGreaterThanOrEqual(min);
    expect(val).toBeLessThanOrEqual(max);
  });

  it('does not return a static number when it should be random', () => {
    const filledArray = Array.from(new Array(1000)).map(() => Value.toNumber('d4'));
    const semiUniqueArray = filledArray.filter((el) => el !== filledArray[0]);
    expect(semiUniqueArray.length).toBeGreaterThan(1);
  });

  it('produces all possible values given a large enough sample size', () => {
    const expected = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const rolls = Array.from(new Array(10000))
      .map(() => Value.toNumber('3d4'))
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a - b);

    expect(rolls).toEqual(expected);
  });
});
