const mongoose = require('mongoose');
const colors = require('colors');

const { app } = require('./app');

require('dotenv').config();
const { DB_HOST, SERVER_PORT } = process.env;

async function databaseConnect() {
    try {
        mongoose.set('strictQuery', true);
        const database = await mongoose.connect(DB_HOST);
        console.log(`\nDatabase connected successful: ${database.connection.name}`);
    } catch (error) {
        console.log(colors.bgRed(`\nDatabase connection error, ${error.message}`));
        process.exit(1);
    }
}

async function serverStart() {
    await databaseConnect();

    app.listen(SERVER_PORT, () => {
        console.log(colors.bgGreen(`Server started on port: ${SERVER_PORT}\n`));
    }).on('error', error => {
        console.log(colors.bgRed(`Server connection error, ${error.message}\n`));
    });
}

serverStart();
 