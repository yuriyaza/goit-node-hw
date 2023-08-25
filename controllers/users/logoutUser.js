const { Users } = require('../../models/users');
const { asyncHandler } = require('../../utils');

const logoutUser = asyncHandler(async (request, response) => {
    const { _id } = request.user;
    await Users.findByIdAndUpdate(_id, { token: null });

    response.status(200).json({ message: 'Logout successful' });
});

module.exports = { logoutUser };
