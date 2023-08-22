const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models/users');
const { exceptionHandler } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

async function registerUser(req, res, next) {
    const { email, password } = req.body;

    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        res.status(409).json({ message: 'User with this email already exist' });
        return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await Users.create({ ...req.body, password: passwordHash });

    const payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '24h' });

    res.status(201).json({
        user: { email: user.email, subscription: user.subscription, token },
    });
}

module.exports = exceptionHandler(registerUser);
