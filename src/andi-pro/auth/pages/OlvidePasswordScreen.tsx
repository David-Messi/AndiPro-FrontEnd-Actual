
import { Link as RouterLink } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, InputAdornment, Link, Typography } from '@mui/material';
import { Email, LockOpen } from '@mui/icons-material';
import { AuthLayout } from '../layout';
import { TextFormField } from '../../components';




export const OlvidePasswordScreen = () => {

    return (

        <AuthLayout title="Stack" subtitle="Restablecer contraseña en Yop y Yop">
            <Formik
                    initialValues={{
                        correo: '',
                        password: '',
                    }}
                    onSubmit={ (values) => {
                        console.log(values);
                    }}
                    validationSchema={
                        Yup.object({
                            correo: Yup.string()
                                        .email('Revise el formato del correo')
                                        .required('Campo Requerido'),
                        })
                    }
            >
                { ({ }) => (
                <Form>
                    <Grid container>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextFormField
                                label="Correo" 
                                type="email" 
                                placeholder='Tu Correo Electronico' 
                                fullWidth
                                name="password"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email color='primary' />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>

                        
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 12 }>
                                <Button variant='contained' fullWidth 
                                    sx={{ color:"white", py:2 }}
                                    startIcon={<LockOpen  />}
                                >
                                    <Typography variant='body1'>Restablecer Contraseña</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={ 2 } 
                            sx={{ my:1, display:'flex', justifyContent:'center' }}
                        >
                            <Grid item mr={-1} >
                                <Typography variant='body2' color="text.secondary" >
                                    Ya soy usuario de Yop y Yop
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Link component={ RouterLink } underline="hover" 
                                        color='primary.main' to="/auth/login"
                                >
                                    Iniciar Sesión
                                </Link>
                            </Grid>
                        </Grid>

                        

                    </Grid>
                </Form>
                )}

            </Formik>
        </AuthLayout>

    )

}
