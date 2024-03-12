export default function updateStudentGradeByCity(list, city, newGrades) {
  const newArr = list.filter((e) => e.location === city);
  const afterMap = newArr.map((d) => Object.assign(d, {
    grade:
  newGrades.filter((grade) => grade.studentId === d.id)[0] === undefined ? 'N/A'
    : newGrades.filter((grade) => grade.studentId === d.id)[0].grade,
  }));
  return afterMap;
}
