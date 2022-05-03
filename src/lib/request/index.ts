import axios from 'axios';

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://voteit-api.washnix.com:3000'
      : 'http://localhost:3000/api',
  timeout: 5000,
});

export default request;
