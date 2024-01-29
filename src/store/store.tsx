


import { configureStore } from "@reduxjs/toolkit";
import { adminSlice, authSlice, breadcrumbsSlice, cobranzaSlice, modalesSlice, sideMenuSlice, usuarioSlice } from ".";





export const store = configureStore({

    reducer: {

        menu: sideMenuSlice.reducer,
        breadcrumb: breadcrumbsSlice.reducer,
        auth: authSlice.reducer,
        modales: modalesSlice.reducer,
        
        admin: adminSlice.reducer,
        usuario: usuarioSlice.reducer,
        cobranza: cobranzaSlice.reducer,

        
    }
})