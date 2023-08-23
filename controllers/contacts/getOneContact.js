const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function getOneContact(request, response, next) {
    const { id } = request.params;

    const foundContact = await Contacts.findById(id);
    if (!foundContact) {
        response.status(404).json({ message: 'Not found' });
        return;
    }

    response.status(200).json({ data: foundContact });
}

module.exports = exceptionHandler(getOneContact);
