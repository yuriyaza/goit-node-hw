const db = require('../models/contactsData');
const Joi = require('joi');
const handleException = require('../utils/handleException');

const getAllContacts = async (request, response, next) => {
  const result = await db.listContacts();
  response.json(result);
};

const getOneContact = async (request, response, next) => {
  const { contactID } = request.params;
  const result = await db.getContactById(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
};

const postContact = async (request, response, next) => {
  const data = request.body;
  const validateResult = rules.validate(data); 
  if (validateResult.error) {
    const errorMessage = validateResult.error.message.replaceAll('"', '');
    response.status(400).json({ message: errorMessage });
    return;
  }
  const result = await db.addContact(request.body);
  response.status(201).json(result);
};

const deleteContact = async (request, response, next) => {
  const { contactID } = request.params;
  const result = await db.removeContact(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
};

const putContact = async (request, response, next) => {
  const { contactID } = request.params;
  const data = request.body;
  const validateResult = rules.validate(data);
  if (validateResult.error) {
    const errorMessage = validateResult.error.message.replaceAll('"', '');
    response.status(400).json({ message: errorMessage });
    return;
  }
  const result = await db.updateContact(contactID, data);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
};

const rules = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  getAllContacts: handleException(getAllContacts),
  getOneContact: handleException(getOneContact),
  postContact: handleException(postContact),
  deleteContact: handleException(deleteContact),
  putContact: handleException(putContact),
};
