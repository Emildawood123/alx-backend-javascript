export default function hasValuesFromArray(set, arr) {
  const newArr = [...set];
  for (const element of arr) {
    if (!(newArr.includes(element))) {
      return false;
    }
  }
  return true;
}
