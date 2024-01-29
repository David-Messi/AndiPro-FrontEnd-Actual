
import { useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Modal, Button, Grid, Typography  } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { useCobranzaStore, useModalesStore } from '../../../../hooks';
import { DateFormScreen, SelectSencillo, TextFormField } from '../../../components';
import { mediosCobranza } from '../../../../data';



    // const style = {
    //     position: 'absolute' as 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 500,
    //     bgcolor: '#121212',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };


    const customStyles = {
        input: {
            color: 'white',
        },
    };





    export const ModalCrarCobranza = () => {

        const { id } = useParams();
        const { modalCobranza, toggleStartCobranza } = useModalesStore(); 
        const { startSavingCobranza } = useCobranzaStore();



        const closeModal = () => {
            toggleStartCobranza(false);
        }


        const handleCrearInfo = async(valor:any) => {
            const resp = await startSavingCobranza({ ...valor, usuario: id })
            if( resp ){
                closeModal();
            }
        }



        return (
            
            <Modal
                open={modalCobranza}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="estilos-modal">

                    <Typography variant="h2" sx={{ color:"white", textAlign:"center", mb:2 }}>
                        Crear Cobranza
                    </Typography>


                    <Formik
                        initialValues={{
                            fecha: '',
                            medio: '',
                            comunicado: '',
                            observacion: '',
                        }}
                        onSubmit={ ( values: any ) => {
                            handleCrearInfo(values);
                        }}
                        validationSchema={
                            Yup.object({
                                fecha: Yup.string()
                                        .required('Campo Requerido'),
                                medio: Yup.string()
                                        .required('Campo Requerido'),
                                comunicado: Yup.string()
                                        .required('Campo Requerido'),
                                observacion: Yup.string()
                                        .required('Campo Requerido'),
                            })
                        }
                    >
                    { () => (

                        <Form>
                        <Grid container spacing={2} >

                            <Grid item xs={12} sm={12}>
                                <DateFormScreen
                                    label="Fecha" 
                                    placeholder='Fecha' 
                                    name="fecha"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <SelectSencillo
                                    label="Medio" 
                                    placeholder='Medio' 
                                    fullWidth
                                    name="medio"
                                    options={ mediosCobranza }
                                    InputProps={{
                                        style: customStyles.input,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextFormField
                                    label="Comunicado" 
                                    type="text" 
                                    placeholder='Comunicado' 
                                    fullWidth
                                    multiline
                                    name="comunicado"
                                    InputProps={{
                                        style: customStyles.input,
                                    }}
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <TextFormField
                                    label="Observación" 
                                    type="text" 
                                    placeholder='Observación' 
                                    fullWidth
                                    multiline
                                    name="observacion"
                                    InputProps={{
                                        style: customStyles.input,
                                    }}
                                />
                            </Grid>


                            <Grid container sx={{ml:2, my:3, display:'flex', justifyContent:'center'}}>
                                <Grid item xs={12} sx={{ textAlign:'center'}}>
                                <Button type="submit" variant="contained" sx={{color:'white', py:1}} startIcon={<SaveAs />}>
                                    Crear Cobranza
                                </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                        </Form>
                    )}
                    </Formik>
                </Box>
            </Modal>

        )

    }
