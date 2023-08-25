const { isValidObjectId } = require('mongoose');
const { throwHttpError } = require('../utils');

function validateID(request, response, next) {
    const { id } = request.params;

    if (!isValidObjectId(id)) {
        throwHttpError(400, 'ID is incorrect');
    }

    next();
}

module.exports = { validateID };
