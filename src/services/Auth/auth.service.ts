import axios from 'axios';

import { API_URL } from 'common/constants';

axios.defaults.baseURL = API_URL;

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthdate: Date;
  phone: string;
};

type SignUpResponse = {
  id: string;
  email: string;
  name: string;
  cpf: string;
  birthdate: Date;
  phone: string;
  role: 'REGULAR' | 'ADMINISTRATOR';
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: Date;
  updatedAt: Date;
};

export class Auth {
  public async signIn(payload: SignInPayload): Promise<string> {
    const { data } = await axios.post<{ token: string }>('/auth', {
      ...payload,
    });

    return data.token;
  }

  public async signUp(payload: SignUpPayload): Promise<SignUpResponse> {
    const { data } = await axios.post<SignUpResponse>('/user', { ...payload });

    return data;
  }
}
