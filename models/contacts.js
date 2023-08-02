const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async id => {
  try {
    const contacts = await listContacts();
    const foundContact = contacts.find(element => element.id === id);
    return foundContact || null;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async body => {
  const { name, email, phone } = body;
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name: name || '',
      email: email || '',
      phone: phone || '',
    };
    const addedContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(addedContacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async id => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(element => element.id === id);
    if (index === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (id, body) => {
  const { name, email, phone } = body;
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(element => element.id === id);
    if (index === -1) {
      return null;
    }
    const updatedContact = {
      id: contacts[index].id,
      name: name || contacts[index].name,
      email: email || contacts[index].email,
      phone: phone || contacts[index].phone,
    };
    contacts[index] = updatedContact;
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return updatedContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
