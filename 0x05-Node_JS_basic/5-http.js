const http = require('http');

const fs = require('fs');

function countStudents(path) {
  // eslint-disable-next-line no-continue
  return new Promise((res, rej) => {
    fs.readFile(path, (err, buffer) => {
      if (err) {
        return rej();
      }
      const data = buffer.toString().split('\n');
      const matrix = [];
      for (const i of data) {
        if (i === '') {
          // eslint-disable-next-line no-continue
          continue;
        }
        const inner = i.split(',');
        matrix.push(inner);
      }
      const firstNameIndex = matrix[0].indexOf('firstname');
      const fieldIndex = matrix[0].indexOf('field');
      const obj = {};
      for (const j of matrix) {
        if (j[fieldIndex] === 'field') {
          // eslint-disable-next-line no-continue
          continue;
        }
        if (obj[j[fieldIndex]] === undefined) {
          obj[j[fieldIndex]] = { count: 1, lst: [j[firstNameIndex]] };
        } else {
          obj[j[fieldIndex]].count += 1;
          obj[j[fieldIndex]].count = obj[j[fieldIndex]].lst.push(j[firstNameIndex]);
        }
      }
      const dataSend = ['This is the list of our students', `Number of students: ${matrix.length - 1}`];
      for (const key of Object.keys(obj)) {
        dataSend.push(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].lst.join(', ')}`);
      }
      res(dataSend);
      return null;
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.setHeader('Content-Type', 'text/plain');
        res.end(data.join('\n'));
      })
      .catch((error) => {
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${error.message}`);
      });
  }
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
}).listen(1245);

module.exports = app