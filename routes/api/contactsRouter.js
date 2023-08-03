const express = require('express');
const contactsRouter = express.Router();

const controllers = require('../../controllers/contactsController')

contactsRouter.get('/', controllers.getAllContacts);
contactsRouter.get('/:contactID', controllers.getOneContact);
contactsRouter.post('/', controllers.postContact);
contactsRouter.delete('/:contactID', controllers.deleteContact);
contactsRouter.put('/:contactID', controllers.putContact);

module.exports = contactsRouter;
