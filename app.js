const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');

const contactsRouter = require('./routes/api/contactsRouter');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(logger(formatsLogger));

app.use('/api/contacts', contactsRouter);

app.use((request, response) => {
  response.status(404).json({ message: 'Not found' });
});

module.exports = app;
