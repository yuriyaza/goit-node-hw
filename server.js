const app = require('./app');
const mongoose = require('mongoose');
const colors = require('colors');

const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('\nDatabase connection successful');

    app.listen(PORT, () => {
      console.log(colors.bgGreen(`Server is running on port ${PORT}\n`));
    });
  })
  .catch(error => {
    console.log(colors.bgRed(error.message));
    process.exit(1);
  });
