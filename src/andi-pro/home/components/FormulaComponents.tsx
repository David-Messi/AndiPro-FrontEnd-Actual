
import { Box, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import uno from '../../../assets/objetivos/inver1.png';
import dos from '../../../assets/objetivos/inver2.png';
import tres from '../../../assets/objetivos/inver3.png';




const estilo = {
    minHeight:200,
    px:8,
    pt:4,
    pb:4,
    background:`white`,
};


const data = [
    {nombre:'Diana Salamanca', img:uno, concepto:'Recuperamos cartera morosa en el menor tiempo y educamos sobre el pago oportuno de la expensa común, garantizando el flujo de caja.'},
    {nombre:'Angélica Salamanca',  img:dos, concepto:'A través de capacitaciones, asesorías y representaciones le brindamos herramientas para valorizar su inmueble y su copropiedad.'},
    {nombre:'Oscar Moreno', img:tres, concepto:'Trabajamos de la mano con la tecnología, implementando técnicas de vanguardia según la necesidad y asegurando la optimización de actividades.'},
]





export const FormulaComponents = () => {

    return (

         <Grid container sx={estilo}>
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', mb:4}}>
                <Typography variant='h1' sx={{color:'black'}}>Fórmula</Typography>
            </Box>
            
            <Grid container spacing={7} sx={{display:'flex', justifyContent:'center', alignItems:'stretch'}}>
                {data.map( (user) => (
                <Grid key={user.nombre} item xs={11} sm={6} md={4}>
                    <CardActionArea sx={{height:'100%', borderRadius:10}}>
                        <Card sx={{textAlign:'center', width:'100%', height:'100%', background:'white', borderRadius:10, position: 'relative'}}>
                            <CardHeader sx={{background:'red', height:20}}></CardHeader>
                            <CardContent sx={{pt:9, background:`white`, width:'100%', height:300}}>
                                <img alt={user.nombre} 
                                    src={user.img} 
                                    style={{width:'100%', height:'100%'}}
                                />
                            </CardContent>
                            <CardContent sx={{ background:`white`, height:'100%'}}>
                                <CardContent>
                                    <Typography variant="h5" sx={{color:'black', fontSize:'15px'}}>
                                        {user.concepto}
                                    </Typography>
                                </CardContent>
                            </CardContent>

                            <div style={{position:'absolute', bottom:0, left:0, width:'100%', background:'red', height:30}}></div>
                        </Card>
                    </CardActionArea>
                </Grid>
                ))
                }
            </Grid>
        </Grid>

    )

    
}
