const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  const readStream = fs.createReadStream(path);
  const readInterface = readline.createInterface({
    input: readStream
  });
  const output = [];
  readInterface.on('line', (line) => {
    const row = line.split(',');
    output.push(row);
  });
  readInterface.on('close', () => {
    const numberOfStudent = [];
    for (const i of output) {
      if (i[i.length - 1] !== 'field') {
        numberOfStudent.push(i);
      }
    }
    console.log(`Number of students: ${numberOfStudent.length}`);
    const obj = {};
    for (const j of numberOfStudent) {
      if (obj[j[j.length - 1]] === undefined) {
        obj[j[j.length - 1]] = { count: 1, lst: [j[0]] };
      } else {
        obj[j[j.length - 1]].count = obj[j[j.length - 1]].count + 1;
        obj[j[j.length - 1]].count = obj[j[j.length - 1]].lst.push(j[0]);
      }
    }
    for (const key of Object.keys(obj)) {
      console.log(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].lst.join(', ')}`);
    }
  });
  readInterface.on('error', () => {
    throw new Error('Cannot load the database');
  });
}

module.exports = countStudents;
