const mongoose = require('mongoose');
const app = require('./app');
const colors = require('colors');

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

async function databaseConnect() {
    try {
        mongoose.set('strictQuery', true);
        const database = await mongoose.connect(DB_HOST);
        console.log(`\nDatabase connected successful: ${database.connection.name}`);
    }
    catch (error) {
        console.log(colors.bgRed(`\nDatabase connection error, ${error.message}`));
        process.exit(1);
    }
}

async function serverStart() {
    await databaseConnect();

    app.listen(PORT, () => {
        console.log(colors.bgGreen(`Server started on port: ${PORT}\n`));
    }).on('error', error => {
        console.log(colors.bgRed(`Server connection error, ${error.message}\n`));
    });
}

serverStart(); 
