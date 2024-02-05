import axios from 'axios';
// import { refreshSession } from './api';

const instance = axios.create({
	baseURL: window.BASE_URL,
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
