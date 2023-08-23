const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function postContact(request, response, next) {
    const body = request.body;
    const newContact = await Contacts.create(body);

    response.status(201).json({ data: newContact });
}

module.exports = exceptionHandler(postContact);
