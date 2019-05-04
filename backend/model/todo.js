const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TodoSchema = new Schema({
    task: {
        type: String,
        maxlength: 160
    },
    percentage: {
        type: Number,
        min: 0,
        max: 100
    },
    deadline: {
        type: Date,
        default: Date.now
    },
    finished: {
        type: Boolean,
        default: false
    }

});

// TodoSchema.plugin(autoIncrement.plugin,  'id');
// TodoSchema.plugin(AutoIncrement)

module.exports = mongoose.model('TodoSchema', TodoSchema);