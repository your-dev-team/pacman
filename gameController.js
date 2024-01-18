const db = require('./db');

exports.getMaze = async (req, res) => {
  try {
    const maze = await db.getMaze();
    res.json(maze);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred while fetching maze layout');
  }
};
