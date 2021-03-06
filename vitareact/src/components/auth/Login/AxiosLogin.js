import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';

const AxiosLoginInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

AxiosLoginInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		
		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
        }
        
		return Promise.reject(error.response);
	}
);

export default AxiosLoginInstance;