import { api } from '@/lib/api-client';

import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
  username: string;
  email: string;
  password: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return api.post('/auth/register', data);
};