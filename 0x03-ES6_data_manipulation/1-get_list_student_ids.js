export default function getListStudentIds(arr) {
  if (typeof arr !== 'object') {
    return [];
  }
  const newArr = arr.map((e) => e.id);
  return newArr;
}
