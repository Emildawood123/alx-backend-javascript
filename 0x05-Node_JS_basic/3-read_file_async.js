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
      console.log(`Number of students: ${matrix.length - 1}`);
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
      for (const key of Object.keys(obj)) {
        console.log(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].lst.join(', ')}`);
      }
      res(() => 'Done!');
      return null;
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

module.exports = countStudents;
