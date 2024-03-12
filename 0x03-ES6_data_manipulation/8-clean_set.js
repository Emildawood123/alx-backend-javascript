export default function cleanSet(set, startString) {
  const res = [];
  if (startString === '') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      const newItem = item.substring(startString.length);
      res.push(newItem);
    }
  }
  return res.join('-');
}
