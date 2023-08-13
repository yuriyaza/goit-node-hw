const handleException = require('../utils/handleException');
const Contacts = require('../models/contactsDBModel.js');

async function getContacts(request, response, next) {
  const result = await Contacts.find();
  response.json(result);
}

async function getOneContact(request, response, next) {
  const { contactID } = request.params;
  const result = await Contacts.findOne({ _id: contactID });
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

async function postContact(request, response, next) {
  const result = await Contacts.create(request.body);
  response.status(201).json(result);
}

async function putContact(request, response, next) {
  const { contactID } = request.params;
  const contactData = request.body;
  const result = await Contacts.findByIdAndUpdate(contactID, contactData, { new: true });
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

async function deleteContact(request, response, next) {
  const { contactID } = request.params;
  const result = await Contacts.findByIdAndDelete(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

module.exports = {
  getContacts: handleException(getContacts),
  getOneContact: handleException(getOneContact),
  postContact: handleException(postContact),
  putContact: handleException(putContact),
  deleteContact: handleException(deleteContact),
};
