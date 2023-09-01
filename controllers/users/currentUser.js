const { asyncHandler } = require('../../utils');

const currentUser = asyncHandler(async (request, response) => {
    const { email, subscription } = request.user;

    response.status(200).json({
        user: { email, subscription },
    });
});

module.exports = { currentUser };
