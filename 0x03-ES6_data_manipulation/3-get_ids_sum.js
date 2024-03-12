export default function getStudentIdsSum(list) {
  const sum = list.reduce((acc, curr) => acc + curr.id, 0);
  return sum;
}
