const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    table = new Schema({
        user: { type: Schema.Types.ObjectId, ref: 'user' },
        expln: { type: String, default: null },
        checked: { type: Boolean, default: false }

    });

module.exports = mongoose.model('todo', table);