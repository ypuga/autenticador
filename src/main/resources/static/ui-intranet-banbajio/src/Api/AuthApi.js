import axios from "axios";

const PATH = "http://localhost:8088/Auth/login";

const login = async (data) => {
    try {
        const resp = await axios.post(PATH, data);
        return resp;
    } catch (error) {
        throw (error.response);
    }
};

export default { login };