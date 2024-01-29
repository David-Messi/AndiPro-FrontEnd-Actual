
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material"
import { Add, Settings, FormatListNumbered } from '@mui/icons-material';
import { DisenioPag } from "../../interfaces";
import { useBreadcrumbStore } from "../../hooks";






export const DisenioPaginas = ({ children, titulo, subtitulo=null, add=true, url }: DisenioPag) => {


    const navigate = useNavigate();
    const { limpiarStart } = useBreadcrumbStore();

    


    const handleGoRouteListados = () => {
        limpiarStart();
        navigate(`/admin/${url}`)
    }


    const handleGoRoute = () => {
        navigate(`/admin/${url}`)
    }



    return (


        <Grid sx={{ background:'white', p:3, mt:1 }}>

            <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'center', mb:4, mt:-1 }}>
                <Typography variant='h4'>{ titulo }</Typography>

                <Box flex={ 1 } />

                {
                (add)
                ?   <Button variant="contained" 
                        sx={{ color: '#fff', ':hover': { opacity: 0.5 }, py:1 }} onClick={ handleGoRoute }>
                        <Add />
                    </Button>
                :   <Button variant="contained" 
                        sx={{ color: '#fff', ':hover': { opacity: 0.5 }, py:1 }} onClick={ handleGoRouteListados }>
                        <FormatListNumbered />
                    </Button>
                }
                
            </Grid>


            {
            (subtitulo) &&
            <Grid container>
                <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'start',  color:'#8B8B8B'}}>
                    <Settings />
                    <Typography variant='h5' ml={0.5}>{ subtitulo }</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ mb:4, mt:1, height:"1.3px", background:"#8B8B8B", width:"100%" }} />
                </Grid>
            </Grid>
            }


            <Grid item xs={12}>

                { children }

            </Grid>

        </Grid>
    )

    
}
