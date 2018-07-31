const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateToken = (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    message: 'Failed to authenticate token.'
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    }

    return res.status(401).json({
        message: 'Access denied. No JWT provided'
    });
};

const checkPermissions = permissions => (req, res, next) => {
    if (!permissions) {
        return next(null, req, res);
    }

    if (!req.user) {
        return next('Unable to verify permissions without user', req, res);
    }

    const userPermissions = req.user.permissions;
    const missingPermissions = permissions.filter(
        permission => !userPermissions.includes(permission)
    );

    if (missingPermissions.length) {
        return res.status(403).json({
            message: `Access denied. You do not have the necessary claims: ${missingPermissions.map(
                permission => `'${permission}' `
            )}`
        });
    }

    return next(null, req, res);
};

const generateEmailToken = (req, res, next) => {
    const user = req.body.user;

    if (user) {
        const userData = {
            _id: user._id,
            username: user.username,
            displayName: user.displayName,
            email: user.email,
            isAdmin: user.isAdmin
        };
        userData.token = jwt.sign(userData, config.jwtSecret, {
            expiresIn: 3600 // Expires in 1 hour
        });

        next(userData);
    } else {
        next(null);
    }
};

const decryptToken = (token, next) => {
    next(
        null,
        jwt.decode(token, {
            json: true
        })
    );
};

module.exports = {
    authenticateToken,
    checkPermissions,
    decryptToken,
    generateEmailToken
};
