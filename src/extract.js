class Extract {
  constructor(inputString) {
    this.inputString = inputString;
  }

  static commandString(inputString) {
    return new Extract(inputString).commandString;
  }

  // I imagine most people will just use the commandString, but I found the bool
  // tester helpful in development, so I'm leaving it in for now.
  static containsCommandString(inputString) {
    return new Extract(inputString).containsCommandString;
  }

  static get numberUnitRegex() {
    return RegExp(/((\d+d\d+)|(\d+)|(d\d+))/);
  }

  static get mathUnitRegex() {
    return RegExp(/((\d+d\d+)|(\d+)|(d\d+)|(\+)|(-))/);
  }

  get containsCommandString() {
    return Extract.numberUnitRegex.test(this.inputString);
  }

  get commandString() {
    if (!this.containsCommandString) {
      return null;
    }

    return this.inputString
      .split(RegExp(/ /))
      .filter((el) => Extract.mathUnitRegex.test(el))
      .join('');
  }
}

module.exports = { Extract };
