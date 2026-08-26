export default function handleResponseFromAPI(promise) {
  const promise1 = new Promise((resolve, reject) => {
    resolve({'status': 200, 'body': 'success'});
    reject();
  });
  promise1.then(
    console.log('Got a response from the API')
);
  return promise1
}
