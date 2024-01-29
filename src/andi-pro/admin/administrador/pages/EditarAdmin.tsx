

import { DisenioPaginas } from '../../../layouts';
import { FormularioEditarAdmin } from '../components';






export const EditarAdmin = () => {



    return (

        <DisenioPaginas titulo="Detalles de Administrador" subtitulo="Información de Administrador" url="admin/list" add={false}>

            <FormularioEditarAdmin />

        </DisenioPaginas>
    )
}
