export default function updateStudentGradeByCity(students, city, newGrades) {
  let newArray = students.filter(student => student.location === city);
  newArray = newArray.map(student => {
    const newGrade = newGrades.find(
    grade => (grade.studentId === student.id))
    let finalGrade = 'N/A';
    if (newGrade != null) {
        finalGrade = newGrade.grade
    }
    return {
        ...student,
        grade: finalGrade,
    };
  });
  return newArray
}
