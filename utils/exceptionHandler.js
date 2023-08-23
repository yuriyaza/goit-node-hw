function exceptionHandler(controller) {

  return async function handler(request, response, next) {
        try {
            await controller(request, response, next);
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    };

}

module.exports = exceptionHandler;
