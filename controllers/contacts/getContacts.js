const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function getContacts(request, response, next) {
  const result = await Contacts.find();

  response.status(200).json({ data: result, quantity: result.length });
}

module.exports = exceptionHandler(getContacts);
