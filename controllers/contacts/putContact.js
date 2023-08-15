const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function putContact(request, response, next) {
  const { id } = request.params;
  const body = request.body;
  
  const result = await Contacts.findByIdAndUpdate(id, body, { new: true });

  if (!result) {
    response.status(404).json({ status: 404, message: 'Not found' });
    return;
  }

  response.status(200).son({ status: 200, data: result });
}

module.exports = handleException(putContact);
