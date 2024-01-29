
import { DisenioPaginas } from "../../../layouts"
import { FormEditarMarca } from "../components"






export const EditarMarca = () => {
  return (


    <DisenioPaginas titulo="Detalles de la Marca" subtitulo="Información de la Marca" add={false}  url="product/brand">

        <FormEditarMarca bloqueo={false} guardar={true} />


    </DisenioPaginas>



  )
}
