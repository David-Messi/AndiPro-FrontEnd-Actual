

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { TextFormField } from '../../../components';
import { DisenioPaginas } from "../../../layouts";






export const CrearMarca = () => {



    const handleCrearMarca = (value:any) => {
        console.log(value)
    }



  return (

        <DisenioPaginas titulo="Crear Marca" url="product/brand" add={false} 
            subtitulo="Información de la Marca"
        >

            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    handleCrearMarca(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                // .min(3, 'La Descripción debe de ser de 3 caracteres o mas')s
                                .required('Campo Requerido'),
                    })
                }
            >
            { () => (

                <Form>
                <Grid container spacing={2} >

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Nombre" 
                            type="text" 
                            placeholder='Nombre' 
                            fullWidth
                            name="nombre"
                        />
                    </Grid>
                    
                    <Grid container sx={{ ml:2, my:4, display:'flex', justifyContent:'start' }}>
                        <Grid item xs={ 6 } sm={ 3 }>
                        <Button type="submit" variant="contained" sx={{color:'white'}} startIcon={<SaveAs />}>
                            Crear
                        </Button>
                        </Grid>
                    </Grid>

                </Grid>
                </Form>
            )}
            </Formik>

        </DisenioPaginas>



  )


}
