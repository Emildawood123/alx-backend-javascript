import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return ({ photo: await uploadPhoto() || null, user: await createUser() || null });
}
