const mongoose = require('mongoose');
const { hashPassword, comparePasswords } = require('../core/hasher');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        displayName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        permissions: {
            type: [String],
            required: true,
            default: []
        },
        updatedOn: {
            type: Date,
            required: true
        },
        createdOn: {
            type: Date,
            required: true
        }
    },
    {
        strict: 'throw'
    }
);

userSchema.methods.validatePassword = function (candidatePass, next) {
    comparePasswords(candidatePass, this.password, (err, isMatch) => {
        if (err) return next(err);
        next(null, isMatch);
    });
};

userSchema.pre('validate', function (next) {
    const user = this;
    if (!user.username) {
        user.username = user.email;
    }

    // Update audit information
    const now = new Date();
    if (!user.createdOn) {
        user.createdOn = now;
    }
    user.updatedOn = now;

    next(null);
});

userSchema.pre('save', function (next) {
    const user = this;

    // Make sure not to save passwords in plain-text!
    if (user.isModified('password')) {
        hashPassword(user.password, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;

            return next(null);
        });
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
