const { Contacts } = require('../../models/contacts');
const { asyncHandler, throwHttpError } = require('../../utils');

const patchFavorite = asyncHandler(async (request, response) => {
    const { id } = request.params;
    const { favorite } = request.body;

    const updatedContact = await Contacts.findByIdAndUpdate(id, { favorite }, { returnDocument: 'after' });
    if (!updatedContact) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({
        data: updatedContact,
    });
});

module.exports = { patchFavorite };
