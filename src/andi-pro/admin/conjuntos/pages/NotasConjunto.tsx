
import { useState, useEffect } from 'react';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { CargandoScreen, TextFormField } from '../../../components';
import { DisenioPaginas } from '../../../layouts';
import { useParams } from 'react-router-dom';
import { useAdminStore } from '../../../../hooks';
import Swal from 'sweetalert2';






export const NotasConjunto = () => {

    const { id } = useParams();
    const { activeAdmin, setActiveAdmin, deleteAdmin, startSavingNotasConjunto } = useAdminStore();


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



    const handleCrearNota = async(values: any) => {
        const resp = await Swal.fire({
            title: 'Actualizar Nota de Conjunto',
            text: '¿Esta Seguro De Actualizar Esta Nota.?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si'
        });

        if( resp.value ) {
            await startSavingNotasConjunto({ 
                ...values,
                id, 
            });
        }
    }




    return (

        <DisenioPaginas titulo="Crear Nota" url="conjunto/list" add={false} subtitulo={`Conjunto ${activeAdmin?.nombre}`}>

            {
            (!infoData)

            ?   <CargandoScreen titulo="Cargando..." />

            :   <Formik
                    initialValues={{
                        notaFactura: infoData.notaFactura || '',
                        notaInformeMes: infoData.notaInformeMes || '',
                    }}
                    onSubmit={ ( values: any ) => {
                        handleCrearNota(values);
                    }}
                    validationSchema={
                        Yup.object({
                            notaFactura: Yup.string()
                                        .required('Campo Requerido'),
                            notaInformeMes: Yup.string()
                                        .required('Campo Requerido'),
                        })
                    }
                >
                { () => (
                    <Form>
                        <Grid container spacing={2} >

                            <Grid item xs={12} sm={6}>
                                <TextFormField
                                    label="Nota Informe Mes" 
                                    type="text" 
                                    placeholder='Nota Informe Mes' 
                                    fullWidth
                                    multiline
                                    rows={3}
                                    name="notaInformeMes"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextFormField
                                    label="Nota de Factura" 
                                    type="email" 
                                    placeholder='Nota de Factura' 
                                    fullWidth
                                    multiline
                                    rows={3}
                                    name="notaFactura"
                                />
                            </Grid>


                            <Grid container sx={{ ml:2, my:4, display:'flex', justifyContent:'start' }}>
                                <Grid item xs={6}>
                                <Button type="submit" variant="contained" sx={{color:'white'}} startIcon={<SaveAs />}>
                                    Crear Nota
                                </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Form>
                )}
                </Formik>

            }

        </DisenioPaginas>

    )

    
}
