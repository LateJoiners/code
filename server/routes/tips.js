const router = require('express').Router();
const { authenticateToken } = require('../core/auth');

const tips = [
          { matchID: '1',
            result: [3, 1] },
          { matchID: '2',
            result: [0, 2] },
          { matchID: '4',
            result: [0, 2] }
         ];


router.get('/mock', (req, res) => {

    res.json(tips);

});

router.get('/live', (req, res) => {

    res.json({
        message: 'Successful API call'
    });

});

module.exports = { tipsController: router };
