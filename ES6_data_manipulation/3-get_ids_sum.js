export default function getStudentsIdsSum(students) {
  return students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
}
