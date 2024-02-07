import axios from 'axios';
// import { refreshSession } from './api';

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1'
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;
