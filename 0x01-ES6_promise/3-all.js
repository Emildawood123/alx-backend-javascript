import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((res) => createUser().then((resolve) => {
    console.log(`${res.body} ${resolve.firstName} ${resolve.lastName}`);
  }).catch(() => console.log('Signup system offline'))).catch(() => console.log('Signup system offline'));
}
