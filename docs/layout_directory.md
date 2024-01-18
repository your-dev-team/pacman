# PAC-MAN Game Layout

## Core Classes and Functions

### Front-end

#### `game.js`
- `init()`: Initializes the game, loads the assets and sets up the game scene.
- `create()`: Creates the game objects.
- `update()`: Updates the game objects every frame.

#### `player.js`
- `move(direction)`: Moves the player in the specified direction.
- `eatDot()`: Handles the player eating a dot.

#### `ghost.js`
- `move()`: Moves the ghost.
- `catchPlayer()`: Handles the ghost catching the player.

#### `maze.js`
- `loadMaze()`: Loads the maze layout from the database.
- `drawMaze()`: Draws the maze on the screen.

#### `soundManager.js`
- `playSound(effect)`: Plays the specified sound effect.

### Back-end

#### `server.js`
- `start()`: Starts the server.

#### `gameController.js`
- `getMaze(req, res)`: Sends the maze layout to the client.

## Tests

### `game.test.js`
- Contains unit tests for the game logic.

### `e2e.test.js`
- Contains end-to-end tests for the game.

## Database

### `db.js`
- `getMaze()`: Fetches the maze layout from the database.
