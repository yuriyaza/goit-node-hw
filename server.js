const app = require('./app');
const colors = require('colors');

const port = 3000;

app.listen(port, () => {
  console.log(colors.bgGreen('\nServer running...'));
  console.log(`Use API on port: ${port}`);
});
