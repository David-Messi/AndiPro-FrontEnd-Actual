
import { useEffect } from 'react';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { SelectPorNombre, SelectSencillo, TextFormField } from '../../../components';
import { DisenioPaginas } from '../../../layouts';
import { useAdminStore, useUsuarioStore } from '../../../../hooks';
import { gestionesData } from '../../../../data';





export const CrearUsuario = () => {


    const { startSavingUsuario } = useUsuarioStore();
    const { admins, startLoadingAdmins } = useAdminStore(); 


    useEffect(() => {
        startLoadingAdmins('CONJUNTO');
    }, [])


    const handleCrearInfo = async (user:any, resetForm: any) => {
        const resp = await startSavingUsuario({ ...user });
        if( resp ){
            resetForm();
        }
    }
    


    return (

        <DisenioPaginas titulo="Crear Usuario" url="user/list" add={false} subtitulo="Información del Usuario">

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    celular: '',
                    inmueble: '',
                    conjunto: '',
                    gestion: '',
                    comunicado: '',
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    handleCrearInfo(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .required('Campo Requerido'),
                        celular: Yup.string()
                                    .max(10, 'El telefono debe de ser maximo de 10 caracteres')
                                    .required('Campo Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .required('Campo Requerido'),
                                    gestion: Yup.string()
                                    .required('Campo Requerido'),
                        inmueble: Yup.string()
                                    .required('Campo Requerido'),
                        conjunto: Yup.string()
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
                            label="Celular" 
                            type="text" 
                            placeholder='Celular' 
                            fullWidth
                            name="celular"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Inmueble" 
                            type="text" 
                            placeholder='Inmueble' 
                            fullWidth
                            name="inmueble"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <SelectPorNombre
                            label="Conjunto" 
                            placeholder='Conjunto' 
                            fullWidth
                            name="conjunto"
                            options={ admins }
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <SelectSencillo
                            label="Gestión" 
                            placeholder='Gestión' 
                            fullWidth
                            name="gestion"
                            options={ gestionesData }
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Comunicado" 
                            type="text" 
                            placeholder='Comunicado' 
                            fullWidth
                            rows={2}
                            multiline
                            name="comunicado"
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
