const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@unamad-db.lobsbgb.mongodb.net/${process.env.MONGO_DB_DATABASE}`);
        console.log('Conectado a mongo');

    } catch (error) {
        console.log({error: error.message});
    }
    
}

module.exports = {
    dbConnection
}