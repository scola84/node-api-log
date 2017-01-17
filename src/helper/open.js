export default function logOpen(logger) {
  return (event) => {
    logger.log('open', {
      connection: event.connection
    });
  };
}
