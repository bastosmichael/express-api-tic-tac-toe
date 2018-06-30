const gameRoutes = require('./game_routes');
module.exports = function(app, game) {
  gameRoutes(app, game);
  // Other route groups could go here, in the future
};
