



export const breadcrumbsData = ( id:string ) => {

    return [

        // Tu Negocio
        {ruta: '/admin/headquarters/list', label: 'Sedes'},
        {ruta: '/admin/headquarter/create', label: 'Crear Sedes'},
        {ruta: `/admin/headquarter/${id}/detail`, label: 'Visualizar Sede'},
        {ruta: `/admin/headquarter/${id}/update`, label: 'Actualizar Sede'},

        {ruta: '/admin/bussines/position/list', label: 'Posiciones'},
        {ruta: '/admin/bussines/position/create', label: 'Crear Posición'},
        {ruta: `/admin/bussines/position/${id}/detail`, label: 'Visualizar Posición'},
        {ruta: `/admin/bussines/position/${id}/update`, label: 'Actualizar Posición'},

        {ruta: '/admin/bussines/coworker/list', label: 'Listado Coworker'},
        {ruta: '/admin/bussines/coworker/create', label: 'Crear Coworker'},
        {ruta: `/admin/bussines/coworker/${id}/detail`, label: 'Visualizar Coworker'},
        {ruta: `/admin/bussines/coworker/${id}/update`, label: 'Actualizar Coworker'},
    
        // Clientes
        {ruta: '/admin/customer/lead/list', label: 'Clientes'},
        {ruta: '/admin/customer/lead/create', label: 'Crear Cliente'},
        {ruta: `/admin/customer/lead/${id}/detail`, label: 'Visualizar Cliente'},
        {ruta: `/admin/customer/lead/${id}/update`, label: 'Actualizar Cliente'},

        {ruta: '/admin/customer/tag/list', label: 'Etiquetas'},
        {ruta: '/admin/customer/tag/create', label: 'Crear Etiqueta'},
        {ruta: `/admin/customer/tag/${id}/detail`, label: 'Visualizar Etiqueta'},
        {ruta: `/admin/customer/tag/${id}/update`, label: 'Actualizar Etiqueta'},

        // Productos
        {ruta: '/admin/product/brand', label: 'Marcas'},
        {ruta: '/admin/product/brand/create', label: 'Crear Marca'},
        {ruta: `/admin/product/brand/${id}/detail`, label: 'Visualizar Marca'},
        {ruta: `/admin/product/brand/${id}/update`, label: 'Actualizar Marca'},

        {ruta: '/admin/product/sku', label: 'Productos'},
        {ruta: '/admin/product/sku/create', label: 'Crear Producto'},
        {ruta: `/admin/product/brand/${id}/detail`, label: 'Visualizar Marca'},
        {ruta: `/admin/product/brand/${id}/update`, label: 'Actualizar Marca'},





      ]
}