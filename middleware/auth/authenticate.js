const jwt = require('jsonwebtoken');
const { exceptionHandler } = require('../../utils');

const { Users } = require('../../models/users');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

async function authenticate(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error();
        }

        const [prefix, token] = authorization.split(' ');
        console.log(prefix);
        if (prefix !== 'Bearer') {
            throw new Error();
        }

        const payload = jwt.verify(token, TOKEN_KEY);
        const user = await Users.findById(payload.id);
        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    }
    catch {
        res.status(401).json({ message: 'Unauthorized'});
    }
}

module.exports = exceptionHandler(authenticate);
