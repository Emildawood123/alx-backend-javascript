export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw TypeError('Students must be a array of strings');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw TypeError('Students must be a array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._name = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents !== 'object') {
      throw TypeError('Students must be a array of strings');
    }
    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw TypeError('Students must be a array of strings');
      }
    }
    this._name = newStudents;
  }
}
