export default function appendToEachArrayValue(array, appendString) {
  let newArr = []
  for (let idx of array) {
    newArr.push(appendString + array[idx]);
  }

  return newArr;
}
