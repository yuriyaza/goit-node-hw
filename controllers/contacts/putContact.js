const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function putContact(request, response, next) {
  const { id } = request.params;
  const body = request.body;

  const result = await Contacts.findByIdAndUpdate(id, body, { new: true });

  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }

  response.status(200).json({ data: result });
}

module.exports = exceptionHandler(putContact);
