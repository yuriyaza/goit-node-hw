const express = require('express');
const usersRoute = express.Router();

const middleware = require('../../middleware');
const schema = require('../../models/users');
const controller = require('../../controllers/users');

usersRoute.get(
    '/current',
    middleware.authentication,
    controller.currentUser
);
usersRoute.post(
    '/register',
    middleware.validateRequest(schema.usersBodySchema),
    controller.registerUser
);
usersRoute.post(
    '/login',
    middleware.validateRequest(schema.usersBodySchema),
    controller.loginUser
);
usersRoute.post(
    '/logout',
    middleware.authentication,
    controller.logoutUser
);
usersRoute.get(
    '/verify/:code',
    controller.verifyUser
);
usersRoute.post(
    '/verify',
    middleware.validateRequest(schema.usersEmailSchema),
    controller.resendCode
);
usersRoute.patch(
    '/avatar',
    middleware.authentication,
    middleware.uploadFiles.single('avatar'),
    controller.updateAvatar
);

module.exports = { usersRoute };
