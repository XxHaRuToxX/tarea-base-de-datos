const { Schema, model } = require('mongoose');

const SportSchema = new Schema({
    title:String,
    body:String,
    image:String,
    place:String,
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Sport', SportSchema);