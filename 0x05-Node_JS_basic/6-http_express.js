const express = require('express', 1);
const port = 1245;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, () => {
  console.log(`app works in port ${port}`);
});

module.exports = app;
