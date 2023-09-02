const express = require('express');
const contactsRoute = express.Router();

const middleware = require('../../middleware');
const schema = require('../../models/contacts');
const controller = require('../../controllers/contacts');

contactsRoute.get(
    '/',
    middleware.authentication,
    controller.getAllContacts
);
contactsRoute.get(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    controller.getOneContact
);
contactsRoute.post(
    '/',
    middleware.authentication,
    middleware.validateRequest(schema.contactsBodySchema),
    controller.postContact
);
contactsRoute.put(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    middleware.validateRequest(schema.contactsBodySchema),
    controller.putContact
);
contactsRoute.patch(
    '/:id/favorite',
    middleware.authentication,
    middleware.validateID,
    middleware.validateRequest(schema.contactsFavoriteSchema),
    controller.patchFavorite
);
contactsRoute.delete(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    controller.deleteContact
);

module.exports = { contactsRoute };
