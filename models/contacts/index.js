const { Contacts } = require('./contactsDBModel');
const { contactsBodySchema } = require('./contactsValidationSchema');
const { contactsFavoriteSchema } = require('./contactsValidationSchema');

module.exports = {
    Contacts,
    contactsBodySchema,
    contactsFavoriteSchema,
};
