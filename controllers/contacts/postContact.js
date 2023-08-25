const { Contacts } = require('../../models/contacts');
const { asyncHandler } = require('../../utils');

const postContact = asyncHandler(async (request, response) => {
    const body = request.body;
    const newContact = await Contacts.create(body);

    response.status(201).json({ data: newContact });
});

module.exports = { postContact };
