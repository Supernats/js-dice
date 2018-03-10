class Value {
  constructor(valueString) {
    this.valueString = valueString;
  }

  static toNumber(valueString) {
    return new Value(valueString).toNumber;
  }

  get toNumber() {
    return this.isStatic ? Number(this.valueString) : this.randomValue;
  }

  get isStatic() {
    return !RegExp('d').test(this.valueString);
  }

  get randomValue() {
    return this.sign * this.unsignedRandomSum;
  }

  get dieType() {
    const arr = this.valueString.split(/d/);
    return Number(arr[arr.length - 1]);
  }

  get dieCount() {
    return this.isMultiple ? Math.abs(Number(this.valueString.split(/d/)[0])) : 1;
  }

  get isMultiple() {
    const split = this.valueString.split(/d/);

    return this.hasExplicitSign ?
      split[0].length > 1 :
      split.filter((substr) => substr.length > 0).length > 1;
  }

  get sign() {
    const split = this.valueString.split(/d/);
    const stringSign = this.hasExplicitSign ? split[0][0] : '+';
    return Number(`${stringSign}1`);
  }

  get hasExplicitSign() {
    return RegExp(/\+|-/).test(this.valueString);
  }

  get unsignedRandomSum() {
    let sum = 0;

    for (let i = 0; i < this.dieCount; i += 1) {
      sum += Math.floor(Math.random() * this.dieType) + 1;
    }

    return sum;
  }
}

module.exports = { Value };
