

import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen, OlvidePasswordScreen, RegisterScreen } from '../pages';




export const AuthRoutes = () => {

    return (

        <Routes>
            <Route path="login" element={ <LoginScreen /> } />
            <Route path="register" element={ <RegisterScreen /> } />
            <Route path="res-password" element={ <OlvidePasswordScreen /> } />


            <Route path='/*' element={ <Navigate to="/auth/login" /> } />
        </Routes>
        
    )
}
