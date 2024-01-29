


import { Grid, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material/';





export const BuscarAdmin = () => {

    return (

        <Grid container sx={{ my: 2 }} >
            <Grid item xs={12} sm={6}>
                <TextField 
                    autoComplete="off"
                    label="Buscar Admin..." 
                    variant="outlined" 
                    placeholder='Buscar Admin...'
                    fullWidth
                    size="small"
                    // name="valor"
                    // value={ valor }
                    // onChange={ (e) => setValor(e.target.value) }
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
