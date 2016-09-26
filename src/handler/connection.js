import AbstractLog from './abstract';

export default class ConnectionLog extends AbstractLog {
  constructor() {
    super();

    this._logClose = (e) => this._close(e);
    this._logError = (e) => this._error(e);
    this._logOpen = (c) => this._open(c);
    this._logRequest = (e) => this._request(e);
    this._logResponse = (e) => this._response(e);
  }

  close(value) {
    if (value === true) {
      this._source.addListener('close', this._logClose);
      this._events.add('close');
    } else if (value === false) {
      this._source.removeListener('close', this._logClose);
      this._events.delete('close');
    }

    return this;
  }

  error(value) {
    if (value === true) {
      this._source.addListener('error', this._logError);
      this._events.add('error');
    } else if (value === false) {
      this._source.removeListener('error', this._logError);
      this._events.delete('error');
    }

    return this;
  }

  open(value) {
    if (value === true) {
      this._source.addListener('open', this._logOpen);
      this._events.add('open');
    } else if (value === false) {
      this._source.removeListener('open', this._logOpen);
      this._events.delete('open');
    }

    return this;
  }

  request(value) {
    if (value === true) {
      this._source.addListener('request', this._logRequest);
      this._events.add('request');
    } else if (value === false) {
      this._source.removeListener('request', this._logRequest);
      this._events.delete('request');
    }

    return this;
  }

  response(value) {
    if (value === true) {
      this._source.addListener('response', this._logResponse);
      this._events.add('response');
    } else if (value === false) {
      this._source.removeListener('response', this._logResponse);
      this._events.delete('response');
    }

    return this;
  }

  _close(event) {
    this._log('close', event.code + ' (' + (event.reason || '') + ')',
      event.connection);
  }

  _error(error) {
    this._log('error', error.message, error.connection);
  }

  _open(event) {
    this._log('open', event.attempts, event.connection);
  }

  _request(event) {
    this._log('request', event.request.method() + ' ' + event.request.url(),
      event.connection);
  }

  _response(event) {
    this._log('response', event.response.status(),
      event.connection);
  }
}
