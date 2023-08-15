const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function postContact(request, response, next) {
  const body = request.body;

  const result = await Contacts.create(body);

  response.status(201).json({ code: 201, data: result });
}

module.exports = handleException(postContact);
