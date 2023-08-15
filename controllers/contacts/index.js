const getContacts = require('./getContacts');
const getOneContact = require('./getOneContact');
const postContact = require('./postContact');
const putContact = require('./putContact');
const patchContact = require('./patchContact');
const deleteContact = require('./deleteContact');

module.exports = {
  getContacts,
  getOneContact,
  postContact,
  putContact,
  patchContact,
  deleteContact,
};