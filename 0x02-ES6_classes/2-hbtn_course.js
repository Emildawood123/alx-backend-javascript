export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Name must be a number');
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

  get getName() {
    return this._name;
  }

  set setName(newName) {
    this._name = newName;
  }

  get getLength() {
    return this._length;
  }

  set setLength(newLength) {
    this._name = newLength;
  }

  get getStudents() {
    return this._students;
  }

  set setStudents(newStudents) {
    this._name = newStudents;
  }
}
