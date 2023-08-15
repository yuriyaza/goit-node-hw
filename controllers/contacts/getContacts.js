const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function getContacts(request, response, next) {
  const result = await Contacts.find();
  response.json(result);
}

module.exports = handleException(getContacts);
