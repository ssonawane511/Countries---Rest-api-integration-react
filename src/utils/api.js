import axios from './axios';

// -------------- Countries ----------------
export const getCountries = (pageId) => {
	return axios.get('/all');
};

export const searchCountries = (query) => {
	return axios.get(`/name/${query}`);
};