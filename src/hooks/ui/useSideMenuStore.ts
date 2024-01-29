
import { useDispatch, useSelector } from 'react-redux';
import { onToggleSideMenu } from '../../store';





export const useSidebarMenuStore = () => {

    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector( ( state: any ) => state.menu );



    
    const toggleMenu = () => {
        dispatch( onToggleSideMenu() );
    }



    return {
        //Propiedades
        isSidebarOpen,

        // Metodos
        toggleMenu,
    }

}