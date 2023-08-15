const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function deleteContact(request, response, next) {
  const { contactID } = request.params;
  const result = await Contacts.findByIdAndDelete(contactID);
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
  response.json(result);
}

module.exports = handleException(deleteContact);
