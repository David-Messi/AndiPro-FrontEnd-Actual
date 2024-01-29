


import { Grid, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material/';
import { useAdminStore, useBusquedas } from '../../../../hooks';





export const BuscarConjunto = () => {


    const { startLoadingAdmins } = useAdminStore(); 
    const { buscarConjunto } = useBusquedas();



    const handleBusquedaconjunto = ({ target }: any) => {
        if( target.value.length <= 0 ) {
            return startLoadingAdmins('CONJUNTO');
        }
        buscarConjunto(target.value);
    }




    return (

        <Grid container sx={{ my: 2 }} >
            <Grid item xs={12} sm={6}>
                <TextField 
                    autoComplete="off"
                    label="Buscar Conjunto..." 
                    variant="outlined" 
                    placeholder='Buscar Conjunto...'
                    fullWidth
                    size="small"
                    onChange={ handleBusquedaconjunto }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>


    )


}
