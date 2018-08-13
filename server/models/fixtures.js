const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Fixture } = require('./fixture');


const roundSchema = new Schema(
    {
        fixtures: {
            type: [Fixture],
            required: true
        }
    }
);

const Fixtures = mongoose.model('Fixtures', roundSchema);

module.exports = { Fixtures };