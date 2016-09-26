import ConnectionLog from './connection';

export default class ConnectorLog extends ConnectionLog {
  constructor() {
    super();

    this._logConnection = (c) => this._connection(c);
  }

  connection(value) {
    if (value === true) {
      this._source.addListener('connection', this._logConnection);
      this._events.add('connection');
    } else if (value === false) {
      this._source.removeListener('connection', this._logConnection);
      this._events.delete('connection');
    }

    return this;
  }

  _connection(connection) {
    this._log('connect', '', connection);
  }
}
