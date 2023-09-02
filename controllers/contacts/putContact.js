const { Contacts } = require('../../models/contacts');
const { asyncHandler, throwHttpError } = require('../../utils');

const putContact = asyncHandler(async (request, response) => {
    const { id } = request.params;
    const body = request.body;

    const updatedContact = await Contacts.findByIdAndUpdate(id, body, { returnDocument: 'after' });
    if (!updatedContact) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({
        data: updatedContact,
    });
});

module.exports = { putContact };
