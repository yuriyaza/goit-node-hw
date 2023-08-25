const { getAllContacts } = require('./getAllContacts');
const { getOneContact } = require('./getOneContact');
const { postContact } = require('./postContact');
const { putContact } = require('./putContact');
const { patchFavorite } = require('./patchFavorite');
const { deleteContact } = require('./deleteContact');

module.exports = {
    getAllContacts,
    getOneContact,
    postContact,
    putContact,
    patchFavorite,
    deleteContact,
};
