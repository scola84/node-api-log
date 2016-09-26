import AbstractLog from './abstract';

export default class RouterLog extends AbstractLog {
  constructor() {
    super();

    this._logError = (c) => this._error(c);
    this._logRequest = (rq, rs, n) => this._request(rq, rs, n);
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

  request(value) {
    if (value === true) {
      this._source.filter(this._logRequest);
    }

    return this;
  }

  _error(error) {
    this._log('error', error.message, error.request.connection());
  }

  _request(request, response, next) {
    this._log('request', request.method() + ' ' + request.url(),
      request.connection());

    next();
  }
}
