const externalData = require('../models/contactsData');
const handleException = require('../utils/handleException');

async function getAllContacts(request, response, next) {
  const result = await externalData.listContacts();
  response.json(result);
}

async function getOneContact(request, response, next) {
  const { contactID } = request.params;
  const result = await externalData.getContactById(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

async function postContact(request, response, next) {
  const result = await externalData.addContact(request.body);
  response.status(201).json(result);
}

async function putContact(request, response, next) {
  const { contactID } = request.params;
  const contactData = request.body;
  const result = await externalData.updateContact(contactID, contactData);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

async function deleteContact(request, response, next) {
  const { contactID } = request.params;
  const result = await externalData.removeContact(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

module.exports = {
  getAllContacts: handleException(getAllContacts),
  getOneContact: handleException(getOneContact),
  postContact: handleException(postContact),
  putContact: handleException(putContact),
  deleteContact: handleException(deleteContact),
};
