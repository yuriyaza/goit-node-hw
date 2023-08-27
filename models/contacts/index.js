const { Contacts } = require('./contactsDBModel');
const { contactsBodySchema } = require('./contactsValidationSchemas');
const { contactsFavoriteSchema } = require('./contactsValidationSchemas');

module.exports = {
    Contacts,
    contactsBodySchema,
    contactsFavoriteSchema,
};
