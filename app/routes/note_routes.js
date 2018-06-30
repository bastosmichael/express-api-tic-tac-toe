module.exports = function(app, db) {
  app.post('/new_game', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
};
