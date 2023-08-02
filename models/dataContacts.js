const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async id => {
  const contacts = await listContacts();
  const foundContact = contacts.find(element => element.id === id);
  return foundContact || null;
};

const addContact = async body => {
  const id = nanoid();
  const { name, email, phone } = body;
  const contacts = await listContacts();
  const newContact = {
    id,
    name,
    email,
    phone,
  };
  const addedContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(addedContacts, null, 2));
  return newContact;
};

const removeContact = async id => {
  const contacts = await listContacts();
  const index = contacts.findIndex(element => element.id === id);
  if (index === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
};

const updateContact = async (id, body) => {
  const { name, email, phone } = body;
  const contacts = await listContacts();
  const index = contacts.findIndex(element => element.id === id);
  if (index === -1) {
    return null;
  }
  const updatedContact = {
    id,
    name,
    email,
    phone,
  };
  contacts[index] = updatedContact;
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
