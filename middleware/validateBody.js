function validateBody(schema) {

  function validateFunction(request, response, next) {
    const validateResult = schema.validate(request.body);

    if (validateResult.error) {
      let errorMessage = validateResult.error.message;
      errorMessage = errorMessage.replaceAll('"', '');
      errorMessage = errorMessage[0].toUpperCase() + errorMessage.slice(1);

      response.status(400).json({ message: errorMessage });
      return;
    }
    next();
  }
  
  return validateFunction;
}

module.exports = validateBody;
