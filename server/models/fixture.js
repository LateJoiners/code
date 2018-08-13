const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fixtureSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        home: {
            type: String,
            required: true
        },
        away: {
            type: String,
            required: true
        },
        result: {
            type: [Number],
            required: true,
            default: [0, 0]
        },
        date: {
            type: String, // should this be a date type?
            required: true
        }
    }
);

const Fixture = mongoose.model('Fixture', fixtureSchema);

module.exports = { Fixture };