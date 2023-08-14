const express = require('express');
const { validateAllSchema, validateFavoriteSchema } = require('../../models/contactsDataModel');

const contactsRouter = express.Router();

const mdwr = require('../../middleware');
const ctrl = require('../../controllers/contactsController');

contactsRouter.get('/', ctrl.getContacts);
contactsRouter.get('/:contactID', mdwr.validateID, ctrl.getOneContact);
contactsRouter.post('/', mdwr.validateBody(validateAllSchema), ctrl.postContact);
contactsRouter.put('/:contactID', mdwr.validateID,  ctrl.putContact);
contactsRouter.patch('/:contactID/favorite', mdwr.validateID, mdwr.validateBody(validateFavoriteSchema), ctrl.putContact);
contactsRouter.delete('/:contactID', mdwr.validateID, ctrl.deleteContact);

module.exports = contactsRouter;
