const { Contacts } = require('../../models/contacts');
const { exceptionHandler } = require('../../utils');

async function getContacts(request, response, next) {
    const { favorite, page = 1, limit = 20 } = request.query;
    const filterCriterion = favorite ? { favorite } : {};
    const skip = (page - 1) * limit;

    const allContacts = await Contacts.find(filterCriterion).skip(skip).limit(limit);

    response.status(200).json({ data: allContacts, quantity: allContacts.length });
}

module.exports = exceptionHandler(getContacts);
