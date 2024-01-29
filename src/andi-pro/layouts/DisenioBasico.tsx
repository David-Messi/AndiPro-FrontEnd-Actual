
import { Box, Grid, Typography } from "@mui/material"






export const DisenioBasico = ({ children, titulo }: any) => {


    // const navigate = useNavigate();
    // const { limpiarStart } = useBreadcrumbStore();

    



    return (


        <Grid sx={{ background:'white', p:3, mt:1 }}>

            <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'center', mb:4, mt:-1 }}>
                <Typography variant='h4'>{ titulo }</Typography>

                <Box flex={ 1 } />

            </Grid>


            <Grid item xs={12}>

                { children }

            </Grid>

        </Grid>
    )

    
}
