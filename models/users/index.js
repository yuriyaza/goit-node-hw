const { Users } = require('./usersDBModel')
const { usersBodySchema } = require('./usersValidationSchema');

module.exports = {
    Users,
    usersBodySchema,
};
