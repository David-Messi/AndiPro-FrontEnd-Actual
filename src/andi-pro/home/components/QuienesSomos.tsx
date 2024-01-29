
import { Grid, Typography } from '@mui/material';




const estilo = {
    minHeight:200,
    mt:5,
    px:5,
    // background:`#FF0000`,
    background:'white',
    display:'flex', 
    justifyContent:'center', 
    alignItems:'stretch'
};


export const QuienesSomos = () => {

    return (

        <Grid container spacing={3} sx={estilo}>

            <Grid item xs={12} sm={6}>
                <Grid sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', p:4, background:'#FF0000', borderRadius:"70px 50px 10px 100px", height:'100%'}}>
                    <Typography sx={{color:'white', fontSize:{xs:30, sm:32, md:35}, fontWeight:'bold', textAlign:'center'}}>
                        Quienes Somos
                    </Typography>
                    <Typography sx={{color:'white', fontSize:{xs:17, md:20, lg:22}, fontWeight:'500', textAlign:'center'}}>
                        Somos una firma especializada en servicios integrales para propiedades horizontales, comerciales e industriales, nuestro diferenciador como empresa es trabajar en equipo con nuestros aliados implementando herramientas y métodos innovadores, lo que nos permite asegurar la más alta calidad en cada etapa de trabajo.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid sx={{display:'flex', justifyContent:'center', alignItems:'center', background:'#000000', 
                    borderRadius:"50px 70px 100px 10px", p:4, height:'100%'}} >
                    <Typography sx={{color:'white', fontSize:{xs:24, md:35}, fontWeight:'bold', textAlign:'center'}}>
                        Nuestra misión es ser el aliado más importante para el avance de su copropiedad.
                    </Typography>
                </Grid>
            </Grid>
                
        </Grid>

    )


}
