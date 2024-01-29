
import { Divider, Grid, Typography } from '@mui/material';







export const AuthLayout = ({ children, title = '', subtitle='' }: any) => {



    return (
        
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width:'100%', minHeight: '100vh', backgroundColor:'#CFCFCF', padding: 4 }}
        >

            <Grid item className='box-shadow' xs={ 3 }
                sx={{ 
                    width: { sm: 500 },
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2 
                }}
            >
                
                <Typography variant='h1' sx={{ mb: 1, textAlign:'center' }}>{ title }</Typography>

                <Divider sx={{ my:4, borderWidth: 3 }}>
                    <Typography variant='body2' color="text.secondary" >{ subtitle }</Typography> 
                </Divider>

                
                { children }

            </Grid>

        </Grid>

    )
}
