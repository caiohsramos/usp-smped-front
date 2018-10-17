import axios from "axios";

const ROOT_URL = 'http://api-dev-smped.ml:3001';

export class SMPEDRepository {

	async get(endpoint) {
		return await axios.get(`${ROOT_URL}/${endpoint}`);
	}

	async post(endpoint, body) {
		return await axios.post(`${ROOT_URL}/${endpoint}`, body);
	}

	async post_with_token(endpoint, body, token) {
		return await axios.post(
			`${ROOT_URL}/${endpoint}`, 
			body,
			{ 
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
	}
}
