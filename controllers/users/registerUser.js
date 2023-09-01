const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { Users } = require('../../models/users');
const { asyncHandler, throwHttpError, sendVerificationEmail } = require('../../utils');

const registerUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verificationCode = nanoid();
    const avatarURL = gravatar.url(email);

    const newUser = await Users.create({ ...request.body, avatarURL, password: passwordHash, verificationCode });
    await sendVerificationEmail(newUser.email, newUser.verificationCode);

    response.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL,
        },
    });
});

module.exports = { registerUser };
