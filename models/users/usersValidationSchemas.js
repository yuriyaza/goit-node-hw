const Joi = require('joi');

const usersBodySchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = { usersBodySchema };
