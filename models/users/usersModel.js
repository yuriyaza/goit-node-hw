const { Schema, model } = require('mongoose');

const usersDBSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Set password for user'],
        },
        subscription: {
            type: String,
            enum: ['starter', 'pro', 'business'],
            default: 'starter',
        },
        token: {
            type: String,
        },
    },

    { versionKey: false, timestamps: true }
);

const Users = model('users', usersDBSchema);

module.exports = Users;
