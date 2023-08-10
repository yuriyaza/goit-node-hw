const app = require('./app');
const mongoose = require('mongoose');
const colors = require('colors');

const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(colors.bgGreen('\nServer running...'));
    console.log(`Use API on port: ${PORT}`);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
