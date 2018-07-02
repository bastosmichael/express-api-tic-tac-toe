module.exports = function(app) {
  var TicTacToe   = require('tictactoejs');
  app.locals.game = new TicTacToe.TicTacToe();

  app.post('/game/new', (req, res) => {
    app.locals.game = new TicTacToe.TicTacToe(req.body.boardSize || 3);  // default 3
    res.json({message: 'new game created',
              starting_turn: app.locals.game.turn(),
              output: app.locals.game.ascii()})
  });

  app.get('/game/status', (req, res) => {
    res.json({message: app.locals.game.status(),
              next_turn: app.locals.game.turn(),
              output: app.locals.game.ascii()})
  });

  app.post('/game/random', (req, res) => {
    app.locals.game.randomMove();
    res.json({message: app.locals.game.status(),
              next_turn: app.locals.game.turn(),
              output: app.locals.game.ascii()})
  });

  app.post('/game/move', (req, res) => {
    app.locals.game.move(req.body.xAxis, req.body.yAxis);
    res.json({message: app.locals.game.status(),
              next_turn: app.locals.game.turn(),
              output: app.locals.game.ascii2()})
  });
};
