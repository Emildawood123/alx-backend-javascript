export default function createIteratorObject(report) {
  const x = [];
  for (let departmentEmployees of Object.values(report.allEmployees)) {
    x.push(...departmentEmployees);
  }
  return x;
}
