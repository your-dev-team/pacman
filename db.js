const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./maze.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

exports.getMaze = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Maze`, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};
