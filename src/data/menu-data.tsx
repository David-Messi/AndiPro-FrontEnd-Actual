
import { iconos } from "./iconos-data"

const icon = iconos;





export const menuData = [
    { 
        name: 'Dashboard', 
        icon: icon['inicio'], 
        // ruta: '/admin/dashboard',
        submenus: [
            {subtitle: 'Inicio', ruta: ''},
            {subtitle: 'Perfil', ruta: 'perfil'},

        ],
    },
    { 
        name: 'Usuarios', 
        icon: icon['usuario'], 
        submenus: [
            {subtitle: 'Admin', ruta: 'admin/list'},
            {subtitle: 'Conjuntos', ruta: 'conjunto/list'},
            {subtitle: 'Usuarios', ruta: 'user/list'},
        ],
    },
    // { 
    //     name: 'Productos', 
    //     icon: icon['producto'], 
    //     submenus: [
    //         {subtitle: 'Productos', ruta: 'list-prod'},
    //     ],
    // },
]


