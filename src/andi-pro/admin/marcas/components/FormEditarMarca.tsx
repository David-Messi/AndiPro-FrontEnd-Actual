
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { DriveFileRenameOutline, SaveAs } from '@mui/icons-material/';
import { FormEditarVisualizar } from '../../../../interfaces';
import { CargandoScreen, SelectNormal, TextFormField } from '../../../components';

import Swal from 'sweetalert2';



export const FormEditarMarca = ({ bloqueo=true, guardar=false }: FormEditarVisualizar) => {


    const navigate = useNavigate();
    const { id } = useParams();


    const [etiquetaData, setEtiquetaData] = useState<{} | null>({});



    
    const handleEditarPosicion = () => {
        navigate(`/admin/product/brand/:id/update`);
    }
    
    
    
    const handleUpdatePosicion = async(cliente: any) => {
        const resp = await Swal.fire({
            title: 'Actualizar Posición',
            text: '¿Esta Seguro De Actualizar Este Cliente.?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si'
        });

        // if( resp.value ) {
        //     const resp = await startSavingCliente({ 
        //         ...cliente,
        //         birth_date: moment(cliente.birth_date).format('YYYY-MM-DD'),
        //         id: activeCliente.id, 
        //     });
        //     if( resp ){
        //         console.log('hacer accion');
        //     }
        // }
    }


    return (

        <>    
            {
            (!etiquetaData)

            ?   <CargandoScreen titulo="Cargando..." />

            :   <Formik
                    initialValues={{
                        name: '',
                        status: '',
                    }}
                    onSubmit={ ( values: any ) => {
                        handleUpdatePosicion(values);
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                    .required('Campo Requerido'),
                            status: Yup.boolean()
                                    .required('Campo Requerido'),
                        })
                    }
                >
                { () => (

                <Form>
                <Grid container spacing={2} >

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            disabled={bloqueo}
                            label="Nombre" 
                            type="text" 
                            placeholder='Nombre' 
                            fullWidth
                            name="name"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <SelectNormal
                            disabled={bloqueo}
                            label="Estado" 
                            type="text" 
                            placeholder='Estado' 
                            fullWidth
                            name="status"
                            options={ [
                                { name:'Activo', valor:true}, 
                                {name:'Inactivo', valor:false}
                            ]}
                        />
                    </Grid>
                    
                    <Grid container sx={{ ml:2, my:4, display:'flex', justifyContent:'start' }}>
                        {
                        (guardar)
                        ?    <Grid item xs={ 6 } sm={ 3 }>
                                    <Button variant="contained" sx={{color:'white'}} 
                                        type="submit" startIcon={<SaveAs />}
                                    >
                                        Actualizar
                                    </Button>
                                </Grid>
                        :   <Grid item xs={ 6 } sm={ 3 }>
                                <Button variant="contained" sx={{color:'white'}} 
                                startIcon={<DriveFileRenameOutline />} onClick={ handleEditarPosicion }
                                >
                                    Editar
                                </Button>
                            </Grid>
                        }
                    </Grid>
                </Grid>
                </Form>
            )}
            </Formik>
            }  

        </>

    )

}
