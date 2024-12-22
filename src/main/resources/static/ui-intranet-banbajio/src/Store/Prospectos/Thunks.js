import { setPersonalData } from "./Prospectos";

export const startSaveProspectoPersonalData = (data) => {
    return async (dispatch, getState) => {
        try {
           await dispatch(setPersonalData(data));
        } catch (error) {
            throw error;
        }
    }
}