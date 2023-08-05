const Joi = require('joi');

function validateBody(request, response, next) {
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

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  validateBody,
};
