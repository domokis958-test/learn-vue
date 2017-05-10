import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://vuejs-stock-trader-be5bd.firebaseio.com/',
  timeout: 1000,
});