
import { Grid, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material/';
import { useBusquedas, useUsuarioStore } from '../../../../hooks';





export const BuscarUsuario = () => {


    const { startLoadingUsuarios } = useUsuarioStore(); 
    const { buscarUserPorInmueble, buscarUserPorConjunto } = useBusquedas();




    const handleBusquedaInmueble = ({ target }: any) => {
        if( target.value.length <= 0 ) {
            return startLoadingUsuarios(0);
        }

        buscarUserPorInmueble(target.value);
    }





    const handleBusquedaUserConjunto = ({ target }: any) => {
        if( target.value.length <= 0 ) {
            return startLoadingUsuarios(0);
        }

        buscarUserPorConjunto(target.value);
    }





    return (

        <Grid container sx={{ my: 2 }} spacing={3} >

            <Grid item xs={12} sm={6}>
                <TextField 
                    autoComplete="off"
                    label="Buscar Por Inmueble..." 
                    variant="outlined" 
                    placeholder='Buscar Por Inmueble...'
                    fullWidth
                    size="small"
                    onChange={ handleBusquedaInmueble }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>


            <Grid item xs={12} sm={6}>
                <TextField 
                    autoComplete="off"
                    label="Buscar Por Conjunto..." 
                    variant="outlined" 
                    placeholder='Buscar Por Conjunto...'
                    fullWidth
                    size="small"
                    onChange={ handleBusquedaUserConjunto }
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
