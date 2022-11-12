const { app } = require('./app');
const { dbConnection } = require('./config/db');

const main = async () =>{
    try {
        await dbConnection();
        console.log('Database initialized successfully');
        app.listen(process.env.PORT);
        console.log("Server listening on port " + process.env.PORT);
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message.toString());
        }
    }
}

main();