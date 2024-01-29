

import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../andi-pro/auth/router/AuthRoute';
import { AdminRoutes } from '../andi-pro/admin/routes/AdminRoutes';
import { HomeRoute } from '../andi-pro/home/routes/HomeRoute';







export const AppRouter = () => {


  // const { status, startAutorizado } = useAuthStore();


//   useEffect(() => {
//       checkAuthToken();
//   }, [])


// if( localStorage.getItem('token')){
//   startAutorizado();
// }



//   if( status === 'checking' ){
//       return(
//           <CargandoScreen titulo="Cargando..." />
//       )
//   } 



    
  return (
    <Routes>


            <Route path="/*" element={ <HomeRoute /> } />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="/admin/*" element={ <AdminRoutes /> } />



          {/* <Route element={<PublicRoute />} >
            <Route path="/auth/*" element={ <AuthRoutes /> } />
          </Route>
          

          <Route element={<PrivateRoute />} >
            <Route path="/admin/*" element={ <AdminRoutes /> } />
          </Route> */}


        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
