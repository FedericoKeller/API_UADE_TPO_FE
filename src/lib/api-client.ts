import Axios, { AxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { notifications } from '@mantine/notifications';
import storage from '@/utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  
  config.headers.Accept = 'application/json';
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.error || error.response?.data?.message;
    notifications.show({
      color: 'red',
      title: 'Error',
      message
    });

    return Promise.reject(error);
  }
);