const Value = require('./value.js').Value;

class Roll {
  constructor(commandString) {
    this.commandString = commandString;
  }

  static sum(commandString) {
    return new Roll(commandString).sum;
  }

  get numericals() {
    return this.commandString
      .replace(/\s/g, '')
      .split(/([+ -]?\d*d*\d+)/)
      .filter((el) => el.length);
  }

  get sum() {
    return this.numericals
      .map((valueString) => Value.toNumber(valueString))
      .reduce((num, total) => num + total);
  }
}

module.exports = { Roll };
