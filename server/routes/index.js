const bodyParser = require('body-parser');
const express = require('express');

const {authenticationController} = require('./authentication');

const notFoundHandler = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

const errorHandler = (err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).json({
        message: `Something happened: ${res.locals.error}`
    });
};

const register = app => {
    app.use(bodyParser.json());

    app.use('/api/authentication', authenticationController);

    app.use(express.static(__dirname + '../../assets'));

    app.use(notFoundHandler);
    app.use(errorHandler);
};

module.exports = { register };
