const router = require('express').Router();
const { authenticateToken } = require('../core/auth');

const results = [
                  { 'id': '1',
                    'date': 'Thursday, 23rd August 2018',
                    'home': '01',
                    'away': '02',
                    'result': [2, 1] },
                  { 'id': '2',
                    'date': 'Thursday, 23rd August 2018',
                    'home': '09',
                    'away': '10',
                    'result': [0, 2] },
                  { 'id': '3',
                    'date': 'Thursday, 23rd August 2018',
                    'home': '03',
                    'away': '15',
                    'result': [1, 1] },
                  { 'id': '4',
                    'date': 'Thursday, 23rd August 2018',
                    'home': '05',
                    'away': '06',
                    'result': [0, 1] },
                  { 'id': '5',
                    'date': 'Thursday, 23rd August 2018',
                    'home': '07',
                    'away': '08',
                    'result': [0, 3] },
                  { 'id': '6',
                    'date': 'Thursday, 23rd Augsust 2018',
                    'home': '11',
                    'away': '12',
                    'result': [0, 0] },
                  { 'id': '7',
                    'date': 'Wednesday, 22nd August 2018',
                    'home': '13',
                    'away': '14',
                    'result': [1, 3] },
                  { 'id': '8',
                    'date': 'Wednesday, 22nd August 2018',
                    'home': '17',
                    'away': '18',
                    'result': [3, 2] },
                  { 'id': '9',
                    'date': 'Wednesday, 22nd August 2018',
                    'home': '19',
                    'away': '20',
                    'result': [0, 1] },
                  { 'id': '10',
                    'date': 'Wednesday, 22nd August 2018',
                    'home': '04',
                    'away': '16',
                    'result': [3, 2] }
                  ];


router.get('/mock', (req, res) => {

    res.json(results);

});

router.get('/live', (req, res) => {

    res.json({
        message: 'Successful API call'
    });

});

module.exports = { resultsController: router };
