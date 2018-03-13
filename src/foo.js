const Extract = require('./extract.js').Extract;

class Foo extends Extract {
  get commandString() {
    return this.inputString;
  }
}

module.exports = { Foo };
