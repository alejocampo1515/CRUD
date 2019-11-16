const mongoose = require("mongoose")
const simSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: true
    },    
    Name: {
        type: String,
        required: true
    },    
    period: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    help: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true
    }
})
const sim = mongoose.model("sim", simSchema)
module.exports = sim
