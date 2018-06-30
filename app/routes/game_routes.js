module.exports = function(app, game) {
  app.post('/new_game', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};
