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

export const updUserInfo = async ({ body, id }) => {
  const { data } = await instance.patch(`/api/users/info/${id}`, body);
  // console.log('data:', data);
  setToken(data.token);

  return data;
};

// ----------- dailynorma-service -------------------

export const fetchDailyNorma = async id => {
  const { data } = await instance.get(`/api/dailynorma/${id}`);
  return data.dailyNorma;
};

export const newDailyNorma = async (id, updatedData) => {
  const { data } = await instance.patch(`/api/dailynorma/${id}`, updatedData);
  return data;
};

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

// -------------------waterMonth----------------------

export const fetchMonthWater = async selectDate => {
  const { data } = await instance.get(`/api/user/water/month?date=${selectDate}`);
  return data;
};
