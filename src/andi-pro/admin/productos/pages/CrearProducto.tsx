
// import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, Grid, Typography } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { AutocompleteScreen, DateFormScreen, SelectNormal, SubtitulosScreen, TextFormField, TextFormNumber } from '../../../components';
import { DisenioPaginas } from '../../../layouts';
// import { useClienteStore } from '../../../../hooks';

import moment from 'moment';




const top100Films = [
    { id: '1', nombre: 'The Shawshank Redemption', year: 1994 },
    { id: '3', nombre: 'The Godfather', year: 1972 },
    { id: '4', nombre: 'The Godfather: Part II', year: 1974 },
    { id: '5', nombre: 'The Dark Knight', year: 2008 },
    { id: '7', nombre: '12 Angry Men', year: 1957 },
    { id: '8', nombre: "Schindler's List", year: 1993 },
    { id: '10', nombre: 'Pulp Fiction', year: 1994 },
]




export const CrearProducto = () => {


    // const { startSavingCliente } = useClienteStore();
    // const { citys, startLoadingCitys } = useCityStore();
  

    // useEffect(() => {
    //     startLoadingCitys();
    // }, [])
    


    // const handleCrearProducto = async (cliente:any, resetForm: any) => {
    //     const resp = await startSavingCliente({
    //         ...cliente,
    //         birth_date: moment(cliente.birth_date).format('YYYY-MM-DD')
    //     });
    //     if( resp ){
    //         resetForm();
    //     }
    // }


    


    return (

        <DisenioPaginas titulo="Crear Producto" url="product/sku" add={false} subtitulo="Información del Producto">

            <Formik
                initialValues={{
                    url_key: '',
                    name: '',
                    brand: '',
                    type: '',
                    sku: '',
                    tax: '',
                    unit_of_measure: '',
                    measure: '',
                    weight: '',
                    description: '',
                    short_description: '',
                    
                    
                    
                    meta_description: '',
                    meta_title: '',
                    meta_keywords: '',
                    categories: [],
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    // handleCrearProducto(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        url_key: Yup.string()
                                    .required('Campo Requerido'),
                        name: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .required('Campo Requerido'),
                        sku: Yup.string()
                                    .required('Campo Requerido'),

                        brand: Yup.string()
                                    .required('Campo Requerido'),
                        type: Yup.string()
                                    .required('Campo Requerido'),
                        tax: Yup.string()
                                    .required('Campo Requerido'),
                        unit_of_measure: Yup.string()
                                    .required('Campo Requerido'),
                        measure: Yup.string()
                                    .required('Campo Requerido'),
                        weight: Yup.string()
                                    .required('Campo Requerido'),
                        description: Yup.string()
                                    .required('Campo Requerido'),
                        short_description: Yup.string()
                                    .required('Campo Requerido'),


                        // birth_date: Yup.string()
                        // .required('Campo Requerido'),

                    })
                }
            >
            { () => (

                <Form>
                <Grid container spacing={2} >

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Clave URL" 
                            type="text" 
                            placeholder='Clave URL' 
                            fullWidth
                            name="url_key"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            label="Nombre" 
                            type="text" 
                            placeholder='Nombre' 
                            fullWidth
                            name="name"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextFormField
                            label="Codigo" 
                            type="text" 
                            placeholder='Codigo' 
                            fullWidth
                            name="sku"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <AutocompleteScreen
                            label="Marca" 
                            placeholder='Marca' 
                            fullWidth
                            name="brand"
                            options={ top100Films }
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <SelectNormal
                            label="Tipo de Producto" 
                            placeholder='Tipo de Producto' 
                            fullWidth
                            name="type"
                            options={ [
                                {name:'Servicio', valor:'Servicio'}, 
                                {name:'Fisico', valor:'Fisico'},
                                {name:'Virtual', valor:'Virtual'},
                            ]}
                        />
                    </Grid>

                    {/* <Grid item xs={12} sm={4}>
                        <AutocompleteScreen
                            label="Tipo de Producto" 
                            placeholder='Tipo de Producto' 
                            fullWidth
                            name="type"
                            options={ top100Films }
                        />
                    </Grid> */}

                    <Grid item xs={12} sm={3}>
                        <SelectNormal
                            label="Tasa Impositiva" 
                            type="text" 
                            placeholder='Tasa Impositiva' 
                            fullWidth
                            name="tax"
                            options={ [
                                {name:'0%', valor:0}, 
                                {name:'5%', valor:5},
                                {name:'19%', valor:19},
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <AutocompleteScreen
                            label="Unidad de Medida" 
                            placeholder='Unidad de Medida' 
                            fullWidth
                            name="unit_of_measure"
                            options={ top100Films }
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextFormField
                            label="Medida" 
                            type="number" 
                            placeholder='Medida' 
                            fullWidth
                            name="measure"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextFormField
                            label="Peso" 
                            type="number" 
                            placeholder='Peso' 
                            fullWidth
                            name="weight"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            multiline
                            rows={4}
                            label="Descripción" 
                            type="text" 
                            placeholder='Descripción' 
                            fullWidth
                            name="description"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFormField
                            multiline
                            rows={4}
                            label="Breve Descripción" 
                            type="text" 
                            placeholder='Breve Descripción' 
                            fullWidth
                            name="short_description"
                        />
                    </Grid>


                    <SubtitulosScreen titulo="Existencias" mostrar="existencia" />

                    <Grid item xs={12} sm={4}>
                        <TextFormField
                            label="Cantidad" 
                            type="number" 
                            placeholder='Cantidad' 
                            fullWidth
                            name="short_description"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextFormField
                            label="Stock Minimo" 
                            type="number" 
                            placeholder='Stock Minimo' 
                            fullWidth
                            name="short_description"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextFormField
                            label="Stock Maximo" 
                            type="number" 
                            placeholder='Stock Maximo' 
                            fullWidth
                            name="short_description"
                        />
                    </Grid>


                    <SubtitulosScreen titulo="Precio" mostrar="precio" />

                    
                    <Grid item xs={12} sm={3}>
                        <TextFormNumber
                            label="Precio Basico" 
                            type="text" 
                            placeholder='Precio Basico' 
                            fullWidth
                            name="precio"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextFormNumber
                            label="Precio Especial" 
                            type="text" 
                            placeholder='Precio Especial' 
                            fullWidth
                            name="precio2"
                        />
                    </Grid>
                    

                    <Grid item xs={12} sm={3}>
                        <DateFormScreen
                            label="Precio Especial Desde" 
                            placeholder='Precio Especial Desde' 
                            name="birth_date"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <DateFormScreen
                            label="Precio Especial Para" 
                            placeholder='Precio Especial Para' 
                            name="birth_date"
                        />
                    </Grid>


                    <SubtitulosScreen titulo="Categoria" mostrar="folder" />


                    <SubtitulosScreen titulo="Imagenes" mostrar="imagen" />




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
