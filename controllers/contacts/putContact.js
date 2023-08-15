const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

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

module.exports = handleException(putContact);
