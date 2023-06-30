export getFullResponseFromAPI(success) {
  if (success == true) {
    let object = { status: 200, body: 'Success' }
    resolve(object);
  } else {
    reject(Error("The fake API is not working currently"));
  }
}
