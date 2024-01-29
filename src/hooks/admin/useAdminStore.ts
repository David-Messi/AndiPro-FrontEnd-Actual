
import { useDispatch, useSelector } from "react-redux";
import adminApi from "../../api/adminApi"; 

import { onActiveAdminClear, onAddNewAdmin, onInfoComplete, onListAdmins, onLoandingAdmins, onSetActiveAdmin, onUpdateAdmin } from "../../store"; 
import Swal from "sweetalert2";






export const useAdminStore = () => {


    const dispatch = useDispatch();
    const { info, isLoadingAdmin, admins, activeAdmin } = useSelector( (state: any) => state.admin );



    const setActiveAdmin = async( id: String ) => {
        try {
            const { data } = await adminApi.get(`/xid/${id}`);
            dispatch( onSetActiveAdmin( data.data ) );
        } catch (error) {
            console.log(error, 'Admin');
        }
    }


    
    const deleteAdmin = async() => {
        dispatch( onActiveAdminClear() );
    }



    const startSavingAdmin = async( admin: any ) => {
        try {
            if( admin.id ){
                const { data } = await adminApi.put(`/${admin.id}`, admin);
                dispatch( onUpdateAdmin(data.data) );
                Swal.fire('Exitoso', 'Admin Actualizado', 'success');
                return true;
            }else {
                const { data } = await adminApi.post('/', admin );
                dispatch( onAddNewAdmin( data.data ) );
                Swal.fire('Exitoso', 'Admin Creado', 'success');
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 



    const startSavingNotasConjunto = async( notas: any ) => {
        try {
            const { data } = await adminApi.put(`/notas/${notas.id}`, notas );
            dispatch( onUpdateAdmin( data.data ) );
            Swal.fire('Exitoso', 'Notas Actualizadas', 'success');
            return true;
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 



    const startLoadingAdmins = async(admin: string) => {
        dispatch(onLoandingAdmins(true));
        try {
            const { data } = await adminApi.get(`/${admin}`);
            dispatch( onListAdmins(data.data) );
            dispatch(onLoandingAdmins(false));
        } catch (error) {
            console.log('Error al Cargar Sedes');
            dispatch(onLoandingAdmins(false));
        }
    }



    const cambioClaveSencillo = async( admin: any ) => {
        try {
            await adminApi.post(`/clave-sencilla/${admin.id}`, admin );
            Swal.fire('Exitoso', 'Passowrd Actualizado', 'success');
            return true;
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.birth_date[0], 'error');
            return false;
        }
    } 



    
    const infoCompletaDashboard = async() => {
        dispatch(onLoandingAdmins(true));
        try {
            const { data } = await adminApi.get(`/all/info/all`);
            dispatch( onInfoComplete(data.data) );
            dispatch(onLoandingAdmins(false));
        } catch (error) {
            console.log('Error al Cargar Sedes');
            dispatch(onLoandingAdmins(false));
        }
    }






    return {
        //Propiedades
        isLoadingAdmin,
        admins,
        activeAdmin,
        info,

        //Metodos
        setActiveAdmin,
        deleteAdmin,
        startSavingAdmin,
        startLoadingAdmins,
        infoCompletaDashboard,
        startSavingNotasConjunto,

        cambioClaveSencillo,
    }


}
