
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { DriveFileRenameOutline, SaveAs } from '@mui/icons-material/';
import { Cliente, FormEditarVisualizar } from '../../../../interfaces';
import { AutocompleteScreen, CargandoScreen, DateFormScreen, SelectNormal, TextFormField } from '../../../components';

import { useClienteStore } from '../../../../hooks';

import moment from 'moment';
import Swal from 'sweetalert2';



  
const top100Films = [
    { id: '1', nombre: 'The Shawshank Redemption', year: 1994 },
    { id: '3', nombre: 'The Godfather', year: 1972 },
    { id: '4', nombre: 'The Godfather: Part II', year: 1974 },
    { id: '5', nombre: 'The Dark Knight', year: 2008 },
    { id: '7', nombre: '12 Angry Men', year: 1957 },
    { id: '8', nombre: "Schindler's List", year: 1993 },
    { id: '10', nombre: 'Pulp Fiction', year: 1994 },
]




export const FormularioEditarCliente = ({ bloqueo=true, guardar=false }: FormEditarVisualizar) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { activeCliente, setActiveCliente, deleteCliente, startSavingCliente } = useClienteStore();
    // const { citys, startLoadingCitys } = useCityStore();


    const [clienteData, setClienteData] = useState<Cliente | null>(null);


    useEffect(() => {
        if(id){
            setActiveCliente(id);
        }
        return () => {
            deleteCliente();
        }
    }, [id])


    useEffect(() => {
        if(activeCliente){
            setClienteData({
                ...activeCliente
            });
        }
    }, [activeCliente])




    const handleEditarCliente = () => {
        navigate(`/admin/customer/lead/${id}/update`);
    }
    
    
    
    const handleUpdateCliente = async(cliente: Cliente) => {
        const resp = await Swal.fire({
            title: 'Actualizar Cliente',
            text: '¿Esta Seguro De Actualizar Este Cliente.?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si'
        });

        if( resp.value ) {
            const resp = await startSavingCliente({ 
                ...cliente,
                birth_date: moment(cliente.birth_date).format('YYYY-MM-DD'),
                id: activeCliente.id, 
            });
            if( resp ){
                console.log('hacer accion');
            }
        }
    }



  return (

        <>    
            {
            (!clienteData)

            ?   <CargandoScreen titulo="Cargando..." />

            :   <Formik
                    initialValues={{
                        name: clienteData.name || '',
                        last_name: clienteData.last_name || '',
                        email: clienteData.email || '',
                        phone: clienteData.phone || '',
                        city: clienteData.city || '',
                        birth_date: clienteData.birth_date || '',
                        document: clienteData.document || '',
                        status: clienteData.status,
                    }}
                    onSubmit={ ( values: Cliente) => {
                        handleUpdateCliente(values);
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                        .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                        .required('Campo Requerido'),
                            last_name: Yup.string()
                                        .min(3, 'El apellido debe de ser de 3 caracteres o mas')
                                        .required('Campo Requerido'),
                            email: Yup.string()
                                        .email('Revise el formato del correo')
                                        .required('Campo Requerido'),
                            phone: Yup.string()
                                        .required('Campo Requerido'),
                            city: Yup.string()
                                        .required('Campo Requerido'),
                            birth_date: Yup.string()
                                        .required('Campo Requerido'),
                            document: Yup.string()
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
                        placeholder='Nombre Completo' 
                        fullWidth
                        name="name"
                    />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextFormField
                        disabled={bloqueo}
                        label="Apellido" 
                        type="text" 
                        placeholder='Apellido' 
                        fullWidth
                        name="last_name"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <DateFormScreen
                        bloqueo={bloqueo}
                        label="Fecha de Nacimiento" 
                        placeholder='Fecha de Nacimiento' 
                        name="birth_date"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextFormField
                        disabled={bloqueo}
                        label="Documento" 
                        type="text" 
                        placeholder='Documento' 
                        fullWidth
                        name="document"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextFormField
                        disabled={bloqueo}
                        label="Correo Electronico" 
                        type="email" 
                        placeholder='Correo Electronico' 
                        fullWidth
                        name="email"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextFormField
                        disabled={bloqueo}
                        label="Telefono" 
                        type="text" 
                        placeholder='Telefono' 
                        fullWidth
                        name="phone"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <AutocompleteScreen
                        bloqueo={bloqueo}
                        label="Ciudad"
                        placeholder='Ciudad'
                        fullWidth
                        name="city"
                        options={top100Films}  
                        value={clienteData.city}
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
                            startIcon={<DriveFileRenameOutline />} onClick={ handleEditarCliente }
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
    )}