const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [20, "Max length of name is 20 characters"]
    },
    Completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)