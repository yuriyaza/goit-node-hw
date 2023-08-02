const express = require('express');
const router = express.Router();
const Joi = require('joi');

const db = require('../../models/dataContacts');

router.get('/', async (request, response, next) => {
  try {
    const result = await db.listContacts();
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
});

router.get('/:contactID', async (request, response, next) => {
  try {
    const { contactID } = request.params;
    const result = await db.getContactById(contactID);
    if (!result) {
      response.status(404).json({ message: 'Not found' });
      return;
    }
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (request, response, next) => {
  const data = request.body;
  const validateResult = rules.validate(data);
  if (validateResult.error) {
    const errorMessage = validateResult.error.message.replaceAll('"', '');
    response.status(400).json({ message: errorMessage });
    return;
  }
  const result = await db.addContact(request.body);
  response.status(201).json(result);
});

router.delete('/:contactID', async (request, response, next) => {
  try {
    const { contactID } = request.params;
    const result = await db.removeContact(contactID);
    if (!result) {
      response.status(404).json({ message: 'Not found' });
      return;
    }
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
});

router.put('/:contactID', async (request, response, next) => {
  try {
    const { contactID } = request.params;
    const data = request.body;
    const validateResult = rules.validate(data);
    if (validateResult.error) {
      const errorMessage = validateResult.error.message.replaceAll('"', '');
      response.status(400).json({ message: errorMessage });
      return;
    }
    const result = await db.updateContact(contactID, data);
    if (!result) {
      response.status(404).json({ message: 'Not found' });
      return;
    }

    response.json(result);
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
});

const rules = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = router;
