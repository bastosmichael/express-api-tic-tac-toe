module.exports = function(app) {
  app.post('/game/new', (req, res) => {
    var TicTacToe   = require('tictactoejs');
    app.locals.game = new TicTacToe.TicTacToe(req.body.boardSize || 3);  // default 3
    console.log(req.body.boardSize)
    res.json(app.locals.game)
  });
};
