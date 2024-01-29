
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { TextFormField } from '../../../components';
import { DisenioPaginas } from '../../../layouts';
import { useAdminStore } from '../../../../hooks';





export const CrearAdmin = () => {


    const { startSavingAdmin } = useAdminStore();


    const handleCrearInfo = async (admin:any, resetForm: any) => {
        const resp = await startSavingAdmin({
            ...admin,
            rol: 'ADMIN'
        });
        if( resp ){
            resetForm();
        }
    }
    


    return (

        <DisenioPaginas titulo="Crear Administrador Potencial" url="admin/list" add={false} subtitulo="Información del Administrador">

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    password: '',
                    confirmarPassword: '',
                    phone: '',
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    handleCrearInfo(values, resetForm);
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
                        password: Yup.string()
                                    .required('Campo Requerido'),
                        confirmarPassword: Yup.string()
                                    .oneOf([ Yup.ref('password') ], 'Las contraseñas no son iguales')
                                    .required('Campo Requerido')
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
                            label="Contraseña" 
                            type="password" 
                            placeholder='Contraseña' 
                            fullWidth
                            name="password"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Confirmar Contraseña" 
                            type="password" 
                            placeholder='Confirmar Contraseña' 
                            fullWidth
                            name="confirmarPassword"
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
