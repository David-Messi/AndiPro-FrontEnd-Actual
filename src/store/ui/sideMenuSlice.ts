
import { createSlice } from '@reduxjs/toolkit';




export const sideMenuSlice = createSlice({

    name: 'sideMenu',
    initialState: {
        isSidebarOpen: true
    },
    
    reducers: {
        onToggleSideMenu: ( state ) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    }

    
});



export const { onToggleSideMenu } = sideMenuSlice.actions;