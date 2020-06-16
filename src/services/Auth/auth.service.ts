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

export class Auth {
  public async signIn(payload: SignInPayload) {
    return axios.post<{ token: string }>('/auth', { ...payload });
  }

  public async signUp(payload: SignUpPayload) {
    return axios.post('/user', { ...payload });
  }
}
