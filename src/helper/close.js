export default function logClose(logger) {
  return (event) => {
    logger.log('close', {
      connection: event.connection
    });
  };
}
