const mongoose = require('mongoose');
const validator = require('validator');
const bcrpt = require('bcryptjs');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('JsonWebToken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name'],
        maxlength: [30, 'Your name will no longer 30 have characters'],
    },

    email: {
        type: String,
        required: [true, 'Enter your mail'],
        unique: true,
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

// Encrypiting password befor saving user

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next();

    this.password = await bcrpt.hash(this.password, 10);
});

// compre Password

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrpt.compare(enteredPassword, this.password);
};

// JWT token

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

module.exports = mongoose.model('user', userSchema);
