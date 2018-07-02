# express-api-tic-tac-toe
Quick little Tic Tac Toe API game

## Starting server

`npm i && npm start`

## Running development

`npm run dev`

## Test End Points

### Create a new board using boardSize parameter

`curl --data "boardSize=3" http://localhost:8000/game/new`

### Check Status of Board

`curl http://localhost:8000/game/status`

### Make a Random Move

`curl -X POST http://localhost:8000/game/random`

### Make a Move using xAxis and yAxis parameters

`curl --data "xAxis=1&yAxis=2" http://localhost:8000/game/new`
