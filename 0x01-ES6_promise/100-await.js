import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return ({
    photo: (await uploadPhoto()).status === 200 ? await uploadPhoto() : null,
    user: (await createUser()).status === 200 ? await createUser() : null,
  });
}
