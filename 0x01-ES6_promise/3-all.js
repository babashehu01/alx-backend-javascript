import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      console.log(`${results[0].body} ${results[1].createUserResult.firstName} ${results[2].createUserResult.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
