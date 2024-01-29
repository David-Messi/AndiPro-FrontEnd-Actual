

import { DisenioPaginas } from '../../../layouts';
import { FormularioEditarCliente } from '../components';




export const EditarCliente = () => {



    return (

        <DisenioPaginas titulo="Detalles de Cliente" subtitulo="Información del Cliente Potencial" url="customer/lead/list" add={false}>

            <FormularioEditarCliente bloqueo={false} guardar={true} />

        </DisenioPaginas>
    )
}
