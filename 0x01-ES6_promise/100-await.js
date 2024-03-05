import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const upload = (await uploadPhoto()).status === 200 ? await uploadPhoto() : null;
  const use = await createUser();
  if (upload === null) {
    return ({
      photo: upload,
      user: use,
    });
  }
  return {
    photo: null,
    user: null,
  };
}
