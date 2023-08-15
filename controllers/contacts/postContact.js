const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function postContact(request, response, next) {
  const result = await Contacts.create(request.body);
  response.status(201).json(result);
}

module.exports = handleException(postContact);
