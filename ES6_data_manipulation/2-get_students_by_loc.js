export default function getStudentsByLocation(students, location) {
  const filteredStudents = students.filter(student => student.location === location);
  return filteredStudents
}
