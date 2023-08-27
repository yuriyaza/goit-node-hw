const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const { contactsRoute } = require('../routes/api');
const { usersRoute } = require('../routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));

app.use('/api/contacts', contactsRoute);
app.use('/api/users', usersRoute);

app.use((request, response, next) => {
    response.status(404).json({ message: 'Not found' });
});

app.use((error, request, response, next) => {
    const errorCode = error.code || 500;
    const errorMessage = error.message || 'Internal server error';
    response.status(errorCode).json({ message: errorMessage });
});

module.exports = { app };
