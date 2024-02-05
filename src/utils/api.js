import axios from './axios';

// -------------- Countries ----------------
export const getCountries = (pageId) => {
	return axios.get('/all');
};