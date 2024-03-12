export default function cleanSet(set, startString) {
  const res = [];
  for (const item of set) {
    if (startString === '') {
      return '';
    } if (item.startsWith(startString)) {
      const newItem = item.substring(startString.length);
      res.push(newItem);
    }
  }
  if (res.length === 0) {
    return '';
  }
  return res.join('-');
}
