
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { TextFormField } from '../../../components';
import { DisenioBasico } from "../../../layouts"





export const PerfilScreen = () => {


    // const handleCrearInfo = (values: any, resetForm: any) => {
    //     console.log('Holis Holis')
    // }


    return (


        <DisenioBasico titulo="Mi Perfil">

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    password: '',
                    confirmarPassword: '',
                    phone: '',
                }}
                // values: any, { resetForm } 
                onSubmit={ ( ) => {
                    // handleCrearInfo(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .required('Campo Requerido'),
                        phone: Yup.string()
                                    .max(10, 'El telefono debe de ser maximo de 10 caracteres')
                                    .required('Campo Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
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
                            placeholder='Nombre Completo' 
                            fullWidth
                            name="nombre"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Correo Electronico" 
                            type="email" 
                            placeholder='Correo Electronico' 
                            fullWidth
                            name="email"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Telefono" 
                            type="text" 
                            placeholder='Telefono' 
                            fullWidth
                            name="phone"
                        />
                    </Grid>


                    <Grid container sx={{ ml:2, my:4, display:'flex', justifyContent:'start' }}>
                        <Grid item xs={ 6 } sm={ 3 }>
                        <Button type="submit" variant="contained" sx={{color:'white'}} startIcon={<SaveAs />}>
                            Actualizar
                        </Button>
                        </Grid>
                    </Grid>

                </Grid>
                </Form>
            )}
            </Formik>

        </DisenioBasico>

        
    )
}
