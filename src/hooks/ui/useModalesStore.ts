
import { useDispatch, useSelector } from 'react-redux';
import { toggleAdminCambioClave, toggleCobranzaNew, toggleVerImagen } from '../../store';





export const useModalesStore = () => {

    const dispatch = useDispatch();
    const { modalAdmin, modalImg, modalCobranza } = useSelector( ( state: any ) => state.modales );


    
    
    const toggleAdminPassowrd = ( valor: boolean) => {
        dispatch( toggleAdminCambioClave(valor) );
    }

    
    const toggleStartVerImagen = ( valor: boolean) => {
        dispatch( toggleVerImagen(valor) );
    }


    const toggleStartCobranza = ( valor: boolean) => {
        dispatch( toggleCobranzaNew(valor) );
    }




    return {
        //Propiedades
        modalAdmin,
        modalImg,
        modalCobranza,

        // Metodos
        toggleAdminPassowrd,
        toggleStartVerImagen,
        toggleStartCobranza,
    }

}