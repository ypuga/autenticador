import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalData: {}
};

export const prospectosSlice = createSlice({
    name: 'prospectoPersonalData',
    initialState,
    reducers: {
        setPersonalData: (state, action) => {
            state.personalData = action.payload;
        },
        resetAuthState: () => initialState
    }
});

export const { setPersonalData, resetAuthState } = prospectosSlice.actions;

export default prospectosSlice.reducer;