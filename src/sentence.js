const Extract = require('./extract.js').Extract;
const Roll = require('./roll.js').Roll;

class Sentence {
  constructor(inputString) {
    this.inputString = inputString;
  }

  static toNumber(inputString) {
    return new this(inputString).toNumber;
  }

  get toNumber() {
    const commandString = Extract.commandString(this.inputString);
    return commandString && Roll.sum(commandString);
  }
}

module.exports = { Sentence };
