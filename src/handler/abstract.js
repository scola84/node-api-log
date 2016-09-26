export default class AbstractLog {
  constructor() {
    this._id = null;
    this._name = null;
    this._source = null;
    this._targets = [];
    this._events = new Set();
  }

  end() {
    this._events.forEach((event) => {
      this[event](false);
    });
  }

  id(value) {
    this._id = value;
    return this;
  }

  name(value) {
    this._name = value;
    return this;
  }

  source(value) {
    this._source = value;
    return this;
  }

  target(value) {
    this._targets.push(value);
    return this;
  }

  events(value) {
    value.forEach((event) => {
      this[event](true);
    });

    return this;
  }

  _log(type, text, socket) {
    this._targets.forEach((target) => {
      target.log({
        address: this._address(socket),
        date: new Date(),
        id: this._id,
        name: this._name,
        text,
        type
      });
    });
  }

  _address(socket) {
    return socket && socket.address().address || '';
  }
}
