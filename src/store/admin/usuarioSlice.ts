
import { createSlice } from '@reduxjs/toolkit';



export const usuarioSlice = createSlice({
    name: 'usuarios',
    initialState: {
        isLoadingUsuario: false,
        usuarios: [],
        total: 0,
        activeUsuario: null
    },
    reducers: {

        activeSetUsuario: ( state, { payload } ) => {
            state.activeUsuario = payload;
        },


        deleteActiveUsuario: ( state ) => {
            state.activeUsuario = null;
        },
        

        onAddNewUsuario: ( state: any, { payload } ) => {
            state.usuarios.push( payload );
            state.activeUsuario = null;
        },


        onUpdateUsuario: ( state: any, { payload } ) => {
            state.usuarios = state.usuarios.map( (user: any) => {
                if( user.id === payload._id ){
                    return payload
                }
                return user
            });
        },


        onListUsuarios: ( state, { payload = [] } ) => {
            state.usuarios = payload.data;
            state.total = payload.total;
        },


        onLoandingUsuarios: ( state, { payload = false } ) => {
            state.isLoadingUsuario = payload;
        },

    } 
});





export const { activeSetUsuario, deleteActiveUsuario, onAddNewUsuario, onUpdateUsuario, onListUsuarios, onLoandingUsuarios } = usuarioSlice.actions;
