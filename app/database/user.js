const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    table = new Schema({
        username: { type: String, default: null },
        password: { type: String, default: null },
        fullname: { type: String, default: null }
    });

module.exports = mongoose.model('user', table);