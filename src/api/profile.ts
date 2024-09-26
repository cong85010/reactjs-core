import api, { RequestBody } from '.';

const basePath = '/profile';

type User = {
  username: string;
};

export const ProfileAPI = {
  get: (): User => ({ username: '123' }),
  update: (data: RequestBody) => api.put(`${basePath}/update`, data),
};
