
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import dos from '../../../assets/clientes/A.png';
import uno from '../../../assets/clientes/D.png';
import tres from '../../../assets/clientes/SR2.jpg';
import cuatro from '../../../assets/clientes/S.png';
import cinco from '../../../assets/clientes/SR.png';



const estilo = {
    minHeight:200,
    p:8,
    background:`white`,
};


const data = [
    {nombre:'Angélica Salamanca', ceo:'CEO & Líder Administrativa', img:dos, concepto:'Abogada especializada en Derecho Civil, con 12 años de experiencia en Propiedad Horizontal, generando estrategias de ejecución y administración para propiedades, servicio al cliente para la comunidad y pedagogía con los órganos administrativos.'},
    {nombre:'Diana Salamanca', ceo:'CFO & Líder de Negocios', img:uno, concepto:'Porfesional en Finanzas, apasionada por el emprendimiento y la innovación, generadora de valor a través de la estructuración de ofertas para copropiedades, ejecución de modelos operativos y evaluación financiera.'},
    {nombre:'Oscar Moreno', ceo:'COO & Líder de Área', img:tres, concepto:'Encargado de la supervisión y alineación de los servicios operativos que requiera su copropiedad de forma inmediata para superar los imprevistos que pueda requerir en cualquier momento, enfocado en satisfacer las necesidades de la comunidad.'},
    {nombre:'Carolina Quiroz', ceo:'Gerente de Cuenta', img:cuatro, concepto:'Profesional en mercadeo y estrategia comercial. Se caracteriza por tener excelentes relaciones interpersonales, con espíritu de colaboración, motivación y trabajo en equipo, dispuesta a afrontar responsabilidades crecientes.'},
    {nombre:'Camilo Salamanca', ceo:'Jefe Operativo', img:cinco, concepto:'Nuestro jefe de operaciones domina los sistemas informáticos logísticos y su aplicación, especializado en el área eléctrica para ofrecer un servicio integral a las copropiedades.'},
]





export const NuestroEquipo = () => {

    return (

         <Grid container sx={estilo}>
            <Box sx={{width:'100%', mb:4}}>
                <Typography variant='h1' sx={{color:'black', textAlign:'center'}}>Nuestros Equipo</Typography>
                <Typography variant='body1' sx={{textAlign:'center'}}>Contamos con los mejores asesores y aliados en cada área.</Typography>
            </Box>

            <Grid container spacing={5} sx={{display:'flex', justifyContent:'center', alignItems:'stretch'}}>
                {data.map( (user) => (
                <Grid key={user.nombre} item xs={10} sm={6} md={4}>
                    <CardActionArea sx={{height:'100%', borderRadius:10}}>
                        <Card sx={{textAlign:'center', width:'100%', height:'100%', background:'#EBEBEB', position:'relative', borderRadius:10}}>
                            <CardHeader sx={{background:'red', height:100}}></CardHeader>
                            <Avatar alt={user.nombre} 
                                src={user.img} 
                                sx={{width:150, height:150, position:'absolute', 
                                    border:'5px solid white',
                                    // top:'20%', left:'50%', 
                                    // transform:'translate(-20%, -50%)'
                                    top: '25px', 
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            />
                            <CardContent sx={{pt:9, background:`#000000`, height:'100%'}}>
                                {/* <CardContent sx={{height:65}}></CardContent> */}
                                <CardContent sx={{mb:-2}}>
                                    <Typography variant="h3" sx={{color:'white', fontSize:'15px', fontWeight:'bold'}}>
                                        { user.nombre }
                                    </Typography>
                                    <Typography variant="h5" sx={{fontSize:'13px'}}>{ user.ceo }</Typography>
                                </CardContent>

                                <CardContent>
                                    <Typography variant="h5" sx={{color:'white', fontSize:'13px'}}>
                                        { user.concepto }
                                    </Typography>
                                </CardContent>

                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                ))

                }
            </Grid>
        </Grid>

    )

    
}
