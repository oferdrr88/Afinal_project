const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name'],
        maxlength: [30, 'Your name will no longer  30 have characters'],
    },

    email: {
        type: String,
        required: [true, 'Enter your mail'],
        uniqired: true,
        validate: [validator.isEmail, 'Enter your valid Email'],
    },

    password: {
        type: String,
        required: [true, 'Enter your Password'],
        minlength: [6, 'Your password will no longer  6 have characters'],
        select: false,
    },

    avatar: {
        public_id: {
            type: String,
            required: [true],
        },
        url: {
            type: String,
            required: [true],
        },
    },

    role: {
        type: String,
        default: 'user',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model('user', userSchema);
