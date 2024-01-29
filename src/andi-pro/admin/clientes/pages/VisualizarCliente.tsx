

import { DisenioPaginas } from '../../../layouts';
import { FormularioEditarCliente } from '../components';






export const VisualizarCliente = () => {



  return (


    <DisenioPaginas titulo="Detalles de Cliente" subtitulo="Información del Cliente Potencial" add={false} url="customer/lead/list">

      <FormularioEditarCliente />
    
    </DisenioPaginas>


  )


}



