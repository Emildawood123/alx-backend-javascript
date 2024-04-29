const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path).toString().split('\n');
  } catch (error){
    throw new Error('Cannot load the database');
  }
  const output = [];
  for (const i of data) {
    if (i === '') {
      continue;
    }
    output.push(i.split(','));
  }
  const firstNameIndex = output[0].indexOf('firstname');
  const fieldIndex = output[0].indexOf('field');
  const obj = {};
  for (const j of output) {
    if (j[fieldIndex] === 'field' || j[firstNameIndex] === '') {
      continue;
    }
    if (!obj[j[fieldIndex]]) {
      obj[j[fieldIndex]] = { count: 1, lst: [j[firstNameIndex]] };
    } else {
      obj[j[fieldIndex]].count = obj[j[fieldIndex]].count + 1;
      obj[j[fieldIndex]].lst.push(j[firstNameIndex]);
    }
  }
  console.log(`Number of students: ${output.length - 1}`);
  for (const key of Object.keys(obj)) {
    console.log(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].lst.join(', ')}`);
  }
}

module.exports = countStudents;
