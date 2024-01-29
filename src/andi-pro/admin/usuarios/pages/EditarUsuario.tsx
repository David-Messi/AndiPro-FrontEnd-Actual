

import { DisenioPaginas } from '../../../layouts';
import { FormularioEditarUser } from '../components';






export const EditarUsuario = () => {



    return (

        <DisenioPaginas titulo="Detalles de Usuario" subtitulo="Información de Usuario" url="user/list" add={false}>

            <FormularioEditarUser />

        </DisenioPaginas>
    )
}
