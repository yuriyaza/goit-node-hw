const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const { contactsRouter } = require('./routes/api/contacts');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));

app.use('/api/contacts', contactsRouter);

app.use((request, response) => {
  response.status(404).json({ message: 'Not found' });
});

module.exports = app;
