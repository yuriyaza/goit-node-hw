const { Contacts } = require('../../models/contacts');
const { handleException } = require('../../utils');

async function deleteContact(request, response, next) {
  const { id } = request.params;
  
  const result = await Contacts.findByIdAndDelete(id);
 
  if (!result) {
    response.status(404).json({ message: 'Not found' });
    return;
  }
 
  response.status(200).json({ code: 200, data: result });
}

module.exports = handleException(deleteContact);
