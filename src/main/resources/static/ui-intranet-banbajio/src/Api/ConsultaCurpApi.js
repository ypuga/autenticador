import axios from "axios";

const BASEPATH = 'https://api.valida-curp.com.mx'
const SECRET_TOKEN = '054cc959-12e3-4765-bdca-3264f904a583';

const getCurpInfo = async (curp) => {
    try{
        const resp = await axios.get(`${BASEPATH}/curp/obtener_datos/?token=pruebas&curp=PXNE660720HMCXTN06`);
        if (resp.status === 200) {
            return resp.data.response.Solicitante;
        } else {
            throw new Error('La CURP ingresada no es valida.');
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Error al consultar la curp del cliente');
        }
        throw new Error(error.message || 'Error desconocido al consultar el curp.');
    }
};

export default {getCurpInfo}