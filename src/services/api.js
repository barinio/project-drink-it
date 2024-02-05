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
export const updAvatar = async avatar => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const { data } = await instance.patch(`/api/users/avatar`, formData, config);
  setToken(data.token);
  return data;
};

// ----------- dailynorma-service -------------------

// export const fetchDailyNorma = async id => {
//   const { data } = await instance.get(`/api/users/dailynorma/${id}`);
//   return data;
// };

// export const newDailyNorm = async ({ id, updatedData }) => {
//   console.log(updatedData);
//   const { data } = await instance.patch(`/api/users/dailynorma/${id}`, updatedData);
//   return data;
// };
export const fetchDailyNorma = async () => {
  const { data } = await instance.get(`/api/users/dailynorma`);
  return data;
};

export const newDailyNorm = async ({ updatedData }) => {
  console.log(updatedData);
  const { data } = await instance.patch(`/api/users/dailynorma`, updatedData);
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
