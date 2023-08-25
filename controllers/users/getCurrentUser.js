const { asyncHandler } = require('../../utils');

const getCurrentUser = asyncHandler(async (request, response) => {
    const { email, subscription } = request.user;

    response.status(200).json({
        user: { email, subscription },
    });
});

module.exports = { getCurrentUser };
