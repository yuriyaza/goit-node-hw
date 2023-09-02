const { Contacts } = require('./contactsDBModel');
const { contactsAllSchema } = require('./contactsValidationSchemas');
const { contactsFavoriteSchema } = require('./contactsValidationSchemas');

module.exports = {
    Contacts,
    contactsAllSchema,
    contactsFavoriteSchema,
};
