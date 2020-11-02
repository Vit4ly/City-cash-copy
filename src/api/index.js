import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://goldentest.website/api/',
  /* other custom settings */
});

export default $axios;
