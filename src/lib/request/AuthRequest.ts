import request from '.';

// Other functions will be added later
// eslint-disable-next-line import/prefer-default-export
export async function signUp(
  email: string,
  password: string,
  nickname: string,
) {
  const res = await request.post('/auth/signup', {
    email,
    password,
    nickname,
  });
  return res.data;
}
