import axios from 'axios';
const baseUrl = 'https://www.venture-ctp.herokuapp.com/api/events';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newEvent => {
  const request = axios.post(baseUrl, newEvent);
  return request.then(response => response.data);
};

const getByID = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};

// const update = (id, newEvent) => {
//   const request = axios.put(`${baseUrl}/${id}`, newEvent);
//   return request.then(response => response.data);
// };

export default { getAll, create, getByID };