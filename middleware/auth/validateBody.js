const Joi = require('joi');

function validateBody(req, res, next) {
  const validateResult = schema.validate(req.body);

  if (validateResult.error) {
    let errorMessage = validateResult.error.message;
    errorMessage = errorMessage.replaceAll('"', '');
    errorMessage = errorMessage[0].toUpperCase() + errorMessage.slice(1);

    res.status(400).json({ message: errorMessage });
    return;
  }
  next();
}

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = validateBody;
