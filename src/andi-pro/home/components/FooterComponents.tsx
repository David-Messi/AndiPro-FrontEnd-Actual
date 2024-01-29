
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { WhatsApp, Email, PinDrop, Facebook, LinkedIn } from '@mui/icons-material';


const estilo = {
    minHeight:200,
    px:8,
    pt:8,
    pb:3,
    background:`#000000`,
};




export const FooterComponents = () => {


    const year = new Date().getFullYear();

    const handleNavegar = (url:string) => {
        window.open(url, '_blank');
    }






    return (

        <Grid container sx={estilo}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'start'}, justifyContent:'center'}}>
                    <Typography variant='h2' sx={{color:'white', textAlign:{xs:'center', md:'left', fontSize:'30px'} }}>EL ALIADO MÁS IMPORTANTE PARA EL AVANCE DE SU COPROPIEDAD</Typography>
                    <Typography variant='body1' sx={{color:'gray'}}>COPYRIGHT © { year } ANDIPRO</Typography>
                </Grid>


                <Grid item xs={12} md={6} sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography variant='h2' sx={{color:'white', textAlign:{xs:'center'}}}>¡Queremos saber de Ti!</Typography>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:2}}>
                        <WhatsApp sx={{color:'gray', mr:1}} />
                        <Typography variant='body1' sx={{color:'gray'}}> 318 665 1892 o 320 303 8547</Typography>
                    </Box>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:1}}>
                        <Email sx={{color:'gray', mr:1}} />
                        <Typography variant='body1' sx={{color:'gray'}}>andiprosas@gmail.com</Typography>
                    </Box>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:1}}>
                        <PinDrop sx={{color:'gray', mr:1}} />
                        <Typography variant='body1' sx={{color:'gray'}}>Cra 90 BIS # 76 – 60 Bogotá D.C.</Typography>
                    </Box>

                    <Box sx={{width:'100%', display:'flex', justifyContent:'space-evenly', mt:4}}>
                        <IconButton onClick={ () => handleNavegar("https://www.linkedin.com/in/andipro-colombia/") }>
                            <LinkedIn className="facebook" sx={{color:'gray', fontSize:'40px'}} />
                        </IconButton>
                        <IconButton onClick={ () => handleNavegar("https://www.facebook.com/andiprocolombia") }>
                            <Facebook className="facebook" sx={{color:'gray', fontSize:'40px'}}  />
                        </IconButton>
                        <IconButton onClick={ () => handleNavegar("https://me-qr.com/V445oFy") }>
                            <WhatsApp className="whatsapp" sx={{color:'gray', fontSize:'40px'}}  />
                        </IconButton>
                    </Box>
                </Grid>
                
            </Grid>
        </Grid>
    )
}
