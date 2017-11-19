const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageDetailsSchema = new Schema(
    {
        searchVal: String,
        searchDate: Date
    },
    {
        timestamp: true
    }
);

const modelClass = mongoose.model('imageDetails', imageDetailsSchema);

module.exports = modelClass;