const express = require('express');

const contactsRouter = express.Router();

const mdwr = require('../../middleware');
const ctrl = require('../../controllers/contactsController');

contactsRouter.get('/', ctrl.getContacts);
contactsRouter.get('/:contactID', mdwr.validateID, ctrl.getOneContact);
contactsRouter.post('/', mdwr.validateBody, ctrl.postContact);
contactsRouter.put('/:contactID', mdwr.validateID, mdwr.validateBody, ctrl.putContact);
contactsRouter.delete('/:contactID', mdwr.validateID, ctrl.deleteContact);

// contactsRouter.patch('/:contactID/favorite', mdwr.validateID, mdwr.validateBody, ctrl.patchFavorite);

module.exports = contactsRouter;
