const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  }
  catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const foundContact = contacts.find(item => item.id === contactId);
    return foundContact || null;
  }
  catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
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
  catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(element => element.id === contactId);
    if (index === -1) return null;
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  }
  catch (error) {
    console.log(error.message);
  }
}

async function changeContact(id, name, email, phone) {
  try {
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
  catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  changeContact,
};
