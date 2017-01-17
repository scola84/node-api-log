export default class AbstractLogger {
  constructor() {
    this._id = null;
  }

  id(value) {
    this._id = value;
    return this;
  }

  _address(connection) {
    return connection && connection.address().address || '';
  }
}
