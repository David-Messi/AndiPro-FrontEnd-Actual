
import { Grid, Typography, TextField, Button } from '@mui/material';



const estilo = {
    minHeight:200,
    px:8,
    py:8,
    background:`white`,
};





export const FormularioLLamada = () => {



    // const handleNavegar = (url:string) => {
    //     window.open(url, '_blank');
    // }




    return (

        <Grid container sx={estilo}>

            <Grid item xs={12} md={12} >
                <Typography variant='h2' sx={{color:'black', fontSize:'40px', textAlign:'center'}}>Solicita una llamada</Typography>
                <Typography variant='body1' sx={{color:'gray', fontSize:20, textAlign:'center'}}>¡Trabajemos juntos y valoricemos su copropiedad!</Typography>
            </Grid>


            <Grid container spacing={2} sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', mt:3}}>

                <Grid item xs={12} sm={7}>
                    <TextField
                        label="Nombre Completo" 
                        type="text" 
                        placeholder='Nombre Completo' 
                        fullWidth
                        name="nombre"
                    />
                </Grid>

                <Grid item xs={12} sm={7}>
                    <TextField
                        label="Numero Telefono" 
                        type="number" 
                        placeholder='Numero Telefonico' 
                        fullWidth
                        name="correo"
                    />
                </Grid>

            </Grid>

            <Grid container sx={{ my:2, display:'flex', justifyContent:'center' }}>
                <Grid item xs={12} sm={5} >
                    <Button variant='contained' fullWidth type='submit' sx={{py:1.5}}>
                        Enviar
                    </Button>
                </Grid>
            </Grid>

        </Grid>

    )

    
}
