const { Schema, model } = require('mongoose');

const PoliticSchema = new Schema({
    title:String,
    body:String,
    image:String,
    place:{
        country:String,
        city:String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Politic', PoliticSchema);