import {readFile} from 'fs'

function readDatabase(path) {
  return new Promise((res, rej) => {
    readFile(path, (err, buffer) => {
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
          obj[j[fieldIndex]] = [j[firstNameIndex]];
        } else {
          obj[j[fieldIndex]] = obj[j[fieldIndex]].push(j[firstNameIndex]);
        }
      }
      res(obj);
      console.log(obj)
      return obj;
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}
export default readDatabase
