import { request } from '@/shared/http';
import { serialize } from '@/shared/lib/serialize';
import { WrongCredentialsError } from '@/shared/errors';
import { validateAuthResponse } from './auth.validate';

type Credentials = {
  username: string;
  password: string;
};

export async function login(credentials: Credentials) {
  try {
    const options = { body: serialize(credentials) };
    const response = await request.post('auth/login/', options).json();

    return validateAuthResponse(response);
  } catch {
    return new WrongCredentialsError();
  }
}
