const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const { contactsRouter } = require('./routes/api/contacts');

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(logger(formatsLogger));

app.use('/api/contacts', contactsRouter);

app.use((request, response) => {
  response.status(404).json({ message: 'Not found' });
});

module.exports = app;
