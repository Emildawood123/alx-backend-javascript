export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumber(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
