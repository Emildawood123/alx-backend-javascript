export default function iterateThroughObject(reportWithIterator){
  return Object.values(reportWithIterator).join(' | ');
}