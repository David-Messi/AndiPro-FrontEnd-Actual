
import { Link as RouterLink } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, FormControlLabel, Grid, InputAdornment, Link, Typography } from '@mui/material';
import { AccountCircle, Key, LockOpen } from '@mui/icons-material';
import { AuthLayout } from '../layout';
import { TextFormField } from '../../components';
import { useAuthStore } from '../../../hooks';








export const LoginScreen = () => {


    const { startLogin } = useAuthStore();



    const handleLogin = async(login:any) => {
        const resp = await startLogin(login);
        if( resp ){
            console.log('Holis Hacer Accion')
        }
    }



    return (

    
        <AuthLayout title="Stack" subtitle="Iniciar sesión en Yop y Yop">
            <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={ (value) => {
                        handleLogin(value)
                    }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                        .min( 3, 'El Nombre Debe Tener Mínimo 3 letras' )
                                        .required('Campo Requerido'),
                            // correo: Yup.string()
                            //             .email('Revise el formato del correo')
                            //             .required('Campo Requerido'),
                            password: Yup.string()
                                        .min( 6, 'Mínimo 6 letras' )
                                        .required('Campo Requerido'),
                        })
                    }
            >
                { ({ }) => (
                <Form>
                    <Grid container>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextFormField
                                label="Nombre de Usuario" 
                                type="text" 
                                placeholder='Nombre de Usuario' 
                                fullWidth
                                name="username"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle color='primary' />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextFormField
                                label="Contraseña" 
                                type="password" 
                                placeholder='Contraseña' 
                                fullWidth
                                name="password"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Key color='primary' />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>

                        <Grid container spacing={ 2 } 
                            sx={{ my:1, display:'flex', justifyContent:'space-between', alignItems:'center' }}
                        >
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox defaultChecked />} 
                                    label="Recordarme" sx={{ color:"black" }} 
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign:'end' }}>
                                <Link component={ RouterLink } underline="hover" color='primary.main' to="/auth/res-password">
                                    ¿Olvidaste tu Contraseña?
                                </Link>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 12 }>
                                <Button variant='contained' fullWidth 
                                    type="submit"
                                    sx={{ color:"white", py:2 }}
                                    startIcon={<LockOpen  />}
                                >
                                    <Typography variant='body1'>Login</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={ 2 } 
                            sx={{ my:1, display:'flex', justifyContent:'center' }}
                        >
                            <Grid item mr={-1} >
                                <Typography variant='body2' color="text.secondary" >
                                    ¿Soy Nuevo en Yop y Yop?  
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Link component={ RouterLink } underline="hover" 
                                        color='primary.main' to="/auth/register"
                                >
                                    Inscribirse
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
