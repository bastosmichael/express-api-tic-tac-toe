const express    = require('express');
const bodyParser = require('body-parser');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.locals.game = null;

require('./app/routes')(app);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
