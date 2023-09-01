const { Users } = require('./usersDBModel')
const { usersBodySchema } = require('./usersValidationSchemas');
const { usersEmailSchema } = require('./usersValidationSchemas');

module.exports = {
    Users,
    usersBodySchema,
    usersEmailSchema,
};
