
import { getEnvVariables } from '../../helpers';

import Swal from 'sweetalert2';




export const useUploadStore = () => {



    const { VITE_APP_API_URL: url } = getEnvVariables();



    const fileUpload = async(id:string, tipo:string, archivo:any) => {

        const base =`${url}/uploads/${ tipo }/${ id }`;

        const formData = new FormData();
        formData.append('imagen', archivo);
    
        try {
            const resp = await fetch( base, {
                method: 'PUT',
                body: formData
            });
    
            const body = await resp.json();
    
            if( body.ok ) {
                return body.nombreArchivo;
            } else {
                return Swal.fire('Error', body.msg, 'error');
            }
            
        } catch (error) {
            console.log(error);
        }
    }




    
    const subirImagenTodoCategoria = async(id:string, tipo:string, archivo:any) => {

        try {
            Swal.fire({
                title: 'Cargando....',
                text: 'Espere Por Favor',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            const imagenResp = await fileUpload(id, tipo, archivo);
            if( typeof imagenResp !== 'string' ){ return }
            Swal.close();
            Swal.fire('Exitoso', 'Imagen Subida', 'success');
            return imagenResp;
        } catch (error) {
            console.log(error);
        }
    }





    return {
        // Metodos
        subirImagenTodoCategoria,
    }

}







