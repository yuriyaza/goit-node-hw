const { Contacts } = require('../../models/contacts');
const { asyncHandler, throwHttpError } = require('../../utils');

const getOneContact = asyncHandler(async (request, response) => {
    const { id } = request.params;

    const foundContact = await Contacts.findById(id);
    if (!foundContact) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({
        data: foundContact,
    });
});

module.exports = { getOneContact };
