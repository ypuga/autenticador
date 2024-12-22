import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./Authetication/Authentication";
import { dataSlice } from "./Datos/Datos";
import { prospectosSlice } from "./Prospectos/Prospectos";


const store = configureStore({
    reducer: {
      sistema: authenticationSlice.reducer,
      data: dataSlice.reducer,
      prospectos: prospectosSlice.reducer
    },
  });
  
  export default store;