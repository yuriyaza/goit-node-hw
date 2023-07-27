const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const foundContact = contacts.find(item => item.id === contactId);
  return foundContact || null;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name: name || '',
    email: email || '',
    phone: phone || '',
  };
  const updatedContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  return newContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(element => element.id === contactId);
  if (index === -1) return null;
  const [removedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
}

async function changeContact(id, name, email, phone) {
  const contacts = await listContacts();
  const index = contacts.findIndex(element => element.id === id);
  if (index === -1) return null;
  const changedContact = {
    id: contacts[index].id,
    name: name || contacts[index].name,
    email: email || contacts[index].email,
    phone: phone || contacts[index].phone,
  };
  contacts[index] = changedContact;
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return changedContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  changeContact,
};
