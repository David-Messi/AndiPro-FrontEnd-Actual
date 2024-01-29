
import { Grid, Typography } from '@mui/material';
import ciudad from '../../../assets/andipro/ciudad.jpg';
import celebracion from '../../../assets/andipro/10años.png';





const estilo = {
    marginTop:4.2,
    height: { xs:'100vh', sm:'90vh' },
    backgroundImage: `url("${ciudad}")`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
};


export const SeccionTituloLogo = () => {

    return (

        <Grid container sx={estilo}>
            <Grid container sx={{background:'rgba(5, 5, 5, 0.5)', display:'flex', justifyContent:'end'}}>

                <Grid item sm={6} sx={{order:{xs:2, sm:1}, display:'flex', justifyContent:'center', alignItems:'center', p:2}}>
                    <Typography sx={{color:'white', fontSize:{xs:25, sm:30, md:35}, fontWeight:'bold', textAlign:'center'}}>
                        Somos Andipro Colombia
                        ¡Impulsamos copropiedades!
                        Desarrollamos servicios especializados para propiedad horizontal.
                    </Typography>
                </Grid>

                <Grid item sm={6} sx={{order:{xs:1, sm:2}, display:'flex', justifyContent:'center', alignItems:'center'}} >
                    <img src={celebracion} style={{width:'83%'}} alt="Logo de 10años" />
                </Grid>
                
            </Grid>
        </Grid>


    )


}
