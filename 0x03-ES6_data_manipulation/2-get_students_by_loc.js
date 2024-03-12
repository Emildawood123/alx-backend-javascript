export default function getStudentsByLocation(list, city) {
  const newArr = list.filter((e) => e.location === city);
  return newArr;
}
