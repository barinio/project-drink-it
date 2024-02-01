import axios from 'axios';
import { newDate } from 'redux/waterDetails/helpers';

const instance = axios.create({
  baseURL: 'https://project-drink-it-backend.onrender.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// ----------- auth-service -------------------

export const requestSignup = async body => {
  const { data } = await instance.post('/api/users/register', body);
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await instance.post('/api/users/login', body);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/api/users/logout');
  return data;
};
export const requestRefreshUser = async () => {
  const { data } = await instance.get('/api/users/current');
  return data;
};

// ----------- dailynorma-service -------------------

export const getDailyNormaData = async ({ id, _id }) => {
  const { data } = await instance.get(`/api/users/dailynorma/${_id}?_id=${id}`);
  return data;
};

export const updateDailyNormaData = async ({ id, _id, userData }) => {
  const { data } = await instance.patch(`/api/users/${_id}?_id=${id}/dailynorma`, userData);
  return data;
};
// export const updateDailyNormaData = async ({ _id, userData }) => {
//   const { data } = await instance.patch(`/api/users/${_id}/dailynorma`, userData);
//   return data;
// };
// -------------------water----------------------

export const fetchTodayWater = async () => {
  const time = newDate(new Date());
  const { data } = await instance.get(`/api/user/water/today?date=${time}`);
  return data;
};

export const addWaters = async newWater => {
  const { data } = await instance.post('/api/user/water', newWater);
  return data;
};

export const editWater = async ({ _id, id, newWater }) => {
  const { data } = await instance.put(`/api/user/water/${_id}?_id=${id}`, newWater);
  return data;
};

export const deleteWater = async ({ id, _id }) => {
  await instance.delete(`/api/user/water/${_id}?_id=${id}`);
};
