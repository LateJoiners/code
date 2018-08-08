const router = require('express').Router();
const { authenticateToken } = require('../core/auth');

router.get('/unauthenticated', (req, res) => { 
    
    res.json({
        message: 'Successful API call'
    });

});

router.get('/authenticated', authenticateToken, (req, res) => { 
    
    res.json({
        message: 'Successful API call',
        data: req.user
    });

});

module.exports = { sanityController: router };
