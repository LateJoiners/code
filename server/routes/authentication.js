const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const { User } = require('../models/user');
const router = require('express').Router();

const login = (req, res, next) => {
    const username =
    req.body.emailOrUsername === undefined
        ? req.body.email
        : req.body.emailOrUsername;

    if (!username) {
        res.status(400);
        return next('Cannot authenticate without \'username\' field');
    }

    if (!req.body.password) {
        res.status(400);
        return next('Cannot authenticate without \'password\' field');
    }

    User.findOne({
        $or: [{ email: username }, { username: username }]
    }).exec((err, user) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Error getting user from database provider'
            });
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect Username or password'
            });
        }
        user.validatePassword(req.body.password, (err, isValid) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'An error occured'
                });
            }

            if (!isValid) {
                console.log('Login attempted but password invalid');
                return res.json({
                    success: false,
                    message: 'Incorrect Username or password'
                });
            }

            // Explicitly Creating this obj to avoid sending password and
            // other potentially harmful info in token
            const userData = {
                _id: user._id,
                username: user.username,
                displayName: user.displayName,
                email: user.email,
                permissions: user.permissions
            };
            userData.token = jwt.sign(userData, jwtSecret, {
                expiresIn: 604800 // Expires in 1 week
            });

            res.json({
                success: true,
                message: 'User token successfully generated',
                data: userData
            });
        });
    });
};

const register = (req, res, next) => { 
    const user = new User(req.body);

    if (!user.password) {
        return res.status(400).json({
            message: 'You cannot register without a "password"'
        });
    }

    if (!user.email) {
        return res.status(400).json({
            message: 'You cannot register without an "email"'
        });
    }

    if (!user.displayName) {
        return res.status(400).json({
            message: 'You cannot register without a "displayName"'
        });
    }

    User.findOne({ $or: [{ email: user.email }, { email: user.username }] })
        .populate('_profileImage')
        .exec((err, existingUser) => {
            if (!err && !existingUser) {
                return user.save((err) => {
                    if (err) {
                        return next(err, null);
                    }

                    return next(null, req);
                });
            } 
            
            const msg = 'Unable to register user';
            console.log(msg, err);
            return next(msg, null);
        });

};

router.post('/register', register, login);
router.post('/login', login);

module.exports = { authenticationController: router };
