const { Contacts } = require('../../models/contacts');
const { asyncHandler, throwHttpError } = require('../../utils');

const deleteContact = asyncHandler(async (request, response) => {
    const { id } = request.params;

    const deletedContact = await Contacts.findByIdAndDelete(id);
    if (!deletedContact) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({
        data: deletedContact,
    });
});

module.exports = { deleteContact };
