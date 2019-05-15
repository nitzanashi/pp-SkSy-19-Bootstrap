const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);


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
        default: new Date().toDateString()
    },
    finished: {
        type: Boolean,
        default: false
    }

});


// TodoSchema.plugin(autoIncrement.plugin,  'id');
// TodoSchema.plugin(AutoIncrement)
TodoSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('TodoSchema', TodoSchema);
