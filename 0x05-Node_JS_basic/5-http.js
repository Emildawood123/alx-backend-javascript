const { createServer } = require('node:http');
const read = require('./3-read_file_async');
const port = 1245;
const hostname = 'localhost';
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    const content = read('database.csv').then((res) => {
      console.log(res);
    })
      .catch((error) => {
        console.log(error);
      });
    res.end(`This is the list of our students ${content}`);
  }
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
