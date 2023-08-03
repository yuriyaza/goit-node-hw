const express = require('express');
const contactsRouter = express.Router();

const mdwr = require('../../middleware/validateBody');
const ctrl = require('../../controllers/contactsController');

contactsRouter.get('/', ctrl.getAllContacts);
contactsRouter.get('/:contactID', ctrl.getOneContact);
contactsRouter.post('/', mdwr.validateBody, ctrl.postContact);
contactsRouter.put('/:contactID', mdwr.validateBody, ctrl.putContact);
contactsRouter.delete('/:contactID', ctrl.deleteContact);

module.exports = contactsRouter;
