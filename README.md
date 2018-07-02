# express-api-tic-tac-toe
Quick little Tic Tac Toe API game

## Starting server

`npm i && npm start`

## Running development

`npm run dev`

## Test End Points

### Create a new board using boardSize parameter

`curl --data "boardSize=3" http://localhost:8000/game/new`

```{"message":"new game created",
 "starting_turn":"X",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   |  ",
 "position":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  . \r\n   1  2  3  "}```

### Check Status of Board

`curl http://localhost:8000/game/status`

```{"message":"in progress",
 "next_turn":"X",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   |  ",
 "poistion":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  . \r\n   1  2  3  "}```

### Make a Random Move

`curl -X POST http://localhost:8000/game/random`

```{"message":"in progress",
 "next_turn":"O",
 "output":"   |   |  \r\n-----------\r\n   |   |  \r\n-----------\r\n   |   | X",
 "position":"3  .  .  . \r\n2  .  .  . \r\n1  .  .  X \r\n   1  2  3  "}```

### Make a Move using xAxis and yAxis parameters

`curl --data "xAxis=1&yAxis=2" http://localhost:8000/game/move`

```{"message":"in progress",
 "next_turn":"X",
 "output":"   |   |  \r\n-----------\r\n O |   |  \r\n-----------\r\n   |   | X",
 "position":"3  .  .  . \r\n2  O  .  . \r\n1  .  .  X \r\n   1  2  3  "}```
