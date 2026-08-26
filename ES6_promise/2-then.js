export default function handleResponseFromAPI(promise) {
  return promise
  .then(() => {
    resolve({'status': 200, 'body': 'success'});
  })
  .catch(() => {
    reject(new Error);
  })
  .finally(() => {
    console.log('Got a response from the API')
  });
}
