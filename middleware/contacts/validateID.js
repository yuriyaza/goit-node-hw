const { isValidObjectId } = require('mongoose');

function validateID(request, response, next) {
  const { contactID } = request.params;

  if (!isValidObjectId(contactID)) {
    response.status(400).json({ message: 'Invalid ID' });
    return;
  }

  next();
}

module.exports = validateID;
