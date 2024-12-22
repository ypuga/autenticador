import ConsultaCurpApi from "../../Api/ConsultaCurpApi";
import CopomexColoniasApi from "../../Api/CopomexColoniasApi";
import { setDomicilioData } from "./Datos";


export const startGetCodigoPostalData = (cp) => {
    return async (dispatch, getState) => {
        try {
            const resp = await CopomexColoniasApi.getColonyInfo(cp);
            dispatch(setDomicilioData(resp));
        } catch (error) {
            throw error;
        }
    }
}

export const startGetCurpInfo = (curp) => {
    return async (dispatch, getState) => {
        try {
            const resp = await ConsultaCurpApi.getCurpInfo(curp);
            if (resp != null) {
                const nombres = resp.Nombres.split(' ');
                const primerNombre = nombres[0] || '';
                const segundoNombre = nombres.slice(1).join(' ') || '';

                const rawFecha = resp.FechaNacimiento; 
                const fechaObj = new Date(rawFecha);
                const year = fechaObj.getFullYear();
                const month = String(fechaObj.getMonth() + 1).padStart(2, '0'); 
                const day = String(fechaObj.getDate()).padStart(2, '0'); 

                const info = {
                    primerNombre,
                    segundoNombre,
                    apellidoPaterno: resp.ApellidoPaterno,
                    apellidoMaterno: resp.ApellidoMaterno,
                    fechaNacimiento: `${year}-${month}-${day}`,
                    genero:
                        resp.Sexo === 'Hombre' ? 'MASCULINO' :
                            resp.Sexo === 'Mujer' ? 'FEMENINO' :
                                'NO BINARIO',
                    estadoNacimiento: resp.EntidadNacimiento.toUpperCase(),
                    rfc :'',
                    isValid: true
                };

                return info;
            } else {
                const info = {
                    primerNombre: '',
                    segundoNombre: '',
                    apellidoPaterno: '',
                    apellidoMaterno: '',
                    fechaNacimiento: '',
                    genero: '',
                    estadoNacimiento: '',
                    rfc :'',
                    isValid: false
                };
                return info;
            }
        } catch (error) {
            throw error;
        }
    };
};
