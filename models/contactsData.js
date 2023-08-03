const path = require('path');
const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(id) {
  const contacts = await listContacts();
  const foundContact = contacts.find(element => element.id === id);
  return foundContact || null;
}

async function addContact(body) {
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
}

async function updateContact(id, body) {
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
}

async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex(element => element.id === id);
  if (index === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
