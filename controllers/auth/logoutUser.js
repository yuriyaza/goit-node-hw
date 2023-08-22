const { Users } = require('../../models/users');
const { exceptionHandler } = require('../../utils');

async function loginUser(req, res, next) {
    const { _id } = req.user;
    await Users.findByIdAndUpdate(_id, {token: null})

    res.status(200).json({ message: 'Logout successful'});
}

module.exports = exceptionHandler(loginUser);
