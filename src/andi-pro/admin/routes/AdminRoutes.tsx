
import { Navigate, Route, Routes } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";
import { Main } from "../../../theme";
import { useSidebarMenuStore } from "../../../hooks";

import { NavBarScreen, SlideShowMenu } from "../../shared";
import { HomeScreen, PerfilScreen } from "../home/pages";


import { CrearAdmin, EditarAdmin, ListadoAdmin } from "../administrador/pages";
import { CrearConjunto, EditarConjunto, ImagenesConjunto, ListadoConjuntos, NotasConjunto } from "../conjuntos/pages";
import { CobranzaScreen, CrearUsuario, DocumentosUser, EditarUsuario, ListadoUsuarios } from "../usuarios/pages";




export const AdminRoutes = () => {


    const { isSidebarOpen } = useSidebarMenuStore();


    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <NavBarScreen />
          <SlideShowMenu />

          <Main open={isSidebarOpen} theme={undefined}>
            <Toolbar />
            <Box sx={{ width:'100%', margin:'0 auto'}}>

              {/* <BreadcrumbsScreen /> */}

              <Routes>

                  {/* Rutas de Inicio */}
                  <Route path="/" element={ <HomeScreen /> } />
                  <Route path="/perfil" element={ <PerfilScreen /> } />


                  {/* Rutas de Administradores */}
                  <Route path="/admin/list" element={ <ListadoAdmin /> } />
                  <Route path="/admin/create" element={ <CrearAdmin /> } />
                  <Route path="/admin/:id/update" element={ <EditarAdmin /> } />

                  {/* Rutas de Conjuntos */}
                  <Route path="/conjunto/list" element={ <ListadoConjuntos /> } />
                  <Route path="/conjunto/create" element={ <CrearConjunto /> } />
                  <Route path="/conjunto/:id/update" element={ <EditarConjunto /> } />
                  <Route path="/conjunto/:id/notas" element={ <NotasConjunto /> } />
                  <Route path="/conjunto/:id/images" element={ <ImagenesConjunto /> } />

                  {/* Rutas de Usuarios */}  
                  <Route path="/user/list" element={ <ListadoUsuarios /> } />
                  <Route path="/user/create" element={ <CrearUsuario /> } />
                  <Route path="/user/:id/update" element={ <EditarUsuario /> } />
                  <Route path="/user/:id/doc" element={ <DocumentosUser /> } />
                  <Route path="/user/:id/cobranza" element={ <CobranzaScreen /> } />

                  <Route path="/*" element={ <Navigate to="/" /> } />

              </Routes>
            </Box>
          </Main>
        </Box>
      </>

    )
}
