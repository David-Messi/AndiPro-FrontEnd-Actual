
import { createSlice } from '@reduxjs/toolkit';



export const adminSlice = createSlice({
    name: 'admins',
    initialState: {
        isLoadingAdmin: true,
        admins: [],
        activeAdmin: null,
        info: null
    },
    
    reducers: {

        onSetActiveAdmin: ( state, { payload } ) => {
            state.activeAdmin = payload;
        },


        onActiveAdminClear: ( state ) => {
            state.activeAdmin = null;
        },
        

        onAddNewAdmin: ( state: any, { payload } ) => {
            state.admins.push( payload );
            state.activeAdmin = null;
        },


        onUpdateAdmin: ( state: any, { payload } ) => {
            state.admins = state.admins.map( (admin: any) => {
                if( admin.id === payload.id ){
                    return payload
                }
                return admin
            });
        },


        onListAdmins: ( state, { payload = [] } ) => {
            state.isLoadingAdmin = false;
            state.admins = payload;
        },


        onLoandingAdmins: ( state, { payload = true } ) => {
            state.isLoadingAdmin = payload;
        },


        onInfoComplete: ( state, { payload } ) => {
            state.info = payload;
        }
    } 
});





export const { onSetActiveAdmin, onActiveAdminClear, onAddNewAdmin, onUpdateAdmin, onListAdmins, onLoandingAdmins, onInfoComplete } = adminSlice.actions;
