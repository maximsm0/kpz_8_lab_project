import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${import.meta.env.VITE_API_AUTH_TOKEN}`,
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error('API error:', error.response?.data || error.message);
		alert('Something went wrong. Please try again.');
		return Promise.reject(error);
	}
);

export default api;
