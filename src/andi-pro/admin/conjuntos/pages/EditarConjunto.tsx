

import { DisenioPaginas } from '../../../layouts';
import { FormularioEditarAdmin } from '../components';






export const EditarConjunto = () => {



    return (

        <DisenioPaginas titulo="Detalles del Conjunto" subtitulo="Información del Conjunto" url="conjunto/list" add={false}>

            <FormularioEditarAdmin />

        </DisenioPaginas>
    )
}
