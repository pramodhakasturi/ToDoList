//import mongoose
const mongoose = require('mongoose');

//create schema
const taskListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }
});

//create model
const Tasks = mongoose.model('Tasks', taskListSchema);

//export model
module.exports = Tasks;