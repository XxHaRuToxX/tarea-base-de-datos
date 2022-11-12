const { Schema, model } = require('mongoose');

const EntretaimentSchema = new Schema({
    title:String,
    body:String,
    image:String,
    game:{
        name:String,
        type:String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Entretaiment', EntretaimentSchema);