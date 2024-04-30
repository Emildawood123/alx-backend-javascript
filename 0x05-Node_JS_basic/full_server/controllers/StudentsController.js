import readDatabase from '../utils'
class StudentsController {
    static getAllStudents(request, response) {
        response.status(200);
        readDatabase('database.csv').then((data) => {
            lst = ['This is the list of our students']
            for (key of Object.keys(data)) {
                lst.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key]}`)
            }
            response.send(lst.join('\n'))
        }).catch((err) => {
            response.status(500)
            response.send(err.massage)
        });
    }
    static getAllStudentsByMajor(request, response) {
        const { major } = request.params
        readDatabase().then((data) => {
            if (data[major]) {
                response.status(200);
                response.send(`List: ${data[major].join(', ')}`)
            }
            else {
                response.status(500)
                response.send('Major parameter must be CS or SWE')
            }
        }).catch((err) => {
            response.status(500);
            response.send(err.massage)
        })
    }
}
export default StudentsController;