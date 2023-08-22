const express = require('express');
const authRouter = express.Router();

const mdwr = require('../../../middleware/auth')
const ctrl = require('../../../controllers/auth');

authRouter.post('/register', mdwr.validateBody, ctrl.registerUser);
authRouter.post('/login', mdwr.validateBody, ctrl.loginUser);
authRouter.post('/logout', mdwr.authenticate, ctrl.logoutUser);

module.exports = authRouter;
