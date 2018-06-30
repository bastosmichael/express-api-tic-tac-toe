module.exports = function(app, db) {
  app.post('/new_game', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};
