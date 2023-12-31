const Joi = require('joi');

const contactsAllSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.boolean(),
});

const contactsFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

module.exports = {
    contactsAllSchema,
    contactsFavoriteSchema,
};
