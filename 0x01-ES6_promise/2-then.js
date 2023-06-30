export default function handleResponseFromAPI(promise) {
  const data = { status: 200, body: 'success' };
  promise
    .then(() => (data))
    .catch(() => { throw new Error(''); })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
