const { Contacts } = require('../../models/contacts');
const { asyncHandler } = require('../../utils');

const getAllContacts = asyncHandler(async (request, response) => {
    const { favorite, page = 1, limit = 20 } = request.query;
    const filter = favorite ? { favorite } : {};
    const skip = (page - 1) * limit;

    const filteredContacts = await Contacts.find(filter).skip(skip).limit(limit);
    const totalContacts = await Contacts.find(filter).count();

    response.status(200).json({
        data: filteredContacts,
        quantity: filteredContacts.length,
        total: totalContacts,
    });
});

module.exports = { getAllContacts };
