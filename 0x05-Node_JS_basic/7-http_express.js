const express = require('express');
const fs = require('fs');

const port = 1245;
const app = express();
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
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(data.join('\n'));
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});
app.listen(port, () => {
  console.log(`app works in port ${port}`);
});

module.exports = app;
