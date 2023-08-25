const { authentication } = require('./authentication');
const { validateID } = require('./validateID');
const { validateRequest } = require('./validateRequest');

module.exports = {
    authentication,
    validateID,
    validateRequest,
};
