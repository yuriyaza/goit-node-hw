const { isValidObjectId } = require('mongoose');

function validateID(request, response, next) {
  const { id } = request.params;

  if (!isValidObjectId(id)) {
    response.status(400).json({ message: 'Invalid ID' });
    return;
  }

  next();
}

module.exports = validateID;
