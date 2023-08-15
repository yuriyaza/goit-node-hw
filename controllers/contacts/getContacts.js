const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function getContacts(request, response, next) {
  const result = await Contacts.find();

  response.status(200).json({ code: 200, data: result, quantity: result.length });
}

module.exports = handleException(getContacts);
