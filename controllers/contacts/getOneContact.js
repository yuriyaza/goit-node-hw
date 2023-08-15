const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function getOneContact(request, response, next) {
  const { contactID } = request.params;
  const result = await Contacts.findOne({ _id: contactID });
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

module.exports = handleException(getOneContact);
