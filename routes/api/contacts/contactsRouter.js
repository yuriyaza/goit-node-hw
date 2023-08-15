const express = require('express');

const contactsRouter = express.Router();

const mdwr = require('../../../middleware/contacts');
const ctrl = require('../../../controllers/contacts');

contactsRouter.get('/', ctrl.getContacts);
contactsRouter.get('/:id', mdwr.validateID, ctrl.getOneContact);
contactsRouter.post('/', mdwr.validateBody, ctrl.postContact);
contactsRouter.put('/:id', mdwr.validateID,  ctrl.putContact);
contactsRouter.patch('/:id/favorite', mdwr.validateID, mdwr.validateFavorite, ctrl.patchContact);
contactsRouter.delete('/:id', mdwr.validateID, ctrl.deleteContact);

module.exports = contactsRouter;
