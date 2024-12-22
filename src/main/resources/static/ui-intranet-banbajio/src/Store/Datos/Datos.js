import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    domicilioData: []
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDomicilioData: (state, action) => {
            state.domicilioData = action.payload;
        },
        resetAuthState: () => initialState
    }
});

export const { resetAuthState, setDomicilioData } = dataSlice.actions;

export default dataSlice.reducer;