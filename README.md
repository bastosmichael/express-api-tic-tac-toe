# express-api-tic-tac-toe
Quick little Tic Tac Toe API game

## Starting server

`npm i && npm start`

## Running development

`npm run dev`

## Test End Points

### Create a new board using boardSize parameter

`curl --data "boardSize=3" http://localhost:8000/game/new`

The JSON output would look something like this...

`{"message":"new game created",
 "starting_turn":"X",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   |  ",
 "position":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  . \r\n   1  2  3  "}`

By default the parameter boardSize creates 3 rows and columns, you can add more to create a bigger board with more complexity.

### Check Status of Board

`curl http://localhost:8000/game/status`

The JSON output would look something like this...

`{"message":"in progress",
 "next_turn":"X",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   |  ",
 "poistion":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  . \r\n   1  2  3  "}`

The JSON response gives you both output and position so that you know which moves to make next etc.

### Make a Random Move

`curl -X POST http://localhost:8000/game/random`

The JSON output would look something like this...

`{"message":"in progress",
 "next_turn":"O",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   | X",
 "position":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  X \r\n   1  2  3  "}`

You can make a random position as needed per turn.

### Make a Move using xAxis and yAxis parameters

`curl --data "xAxis=1&yAxis=2" http://localhost:8000/game/move`

The JSON output would look something like this...

`{"message":"in progress",
 "next_turn":"X",
 "output":"   |   |  \r\n-----------\r\n O |   |  \r\n-----------\r\n   |   | X",
 "position":"3  .  .  . \r\n2  O  .  . \r\n1  .  .  X \r\n   1  2  3  "}`

Moves are based on an x and y axis grid system.
