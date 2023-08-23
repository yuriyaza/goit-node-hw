const jwt = require('jsonwebtoken');

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
        if (prefix !== 'Bearer') {
            throw new Error();
        }

        const payload = jwt.verify(token, TOKEN_KEY);
        // if verification fault - automatically generate an
        // exception and go to catch

        const { id } = payload;
        const user = await Users.findById(id);
        if (!user || !user.token) {
            throw new Error();
        }

        req.user = user;
        next();
    }
    catch {
        res.status(401).json({ message: 'Unauthorized'});
    }
}

module.exports = authenticate;
