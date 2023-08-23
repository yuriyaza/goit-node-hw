const express = require('express');
const contactsRouter = express.Router();

const mdwr = require('../../../middleware/contacts');
const auth = require('../../../middleware/auth')
const ctrl = require('../../../controllers/contacts');

contactsRouter.get('/', auth.authenticate, ctrl.getContacts);
contactsRouter.get('/:id', auth.authenticate, mdwr.validateID, ctrl.getOneContact);
contactsRouter.post('/', auth.authenticate, mdwr.validateBody, ctrl.postContact);
contactsRouter.put('/:id', auth.authenticate, mdwr.validateID, mdwr.validateBody, ctrl.putContact);
contactsRouter.patch('/:id/favorite', auth.authenticate, mdwr.validateID, mdwr.validateFavorite, ctrl.patchContact);
contactsRouter.delete('/:id', auth.authenticate, mdwr.validateID, ctrl.deleteContact);

module.exports = contactsRouter;
