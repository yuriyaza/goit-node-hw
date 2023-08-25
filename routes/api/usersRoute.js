const express = require('express');
const usersRoute = express.Router();

const middleware = require('../../middleware');
const schema = require('../../models/users');
const controller = require('../../controllers/users');

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
    '/current',
    middleware.authentication,
    controller.getCurrentUser
);

module.exports = { usersRoute };
