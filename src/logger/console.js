import AbstractLogger from './abstract';

export default class ConsoleLogger extends AbstractLogger {
  log(type, data = {}) {
    console.log([
      new Date().toISOString(),
      this._id || '',
      type,
      this._address(data.connection),
      data.text || ''
    ].join(' - '));
  }
}
