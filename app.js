const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const { authRouter } = require('./routes/api/auth');
const { contactsRouter } = require('./routes/api/contacts');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));

app.use('/api/users', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((request, response, next) => {
  response.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const errorCode = err.code || 500;
  const errorMessage = err.message || 'Internal server error';
  res.status(errorCode).json({ message: errorMessage });
});

module.exports = app;
