const Extract = require('../src/extract.js').Extract;

describe('.containsCommandString', () => {
  it('is true for a flat number by itself', () => {
    const inputString = ('2');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for multiple flat numbers by themselves', () => {
    const inputString = ('2 + 3 + 5');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with no number by itself', () => {
    const inputString = ('d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for two dice with no number by themselves', () => {
    const inputString = ('d4 + d6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number by itself', () => {
    const inputString = ('3d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number by itself', () => {
    const inputString = ('3d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for all the different things together by themselves', () => {
    const inputString = ('3d4 + 5d6 + 7 + 3');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('can handle bunch together even if there are some negatives, but by themselves', () => {
    const inputString = ('5d6 - 3d4 + 12 - 6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('can handle bunch together even if there are some negatives without spaces, but by themselves', () => {
    const inputString = ('5d6-3d4+12-6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a flat number with other stuff in front', () => {
    const inputString = ('i have 2');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for multiple flat numbers with other stuff in front', () => {
    const inputString = ('i have 2 + 3 + 5');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with no number with other stuff in front', () => {
    const inputString = ('i have d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for two dice with no number with other stuff in front', () => {
    const inputString = ('i have d4 + d6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number with other stuff in front', () => {
    const inputString = ('i have 3d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number with other stuff in front', () => {
    const inputString = ('i have 3d4');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for all the different things together with other stuff in front', () => {
    const inputString = ('i have 3d4 + 5d6 + 7 + 3');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a bunch together even if there are some negatives, but with other stuff in front', () => {
    const inputString = ('i have 5d6 - 3d4 + 12 - 6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a bunch together even if there are some negatives without spaces, but with other stuff in front', () => {
    const inputString = ('i have 5d6-3d4+12-6');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is false for a sentence that has nothing mathematical', () => {
    const inputString = ('i have got a lovely bunch of coconuts');
    expect(Extract.containsCommandString(inputString)).toBe(false);
  });

  it('is false for a sentence that has nothing mathematical', () => {
    const inputString = ('i have got a lovely bunch of coconuts');
    expect(Extract.containsCommandString(inputString)).toBe(false);
  });

  it('is false for a sentence that has just a plus', () => {
    const inputString = ('i have got a lovely bunch of coconuts +');
    expect(Extract.containsCommandString(inputString)).toBe(false);
  });

  it('is false for a sentence that has just a minus', () => {
    const inputString = ('i have got a lovely bunch of coconuts -');
    expect(Extract.containsCommandString(inputString)).toBe(false);
  });

  it('is true for a flat number with other stuff at the end', () => {
    const inputString = ('2 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for multiple flat numbers with other stuff at the end', () => {
    const inputString = ('2 + 3 + 5 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with no number with other stuff at the end', () => {
    const inputString = ('d4 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for two dice with no number with other stuff at the end', () => {
    const inputString = ('d4 + d6 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number with other stuff at the end', () => {
    const inputString = ('3d4 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a die with a number with other stuff at the end', () => {
    const inputString = ('3d4 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for all the different things together with other stuff at the end', () => {
    const inputString = ('3d4 + 5d6 + 7 + 3 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a bunch together even if there are some negatives, but with other stuff at the end', () => {
    const inputString = ('5d6 - 3d4 + 12 - 6 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });

  it('is true for a bunch together even if there are some negatives without spaces, but with other stuff at the end', () => {
    const inputString = ('5d6-3d4+12-6 i have');
    expect(Extract.containsCommandString(inputString)).toBe(true);
  });
});

describe('.commandString', () => {
  it('returns the whole string, minus spaces, for a flat number by itself', () => {
    const inputString = ('2');
    expect(Extract.commandString(inputString)).toEqual('2');
  });

  it('returns the whole string, minus spaces, for multiple flat numbers by themselves', () => {
    const inputString = ('2 + 3 + 5');
    expect(Extract.commandString(inputString)).toEqual('2+3+5');
  });

  it('returns the whole string, minus spaces, for a die with no number by itself', () => {
    const inputString = ('d4');
    expect(Extract.commandString(inputString)).toEqual('d4');
  });

  it('returns the whole string, minus spaces, for two dice with no number by themselves', () => {
    const inputString = ('d4 + d6');
    expect(Extract.commandString(inputString)).toEqual('d4+d6');
  });

  it('returns the whole string, minus spaces, for a die with a number by itself', () => {
    const inputString = ('3d4');
    expect(Extract.commandString(inputString)).toEqual('3d4');
  });

  it('returns the whole string, minus spaces, for all the different things together by themselves', () => {
    const inputString = ('3d4 + 5d6 + 7 + 3');
    expect(Extract.commandString(inputString)).toEqual('3d4+5d6+7+3');
  });

  it('returns the number for a flat number with other stuff in front', () => {
    const inputString = ('i have 2');
    expect(Extract.commandString(inputString)).toEqual('2');
  });

  it('returns the numbers, minus spaces, for multiple flat numbers with other stuff in front', () => {
    const inputString = ('i have 2 + 3 + 5');
    expect(Extract.commandString(inputString)).toEqual('2+3+5');
  });

  it('returns the the die for a die with no number with other stuff in front', () => {
    const inputString = ('i have d4');
    expect(Extract.commandString(inputString)).toEqual('d4');
  });

  it('returns the dice, minus spaces, for two dice with no number with other stuff in front', () => {
    const inputString = ('i have d4 + d6');
    expect(Extract.commandString(inputString)).toEqual('d4+d6');
  });

  it('returns the number and die for a die with a number with other stuff in front', () => {
    const inputString = ('i have 3d4');
    expect(Extract.commandString(inputString)).toEqual('3d4');
  });

  it('returns a dope command string, minus spaces, for all the different things together with other stuff in front', () => {
    const inputString = ('i have 3d4 + 5d6 + 7 + 3');
    expect(Extract.commandString(inputString)).toEqual('3d4+5d6+7+3');
  });

  it('returns a dope command string, minus spaces, for a bunch together even if there are some negatives, but with other stuff in front', () => {
    const inputString = ('i have 5d6 - 3d4 + 12 - 6');
    expect(Extract.commandString(inputString)).toEqual('5d6-3d4+12-6');
  });

  it('returns a dope command string, minus spaces, for a bunch together even if there are some negatives without spaces, but with other stuff in front', () => {
    const inputString = ('i have 5d6-3d4+12-6');
    expect(Extract.commandString(inputString)).toEqual('5d6-3d4+12-6');
  });

  it('returns null for a sentence that has nothing mathematical', () => {
    const inputString = ('i have got a lovely bunch of coconuts');
    expect(Extract.commandString(inputString)).toEqual(null);
  });

  it('returns null for a sentence that has nothing mathematical', () => {
    const inputString = ('i have got a lovely bunch of coconuts');
    expect(Extract.commandString(inputString)).toEqual(null);
  });

  it('returns null for a sentence that has just a plus', () => {
    const inputString = ('i have got a lovely bunch of coconuts +');
    expect(Extract.commandString(inputString)).toEqual(null);
  });

  it('returns null for a sentence that has just a minus', () => {
    const inputString = ('i have got a lovely bunch of coconuts -');
    expect(Extract.commandString(inputString)).toEqual(null);
  });

  it('returns a dope command string for a flat number with other stuff at the end', () => {
    const inputString = ('2 i have');
    expect(Extract.commandString(inputString)).toEqual('2');
  });

  it('returns a dope command string for multiple flat numbers with other stuff at the end', () => {
    const inputString = ('2 + 3 + 5 i have');
    expect(Extract.commandString(inputString)).toEqual('2+3+5');
  });

  it('returns a dope command string for a die with no number with other stuff at the end', () => {
    const inputString = ('d4 i have');
    expect(Extract.commandString(inputString)).toEqual('d4');
  });

  it('returns a dope command string for two dice with no number with other stuff at the end', () => {
    const inputString = ('d4 + d6 i have');
    expect(Extract.commandString(inputString)).toEqual('d4+d6');
  });

  it('returns a dope command string for a die with a number with other stuff at the end', () => {
    const inputString = ('3d4 i have');
    expect(Extract.commandString(inputString)).toEqual('3d4');
  });

  it('returns a dope command string for all the different things together with other stuff at the end', () => {
    const inputString = ('3d4 + 5d6 + 7 + 3 i have');
    expect(Extract.commandString(inputString)).toEqual('3d4+5d6+7+3');
  });

  it('returns a dope command string for a bunch together even if there are some negatives, but with other stuff at the end', () => {
    const inputString = ('5d6 - 3d4 + 12 - 6 i have');
    expect(Extract.commandString(inputString)).toEqual('5d6-3d4+12-6');
  });

  it('returns a dope command string for a bunch together even if there are some negatives without spaces, but with other stuff at the end', () => {
    const inputString = ('5d6-3d4+12-6 i have');
    expect(Extract.commandString(inputString)).toEqual('5d6-3d4+12-6');
  });
});
