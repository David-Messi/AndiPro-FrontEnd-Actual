
import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';

import uno from '../../../assets/clientes/1.jpg';
import dos from '../../../assets/clientes/2.png';
import tres from '../../../assets/clientes/3.jpg';
import cuatro from '../../../assets/clientes/4.jpg';
import cinco from '../../../assets/clientes/5.jpg';
import seis from '../../../assets/clientes/6.jpg';
import siete from '../../../assets/clientes/7.jpg';
import ocho from '../../../assets/clientes/8.jpg';
import doce from '../../../assets/clientes/12.jpg';
import nueve from '../../../assets/clientes/9.jpg';
import diez from '../../../assets/clientes/10.jpg';
import once from '../../../assets/clientes/11.jpg';



const img = [uno, dos, tres, cinco, seis, doce, siete, cuatro, nueve, ocho, diez, once, ];


const estilo = {
    minHeight:200,
    px:8,
    background:`white`,
};







export const NuestrosClientes = () => {


    return (

        <Grid container sx={estilo}>
            <Box sx={{width:'100%', mb:4}}>
                <Typography variant='h1' sx={{textAlign:'center'}}>Nuestros Clientes</Typography>
                <Typography variant='body1' sx={{fontSize:'18px', textAlign:'center'}}>A quienes agradecemos por su confianza.</Typography>
            </Box>

            <Grid container>
                <ImageList sx={{ width:'100%', minHeight: 400 }} cols={4} rowHeight={170}>
                    {img.map((item) => (
                        <ImageListItem key={item}>
                        <img
                            style={{ objectFit:'contain', width: '100%', height: '100%' }}
                            src={`${item}`}
                            alt={item}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    )
}
