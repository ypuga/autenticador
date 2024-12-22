import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    zona: '',
    profile: '',
    sucursal: '',
    isAuth: false,
    isCheckingAuth: true,
};

export const authenticationSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setClienteAlameda: (state, action) => {
            state.clienteAlameda = action.payload;
        },
        setIsCheking: (state, action) =>{
            state.isCheckingAuth = action.payload;
        },
        setLogIn: (state, action)=>{
            console.log(action.payload);
            state.user = action.payload.sub;
            state.zona = action.payload.zona;
            state.sucursal = action.payload.sucursal;
            state.profile = action.payload.profile;
            state.isAuth = true;
            state.isCheckingAuth = false;
        },
        setLogOut: (state, action)=>{
            state.user = '';
            state.zona = '';
            state.sucursal = '';
            state.profile = '';
            state.isAuth = false;
            state.isCheckingAuth = false;
        },
        resetAuthState: () => initialState
    }
});

export const { resetAuthState, setIsCheking, setLogIn, setLogOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;