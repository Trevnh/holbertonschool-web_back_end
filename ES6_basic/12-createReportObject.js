export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(report) {
        return Object.keys(report).length;
    }
  }
  return reportObject
}
