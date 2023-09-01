const { asyncHandler, throwHttpError } = require('../../utils');
const { Users } = require('../../models/users');

const verifyUser = asyncHandler(async (request, response) => {
    const { code } = request.params;

    const verifiedUser = await Users.findOneAndUpdate({ verificationCode: code }, { verifiedStatus: true, verificationCode: null });

    if (!verifiedUser) {
        throwHttpError(404, 'Not found');
    }

    response.status(200).json({ message: 'Email verified successfully' });
});

module.exports = { verifyUser };
