const Joi = require('joi');

const usersBodySchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const usersEmailSchema = Joi.object({
    email: Joi.string().required(),
});

module.exports = {
    usersBodySchema,
    usersEmailSchema,
};
