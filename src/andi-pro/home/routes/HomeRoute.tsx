

import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../pages';




export const HomeRoute = () => {

    return (

        <Routes>
            <Route path="" element={ <HomeScreen /> } />


            <Route path='/*' element={ <Navigate to="/" /> } />
        </Routes>
        
    )
}
