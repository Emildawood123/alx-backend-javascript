export default function concatArrays(array1, array2, string) {
  const arr3 = [...array1, ...array2, ...string.split('')];
  return arr3;
}
