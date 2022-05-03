import request from '.';

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
