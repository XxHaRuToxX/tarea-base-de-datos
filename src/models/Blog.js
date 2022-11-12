const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
    title:String,
    body:String,
    image:String,
    stars:Number,
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Blog', BlogSchema);

