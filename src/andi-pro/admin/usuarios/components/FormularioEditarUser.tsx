
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { CargandoScreen, SelectNormal, SelectPorNombre, SelectSencillo, TextFormField } from '../../../components';

import { useAdminStore, useUsuarioStore } from '../../../../hooks';
import Swal from 'sweetalert2';
import { gestionesData } from '../../../../data';





export const FormularioEditarUser = () => {

    const { id } = useParams();
    const { activeUsuario, setActiveUsuario, deleteUsuario, startSavingUsuario } = useUsuarioStore(); 
    const { admins, startLoadingAdmins } = useAdminStore(); 


    const [infoData, setInfoData] = useState<any>(null);



    useEffect(() => {
        startLoadingAdmins('CONJUNTO');
    }, [])



    useEffect(() => {
        if(id){
            setActiveUsuario(id);
        }
        return () => {
            deleteUsuario();
        }
    }, [id])


    useEffect(() => {
        if(activeUsuario){
            setInfoData({
                ...activeUsuario
            });
        }
    }, [activeUsuario])


    
    
    const handleUpdateInfo = async(user: any) => {
        const resp = await Swal.fire({
            title: 'Actualizar Usuario',
            text: '¿Esta Seguro De Actualizar Este Usuario.?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si'
        });

        if( resp.value ) {
            const resp = await startSavingUsuario({ 
                ...user,
                id, 
            });
            if( resp ){
                console.log('hacer accion');
            }
        }
    }



  return (

        <>    
            {
            (!infoData)

            ?   <CargandoScreen titulo="Cargando..." />

            :   <Formik
                    initialValues={{
                        nombre: infoData.nombre || '',
                        email: infoData.email || '',
                        celular: infoData.celular || '',
                        inmueble: infoData.inmueble || '',
                        conjunto: infoData.conjunto?.id || '',
                        gestion: infoData.gestion || '',
                        comunicado: infoData.comunicado || '',
                        estado: infoData.estado,
                    }}
                    onSubmit={ ( values: any ) => {
                        handleUpdateInfo(values);
                    }}
                    validationSchema={
                        Yup.object({
                            nombre: Yup.string()
                                        .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                        .required('Campo Requerido'),
                            celular: Yup.string()
                                        .max(10, 'El telefono debe de ser maximo de 10 caracteres')
                                        .required('Campo Requerido'),
                            gestion: Yup.string()
                                        .required('Campo Requerido'),
                            inmueble: Yup.string()
                                        .required('Campo Requerido'),
                            conjunto: Yup.string()
                                        .required('Campo Requerido'),
                            estado: Yup.string()
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
                                type="text" 
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
                                value={infoData.conjunto.id}
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

                        <Grid item xs={12} sm={6}>
                            <SelectNormal
                                label="Estado" 
                                type="text" 
                                placeholder='Estado' 
                                fullWidth
                                name="estado"
                                options={ [
                                    {name:'Activo', valor:true}, 
                                    {name:'Inactivo', valor:false}
                                ]}
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

            }
        </>
    )}