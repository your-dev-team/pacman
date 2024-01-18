let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
let score = 0;
let lives = 3;
let gameOver = false;
let scoreText;
let livesText;
let gameOverText;

function preload() {
  // Load assets here
  this.load.image('background', 'assets/background.png');
}

function create() {
  // Create game objects here
  this.add.image(400, 300, 'background');

  // Create score display
  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

  // Create lives display
  livesText = this.add.text(16, 56, 'Lives: 3', { fontSize: '32px', fill: '#000' });

  // Create game over text
  gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#000' });
  gameOverText.visible = false;
}

function update() {
  // Update game objects every frame
  if (gameOver) {
    gameOverText.visible = true;
  }
}

// Update score
function updateScore(points) {
  score += points;
  scoreText.setText('Score: ' + score);
}

// Update lives
function updateLives(livesLost) {
  lives -= livesLost;
  livesText.setText('Lives: ' + lives);

  if (lives <= 0) {
    gameOver = true;
  }
}

module.exports = { updateScore, updateLives };

