export default function logError(logger, transform = (e) => e) {
  return (error) => {
    error = transform(error);

    logger.log('error', {
      connection: error.connection || error.request,
      text: error.message
    });
  };
}
