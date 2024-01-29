
import { useDispatch } from "react-redux";
import genericaApi from "../../api/genericaApi";
import { onListAdmins, onListUsuarios } from "../../store";

import Swal from "sweetalert2";






export const useBusquedas = () => {


    const dispatch = useDispatch();


    const buscarConjunto = async( texto: string ) => {
        try {
            const { data } = await genericaApi.get(`/busqueda/tipo/conjuntos/${texto}`);
            dispatch( onListAdmins( data.data ) );
            return true;
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 



    const buscarUserPorInmueble = async( texto: string ) => {
        try {
            const { data } = await genericaApi.get(`/busqueda/tipo/usuarios/${texto}`);
            dispatch( onListUsuarios( data ) );
            return true;
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 


    const buscarUserPorConjunto = async( texto: string ) => {
        try {
            const { data } = await genericaApi.get(`/busqueda/tipo/apartamento/${texto}`);
            dispatch( onListUsuarios( data ) );
            return true;
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 







    return {
        //Metodos
        buscarConjunto,
        buscarUserPorInmueble,
        buscarUserPorConjunto,
    }


}
