import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const use = await createUser();
    return ({
      photo: upload,
      user: use,
    });
  } catch (anything) {
    return {
      photo: null,
      user: null,
    };
  }
}
