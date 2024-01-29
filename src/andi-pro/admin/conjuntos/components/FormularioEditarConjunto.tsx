
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { CargandoScreen, SelectNormal, TextFormField } from '../../../components';

import { useAdminStore } from '../../../../hooks';
import Swal from 'sweetalert2';





export const FormularioEditarAdmin = () => {

    const { id } = useParams();
    const { activeAdmin, setActiveAdmin, deleteAdmin, startSavingAdmin } = useAdminStore();


    const [infoData, setInfoData] = useState<any>(null);


    useEffect(() => {
        if(id){
            setActiveAdmin(id);
        }
        return () => {
            deleteAdmin();
        }
    }, [id])


    useEffect(() => {
        if(activeAdmin){
            setInfoData({
                ...activeAdmin
            });
        }
    }, [activeAdmin])


    
    
    const handleUpdateInfo = async(admin: any) => {
        const resp = await Swal.fire({
            title: 'Actualizar Conjunto',
            text: '¿Esta Seguro De Actualizar Este Conjunto.?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si'
        });

        if( resp.value ) {
            const resp = await startSavingAdmin({ 
                ...admin,
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

            :    <Formik
                    initialValues={{
                        nombre: infoData.nombre || '',
                        email: infoData.email || '',
                        phone: infoData.phone || '',
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
                            phone: Yup.string()
                                        .max(10, 'El telefono debe de ser maximo de 10 caracteres')
                                        .required('Campo Requerido'),
                            email: Yup.string()
                                        .email('Revise el formato del correo')
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

                        <Grid item xs={12} sm={6}>
                            <SelectNormal
                                label="Estado" 
                                type="text" 
                                placeholder='Estado' 
                                fullWidth
                                name="estado"
                                options={ [
                                    { name:'Activo', valor:true}, 
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