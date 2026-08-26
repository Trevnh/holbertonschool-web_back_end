export default function getListStudentsIds(students) {
  if (Array.isArray(students)) {
    return students.map(student => student.id)
  } else {
    return []
  }
}