const express = require('express');
const path = require('path');
const gameController = require('./gameController');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/maze', gameController.getMaze);

app.listen(port, () => {
  console.log(`PAC-MAN game server listening at http://localhost:${port}`);
});

module.exports = app; // For testing
