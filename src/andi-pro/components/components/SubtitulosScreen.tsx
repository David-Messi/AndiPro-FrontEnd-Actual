
import { Box, Grid, Typography } from "@mui/material";
import { Settings } from '@mui/icons-material';
import { iconos } from "../../../data";




interface Props {
    titulo: string;
    mostrar?: string;
}





export const SubtitulosScreen = ({ titulo, mostrar='' }: Props) => {

        const icono = iconos[mostrar] || <Settings />;

        return (

            <Grid item xs={12} sx={{ mt:2 }}>

                <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'start',  color:'#8B8B8B'}}>
                    { icono }                    
                    <Typography variant='h5' ml={0.5}>{ titulo }</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ mb:1, mt:1, height:"1.3px", background:"#8B8B8B", width:"100%" }} />
                </Grid>

            </Grid>

            
        )

}
