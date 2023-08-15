const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function getOneContact(request, response, next) {
  const { id } = request.params;

  const result = await Contacts.findById(id);

  if (!result) {
    response.status(404).json({ status: 404, message: 'Not found' });
    return;
  }

  response.status(200).json({ status: 200, data: result });
}

module.exports = handleException(getOneContact);
