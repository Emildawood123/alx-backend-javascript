import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    readDatabase('database.csv').then((data) => {
      const lst = ['This is the list of our students'];
      for (const key of Object.keys(data)) {
        lst.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
      }
      response.write(lst.join('\n'));
      response.end();
    }).catch((err) => {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(err.message);
      response.end();
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase('database.csv').then((data) => {
      if (data[major]) {
        response.status(200);
        response.write(`List: ${data[major].join(', ')}`);
        response.end();
      } else {
        response.status(500);
        response.write('Major parameter must be CS or SWE');
        response.end();
      }
    }).catch((err) => {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(err.massage);
      response.end();
    });
  }
}
export default StudentsController;
