import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      console.log(`${results[0].body} ${result[1].createUserResult.firstName} ${result[2].createUserResult.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
