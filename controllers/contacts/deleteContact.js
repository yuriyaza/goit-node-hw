const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function deleteContact(request, response, next) {
    const { id } = request.params;

    const deletedContact = await Contacts.findByIdAndDelete(id);
    if (!deletedContact) {
        response.status(404).json({ message: 'Not found' });
        return;
    }

    response.status(200).json({ data: deletedContact });
}

module.exports = exceptionHandler(deleteContact);
