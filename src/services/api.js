import axios from 'axios';

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

export const getDailyNormaData = async () => {
  const { data } = await instance.get('/api/users/getDailyNorma');
  return data;
};

export const updateDailyNormaData = async userData => {
  const { data } = await instance.patch(
    '/api/users/updateDailyNorma',
    userData
  );
  return data;
};
// -------------------water----------------------

export const fetchTodayWater = async () => {
  const { data } = await instance.get('/api/users/today');
  return data;
};

export const addWaters = async newWater => {
  const { data } = await axios.post('/api/users/water', newWater);
  return data;
};

export const editWater = async ({ newWaterUser, id }) => {
  const { data } = await axios.patch(`/api/users/water/${id}`, newWaterUser);
  return data;
};

export const deleteWater = async id => {
  await axios.delete(`/api/users/water/${id}`);
};
