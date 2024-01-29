
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Breadcrumbs,  } from '@mui/material';
import { StyledBreadcrumb } from '../../theme';
import { Home } from '@mui/icons-material';
import { useBreadcrumbStore } from '../../hooks';
import { breadcrumbsData } from '../../data';






export const BreadcrumbsScreen = () => {
  
  
  const navigate = useNavigate();
  const location = useLocation();
  const { migas, startBreadcrumbs, navegarAndRemover, limpiarStart } = useBreadcrumbStore();


  const busqueda = location.pathname.split('/');
  const id = busqueda[busqueda.length - 2];
  const rutas = breadcrumbsData(id);



  useEffect(() => {

    const urlMiga = rutas.find( m => m.ruta === location.pathname);
    if( !urlMiga ) return;

    startBreadcrumbs(urlMiga);
  }, [location])



  const handleNavegarPincipal = (url: string) => {
    limpiarStart();
    navigate(url);
  }



  const handleNavegar = (url: string) => {
    const valor = migas.findIndex( (m: any) => m.ruta === url);
    if( valor === -1 ) return;
    
    navegarAndRemover(valor);
    navigate(url);
  }


    
  return (

      <Breadcrumbs >

        <StyledBreadcrumb label="Inicio"  onClick={ () => handleNavegarPincipal('/admin') }
            icon={<Home fontSize="small" />} 
        />


        {migas.map((b: any) => (
            <StyledBreadcrumb
              key={b.label} 
              onClick={() => handleNavegar(b.ruta)}
              label={b.label}
            />
          ))}


      </Breadcrumbs>

  );
}
