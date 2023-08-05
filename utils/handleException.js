function handleException(controller) {
  return async function wrapper(request, response, next) {
    try {
      await controller(request, response, next);
    }
    catch (error) {
      response.status(500).json({ message: 'Server error' });
    }
  };
}

module.exports = handleException;
