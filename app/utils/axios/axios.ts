import axiosStatic from 'axios';

export const axios = axiosStatic.create();

export const headers = {
  'x-access-token': localStorage.getItem('jwttoken')
};
