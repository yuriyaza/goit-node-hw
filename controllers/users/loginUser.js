const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models/users');
const { asyncHandler, throwHttpError } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const loginUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    const user = await Users.findOne({ email });
    if (!user) {
        throwHttpError(401, 'Email or password is incorrect');
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
        throwHttpError(401, 'Email or password is incorrect');
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '24h' });
    await Users.findByIdAndUpdate(user._id, { token });

    response.status(201).json({
        user: { email: user.email, subscription: user.subscription },
        token,
    });
});

module.exports = { loginUser };