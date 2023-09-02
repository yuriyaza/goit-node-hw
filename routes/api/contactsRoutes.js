const express = require('express');
const contactsRoutes = express.Router();

const middleware = require('../../middleware');
const schema = require('../../models/contacts');
const controller = require('../../controllers/contacts');

contactsRoutes.get(
    '/',
    middleware.authentication,
    controller.getAllContacts
);
contactsRoutes.get(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    controller.getOneContact
);
contactsRoutes.post(
    '/',
    middleware.authentication,
    middleware.validateRequest(schema.contactsAllSchema),
    controller.postContact
);
contactsRoutes.put(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    middleware.validateRequest(schema.contactsAllSchema),
    controller.putContact
);
contactsRoutes.patch(
    '/:id/favorite',
    middleware.authentication,
    middleware.validateID,
    middleware.validateRequest(schema.contactsFavoriteSchema),
    controller.patchFavorite
);
contactsRoutes.delete(
    '/:id',
    middleware.authentication,
    middleware.validateID,
    controller.deleteContact
);

module.exports = { contactsRoutes };
