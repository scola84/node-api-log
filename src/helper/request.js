export default function logRequest(logger) {
  return (request, response, next) => {
    logger.log('request', {
      connection: request,
      text: request.method() + ' ' + request.url()
    });
    next();
  };
}
