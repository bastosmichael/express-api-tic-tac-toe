const express        = require('express');
const bodyParser     = require('body-parser');
const ticTacToe      = require('tictactoejs');
var   game           = null;

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, game);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
