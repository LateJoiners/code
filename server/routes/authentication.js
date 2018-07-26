const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');
const User = require('../models/user');
const router = require('express').Router();

router.post('/authenticate', (req, res, next) => {
    const username =
    req.body.emailOrUsername === undefined
        ? req.body.email
        : req.body.emailOrUsername;

    if(!req.body.email) {
        return next('Cannot authenticate without \'email\' field');
    }

    if(!req.body.password) {
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
});

module.exports = { authenticationController: router };
