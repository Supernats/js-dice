const Foo = require('../src/foo.js').Foo;

describe('.commandString', () => {
  it('returns the input', () => {
    const inputString = ('i have got a lovely bunch of coconuts');
    expect(Foo.commandString(inputString)).toEqual(inputString);
  });
});
