export default class ConsoleLogger {
  log(event) {
    console[event.type === 'error' ? 'error' : 'log']([
      event.date.toISOString(),
      event.id,
      event.name,
      event.type,
      event.address || '',
      event.text || ''
    ].join(' - '));
  }
}
