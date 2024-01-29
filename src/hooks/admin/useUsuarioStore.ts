
import { useDispatch, useSelector } from "react-redux";

import usuarioApi from "../../api/usuarioApi";
import { activeSetUsuario, deleteActiveUsuario, onAddNewUsuario, onListUsuarios, onLoandingUsuarios, onUpdateUsuario } from "../../store";

import Swal from "sweetalert2";





export const useUsuarioStore = () => {


    const dispatch = useDispatch();
    const { isLoadingUsuario, usuarios, total, activeUsuario } = useSelector( (state: any) => state.usuario );

    
    

    const setActiveUsuario = async( uid: String ) => {
        try {
            const { data } = await usuarioApi.get(`/${uid}/`);
            dispatch( activeSetUsuario( data.usuario ) );
        } catch (error) {
            console.log(error, 'Usuario');
        }
    }


    const deleteUsuario = async() => {
        dispatch( deleteActiveUsuario() );
    }



    const startSavingUsuario = async( usuario: any ) => {
        try {
            if( usuario.id ){
                const { data } = await usuarioApi.put(`/${usuario.id}`, usuario);
                dispatch( onUpdateUsuario( data.usuario ) );
                Swal.fire('Exitoso', 'Usuario Actualizado', 'success');
                // return true;
            }else {
                const { data } = await usuarioApi.post('/', usuario );
                dispatch( onAddNewUsuario( data ) );
                Swal.fire('Exitoso', 'Usuario Creado', 'success');
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 


    const startLoadingUsuarios = async(page:number) => {
        dispatch(onLoandingUsuarios(true));
        try {
            const { data } = await usuarioApi.get(`?page=${page}`);
            dispatch( onListUsuarios(data) );
            dispatch(onLoandingUsuarios(false));
        } catch (error) {
            console.log('Error al Cargar Sedes');
            dispatch(onLoandingUsuarios(false));
        }
    }





    return {
        //Propiedades
        isLoadingUsuario,
        usuarios,
        total,
        activeUsuario,

        //Metodos
        startSavingUsuario,
        startLoadingUsuarios,
        setActiveUsuario,
        deleteUsuario,
    }


}
