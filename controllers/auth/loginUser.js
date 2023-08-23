const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models/users');
const { exceptionHandler } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

async function loginUser(req, res, next) {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
        res.status(401).json({ message: 'Incorrect email or password' });
        return;
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
        res.status(401).json({ message: 'Incorrect email or password' });
        return;
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '24h' });
    await Users.findByIdAndUpdate(user._id, { token });

    res.status(201).json({
        user: { email: user.email, subscription: user.subscription, token },
    });
}

module.exports = exceptionHandler(loginUser);
