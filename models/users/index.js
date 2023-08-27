const { Users } = require('./usersDBModel')
const { usersBodySchema } = require('./usersValidationSchemas');

module.exports = {
    Users,
    usersBodySchema,
};
