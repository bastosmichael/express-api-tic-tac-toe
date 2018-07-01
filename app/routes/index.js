const gameRoutes = require('./game_routes');
module.exports = function(app) {
  gameRoutes(app);
  // Other route groups could go here, in the future
};
