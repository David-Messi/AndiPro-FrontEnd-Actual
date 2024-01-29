
// import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Grid } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { AutocompleteScreen, DateFormScreen, TextFormField } from '../../../components';
import { DisenioPaginas } from '../../../layouts';
// import { Cliente } from '../../../../interfaces';
// import { useClienteStore } from '../../../../hooks';

// import moment from 'moment';




const top100Films = [
    { id: '1', nombre: 'The Shawshank Redemption', year: 1994 },
    { id: '3', nombre: 'The Godfather', year: 1972 },
    { id: '4', nombre: 'The Godfather: Part II', year: 1974 },
    { id: '5', nombre: 'The Dark Knight', year: 2008 },
    { id: '7', nombre: '12 Angry Men', year: 1957 },
    { id: '8', nombre: "Schindler's List", year: 1993 },
    { id: '10', nombre: 'Pulp Fiction', year: 1994 },
]




export const CrearCliente = () => {


    // const { startSavingCliente } = useClienteStore();
    // const { citys, startLoadingCitys } = useCityStore();
  

    // useEffect(() => {
    //     startLoadingCitys();
    // }, [])
    


    // const handleCrearCliente = async (cliente:any, resetForm: any) => {
    //     const resp = await startSavingCliente({
    //         ...cliente,
    //         birth_date: moment(cliente.birth_date).format('YYYY-MM-DD')
    //     });
    //     if( resp ){
    //         resetForm();
    //     }
    // }


    


    return (

        <DisenioPaginas titulo="Crear Cliente Potencial" url="customer/lead/list" add={false} subtitulo="Información del Cliente Potencial">

            <Formik
                initialValues={{
                    name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    city: '',
                    birth_date: '',
                    document: '',
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    // handleCrearCliente(values, resetForm);
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
                            name="name"
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Apellido" 
                            type="text" 
                            placeholder='Apellido' 
                            fullWidth
                            name="last_name"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <DateFormScreen
                            label="Fecha de Nacimiento" 
                            placeholder='Fecha de Nacimiento' 
                            name="birth_date"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Documento" 
                            type="text" 
                            placeholder='Documento' 
                            fullWidth
                            name="document"
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
                        <AutocompleteScreen
                            label="Ciudad" 
                            placeholder='Ciudad' 
                            fullWidth
                            name="city"
                            options={ top100Films }
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
