class Extract {
  constructor(inputString) {
    this.inputString = inputString;
  }

  static commandString(inputString) {
    return new this(inputString).commandString;
  }

  // I imagine most people will just use the commandString, but I found the bool
  // tester helpful in development, so I'm leaving it in for now.
  static containsCommandString(inputString) {
    return new this(inputString).containsCommandString;
  }

  static get numberUnitRegex() {
    return RegExp(/((\d+d\d+)|(\d+)|(d\d+))/);
  }

  get numberUnitRegex() {
    return Object.getPrototypeOf(this).constructor.numberUnitRegex;
  }

  static get mathUnitRegex() {
    return RegExp(/((\d+d\d+)|(\d+)|(d\d+)|(\+)|(-))/);
  }

  get mathUnitRegex() {
    return Object.getPrototypeOf(this).constructor.mathUnitRegex;
  }

  get containsCommandString() {
    return this.numberUnitRegex.test(this.inputString);
  }

  get commandString() {
    if (!this.containsCommandString) {
      return null;
    }

    return this.inputString
      .split(RegExp(/ /))
      .filter((el) => this.mathUnitRegex.test(el))
      .join('');
  }
}

module.exports = { Extract };
