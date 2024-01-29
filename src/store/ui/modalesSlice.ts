
import { createSlice } from '@reduxjs/toolkit';




export const modalesSlice = createSlice({

    name: 'sideMenu',
    initialState: {
        modalAdmin: false,
        modalImg: false,
        modalCobranza: false,
    },
    
    reducers: {

        toggleAdminCambioClave: ( state, { payload } ) => {
            state.modalAdmin = payload;
        },

        toggleVerImagen: ( state, { payload } ) => {
            state.modalImg = payload;
        },

        toggleCobranzaNew: ( state, { payload } ) => {
            state.modalCobranza = payload;
        },

    }

    
});



export const { toggleAdminCambioClave, toggleVerImagen, toggleCobranzaNew } = modalesSlice.actions;