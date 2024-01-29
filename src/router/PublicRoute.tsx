

import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";





export const PublicRoute = () => {


    const { status } = useAuthStore();


    if( status === 'authenticated') {
        return <Navigate to="/admin" />
    }
    
    return <Outlet /> 

}
