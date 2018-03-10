const Sentence = require('../src/sentence.js').Sentence;

// I don't know how to do Jest mocking, so this ends up being an integration
// test.
describe('.toNumber', () => {
  it('returns a number when there is a valid command string', () => {
    const inputString = 'I have 3d4 love for you.';
    const max = 12;
    const min = 3;
    expect(Sentence.toNumber(inputString)).toBeGreaterThanOrEqual(min);
    expect(Sentence.toNumber(inputString)).toBeLessThanOrEqual(max);
  });

  it('returns null if there is no command string', () => {
    const inputString = 'I have love for you.';
    expect(Sentence.toNumber(inputString)).toEqual(null);
  });
});
