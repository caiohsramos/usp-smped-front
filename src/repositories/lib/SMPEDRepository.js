import axios from "axios";

const ROOT_URL = 'http://api-dev-smped.ml';

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

    async patch(endpoint, id, body) {
        return await axios.patch(`${ROOT_URL}/${endpoint}/${id}`, body);
    }
}
