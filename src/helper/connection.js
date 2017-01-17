export default function logConnection(logger) {
  return (connection) => {
    logger.log('connect', {
      connection
    });
  };
}
