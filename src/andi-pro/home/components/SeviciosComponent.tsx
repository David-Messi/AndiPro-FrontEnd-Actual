
import { Star } from '@mui/icons-material';
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';



const estilo = {
    minHeight:200,
    p:7,
    background:`white`,
};



const data = [
    {numero:'1', titulo:'Gestión de cobro especializado en PH', color:'white', letra:'black', datos: [
        'Realizamos el cobro pre jurídico y jurídico en su copropiedad.',
        'Aseguramos la recuperación de la cartera desde el primer mes de trabajo.',
        'Ayudamos a la copropiedad a lograr su proyectos, por medio de la consecusión de recursos en poco tiempo.'
    ]},
    {numero:'2', titulo:'Administración de inmuebles y gestión inmobiliaria', color:'red', letra:'white', start:'white', datos: [
        'Contamos con la experiencia para administrar tu inmueble; para que tengas una renta segura y fidedigna.',
        'Nos encargamos de realizar el diseño de espacios interiores, adecuación y remodelación.',
        'Brindamos todas las garantías para que recibas tu ingreso periódicamente sin preocupaciones.'
    ]},
    {numero:'3', titulo:'Administración de PH', color:'black', letra:'white', datos: [
        'Especializados en trabajo profesional y humano en las áreas:',
        'Administrativas (atención al copropietario), operativas y financieras.',
        'Pedagogía hacia la comunidad y gestión de órganos administrativos.',
        'Proyectamos innovación para valorizar su inmueble.'
    ]},
    {numero:'4', titulo:'Asesorías y Servicios operativos', color:'white', letra:'black', datos: [
        'Asesorías y acompañamientos jurídicos y judiciales.',
        'Asesorías financieras y planes de financiación.',
        'Atención correctiva inmediata en las áreas de electricidad, plomería y/o equipos de motobombeo.',
        'Asesorías fiscales, auditorias financieras, tributarias y revisorías fiscales.'
    ]},
]




export const SeviciosComponent = () => {

    return (

        <Grid container spacing={2} sx={estilo}>
            <Box sx={{width:'100%', display:'flex', justifyContent:'center', mb:3, mt:3}}>
                <Typography variant='h1'>Servicios</Typography>
            </Box>

            <Grid container spacing={2} sx={{ display:'flex', alignItems:'stretch'}}>
                {data.map( item => (
                    <Grid key={item.titulo} item xs={12} sm={6} md={3}>
                        <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center', background:`${item.color}`, p:{md:2, lg:3, xs:3}, borderRadius:'25px', height:'100%', border:(item.color === 'white') ? '1px solid red' : ''}} >
                            <Avatar sx={{width:120, height:120}}>
                                <Typography sx={{fontSize: "50px"}}>{item.numero}</Typography>
                            </Avatar>
                            <Typography sx={{my:2, fontSize:{xs:30, sm:32, md:20}, fontWeight:'bold', textAlign:'center', letterSpacing:'-0.9px', color:`${item.letra}`}}>
                                {item.titulo}
                            </Typography>

                            <List sx={{ width: '100%', background:`${item.color}`}}>
                                {item.datos.map( arr => (
                                    <ListItem disablePadding key={arr}>
                                        <ListItemIcon sx={{mr:-2}}> <Star sx={{color:(item.start) ? item.start : 'red'}} /> </ListItemIcon>
                                        <ListItemText sx={{color:`${item.letra}`}}  primary={arr} />
                                    </ListItem>
                                ))
                                }
                            </List>
                        </Grid>
                    </Grid>
                ))
                }
            </Grid>
        </Grid>
    )
}
