export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return { status: 200, body: 'Success' };
    })
    .catch(() => Error())
    .finally(() => 'Got a response from the API');
}
