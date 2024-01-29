
import { useDispatch, useSelector } from "react-redux";
import cobranzaApi from "../../api/cobranzaApi";

import { onAddNewCobranza, onDeleteCobranza, onListCobranzas, onLoandingCobranzas } from "../../store";

import Swal from "sweetalert2";





export const useCobranzaStore = () => {


    const dispatch = useDispatch();
    const { isLoadingCobranza, cobranzas, activeCobranza  } = useSelector( (state: any) => state.cobranza );

    
    

    // const setActiveCobranza = async( uid: String ) => {
    //     try {
    //         const { data } = await cobranzaApi.get(`/${uid}`);
    //         dispatch( onSetActiveCobranza( data ) );
    //     } catch (error) {
    //         console.log(error, 'Cobranzas');
    //         // Swal.fire('Error', error.response.data.errors[0].msg, 'error');
    //     }
    // }


    // const deleteActiveCobranza = async() => {
    //     dispatch( onActiveCobranzaClear() );
    // }



    const startSavingCobranza = async( cobranza: any ) => {
        try {
            const { data } = await cobranzaApi.post('/', cobranza);
            dispatch( onAddNewCobranza( data.cobranzaDB ) );
            Swal.fire('Exitoso', 'Cobranza Creada', 'success');
            return true;
        } catch (error: any) {
            console.log(error)
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
            return false;
        }
    } 


    const startLoadingCobranzas = async( id: string ) => {
        dispatch(onLoandingCobranzas(true));
        try {
            const { data } = await cobranzaApi.get(`/xuser/${id}`);
            dispatch( onListCobranzas(data.cobranza) );
            dispatch(onLoandingCobranzas(false));
        } catch (error) {
            console.log('Error al Cargar Cobranzas');
            dispatch(onLoandingCobranzas(false));
        }
    }   



    const eliminarCobranza = async( id: string ) => {
        try {
            const { data } = await cobranzaApi.delete(`/${id}`);
            Swal.fire('Exitoso', 'Cobranza Eliminada', 'success');
            dispatch( onDeleteCobranza( data.cobranzaDelete ) );
            return true;
        } catch (error) {
            console.log(error, 'Cobranzas');
            return false;
        }
    }




    return {
        //Propiedades
        isLoadingCobranza,
        cobranzas,
        activeCobranza,

        //Metodos
        startSavingCobranza,
        startLoadingCobranzas,
        eliminarCobranza,
    }

}
