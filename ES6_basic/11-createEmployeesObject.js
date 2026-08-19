export default function createEmployeesObject(departmentName, employees) {
  let employeesObject = {
    [`${departmentName}`]: employees
  }
  return employeesObject
}
