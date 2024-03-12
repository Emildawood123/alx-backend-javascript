export const weakMap = new WeakMap();
export default function queryAPI(url) {
  let counter = weakMap.get(url) || 0;
  counter += 1;
  weakMap.set(url, counter);
  if (counter >= 5) {
    throw Error('Endpoint load is high');
  }
}
