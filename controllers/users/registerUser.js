const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

const { Users } = require('../../models/users');
const { asyncHandler, throwHttpError } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const registerUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const newUser = await Users.create({ ...request.body, password: passwordHash, avatarURL });

    const payload = { id: newUser._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '24h' });
    await Users.findByIdAndUpdate(newUser._id, { token });

    response.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL,
        },
        token,
    });
});

module.exports = { registerUser };
