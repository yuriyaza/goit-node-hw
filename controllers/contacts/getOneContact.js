const { Contacts } = require('../../models/contacts');
const { asyncHandler, throwHttpError } = require('../../utils');

const getOneContact = asyncHandler(async (request, response) => {
    const { id } = request.params;

    const contact = await Contacts.findById(id);
    if (!contact) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({ data: contact });
});

module.exports = { getOneContact };
