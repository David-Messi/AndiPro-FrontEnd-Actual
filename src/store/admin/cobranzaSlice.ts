
import { createSlice } from '@reduxjs/toolkit';



export const cobranzaSlice = createSlice({
    name: 'cobranzas',
    initialState: {
        isLoadingCobranza: false,
        cobranzas: [],
        activeCobranza: null
    },
    reducers: {

        activeSetCobranza: ( state, { payload } ) => {
            state.activeCobranza = payload;
        },


        deleteActiveCobranza: ( state ) => {
            state.activeCobranza = null;
        },
        

        onAddNewCobranza: ( state: any, { payload } ) => {
            state.cobranzas.push( payload );
            state.activeCobranza = null;
        },


        onUpdateCobranza: ( state: any, { payload } ) => {
            state.cobranzas = state.cobranzas.map( (cobranza: any) => {
                if( cobranza.id === payload._id ){
                    return payload
                }
                return cobranza
            });
        },


        onListCobranzas: ( state, { payload } ) => {
            state.cobranzas = payload;
        },


        onLoandingCobranzas: ( state, { payload = false } ) => {
            state.isLoadingCobranza = payload;
        },


        onDeleteCobranza: ( state, { payload } ) => {
                state.cobranzas = state.cobranzas.filter( (cob: any) => cob._id !== payload._id );
        }

    } 
});





export const { activeSetCobranza, deleteActiveCobranza, onAddNewCobranza, onUpdateCobranza, onLoandingCobranzas, onListCobranzas, onDeleteCobranza } = cobranzaSlice.actions;
