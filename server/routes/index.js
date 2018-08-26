const bodyParser = require('body-parser');
const express = require('express');
const cors = require('express-cors');
const {allowedOrigins} = require('../config');

const {authenticationController} = require('./authentication');
const { sanityController } = require('./sanity');
const { resultsController } = require('./results');
const { tipsController } = require('./tips');

const notFoundHandler = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).json({
        message: `Something happened: ${res.locals.error}`
    });
};

const register = app => {
    app.use(cors({
        allowedOrigins: allowedOrigins,
        headers: ['Authorization', 'Content-Type']
    }));

    app.use(bodyParser.json());

    app.use('/api/authentication', authenticationController);
    app.use('/api/sanity', sanityController);
    app.use('/api/results', resultsController);
    app.use('/api/tips', tipsController);

    app.use(express.static(__dirname + '../../assets'));

    app.use(notFoundHandler);
    app.use(errorHandler);
};

module.exports = { register };
