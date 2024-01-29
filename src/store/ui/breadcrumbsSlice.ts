
import { createSlice } from '@reduxjs/toolkit';



const migasFromLocalStorage = localStorage.getItem('migas');
 



export const breadcrumbsSlice = createSlice({
    name: 'breadcrum',

    initialState: {
        migas: migasFromLocalStorage ? JSON.parse(migasFromLocalStorage) : [],
    },
    
    reducers: {

        addBreadcrumbs: (state: any, { payload }) => {
            const existeObjeto = state.migas.some((elemento: any) => {
                return elemento.ruta === payload.ruta;
            });
            if( existeObjeto ) return;

            state.migas.push(payload);
            localStorage.setItem('migas', JSON.stringify(state.migas));
        },

        

        removerAlNavegar: ( state, { payload }) => {
            state.migas = state.migas.slice(0, payload+1);
            localStorage.setItem('migas', JSON.stringify(state.migas));
        },



        limpiarState: (state) => {
            state.migas = [];
            localStorage.setItem('migas', JSON.stringify(state.migas));
        },


        removerBreadcrumbs: ( state ) => {
            state.migas.pop();
            // state.migas = state.migas.filter( (m:any) => payload.ruta !== m.ruta)
        },



       

       




    }
});



export const { addBreadcrumbs, removerAlNavegar, limpiarState, removerBreadcrumbs } = breadcrumbsSlice.actions;