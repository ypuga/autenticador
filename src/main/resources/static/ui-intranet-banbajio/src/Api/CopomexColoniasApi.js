import axios from "axios";

const BASEPATH = 'https://api.copomex.com/query';
const SECRET_TOKEN = 'cf778760-de20-4204-ae4e-4dc4b762946c';

const getColonyInfo = async (cp) => {
    try {
        const resp = await axios.get(`${BASEPATH}/info_cp/${cp}?token=${SECRET_TOKEN}`);
        if (resp.status === 200) {
            return resp.data;
        } else {
            throw new Error('El código postal no es válido o no se encontró.');
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Error al consultar el código postal');
        }
        throw new Error(error.message || 'Error desconocido al consultar el código postal.');
    }
};

export default { getColonyInfo };
