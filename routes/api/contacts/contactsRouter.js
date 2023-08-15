const express = require('express');

const contactsRouter = express.Router();

const mdwr = require('../../../middleware/contacts');
const ctrl = require('../../../controllers/contacts');

contactsRouter.get('/', ctrl.getContacts);
contactsRouter.get('/:contactID', mdwr.validateID, ctrl.getOneContact);
contactsRouter.post('/', mdwr.validateBody, ctrl.postContact);
contactsRouter.put('/:contactID', mdwr.validateID,  ctrl.putContact);
contactsRouter.patch('/:contactID/favorite', mdwr.validateID, mdwr.validateFavorite, ctrl.patchContact);
contactsRouter.delete('/:contactID', mdwr.validateID, ctrl.deleteContact);

module.exports = contactsRouter;
