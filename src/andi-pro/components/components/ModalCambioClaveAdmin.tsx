
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Modal, Button, Grid, Typography  } from '@mui/material';
import { SaveAs } from '@mui/icons-material/';
import { useAdminStore, useModalesStore } from '../../../hooks';

import { TextFormField } from '../../components/inputs/TextFormField';


    const customStyles = {
        input: {
            color: 'white',
        },
    };




    export const ModalCambioClaveAdmin = () => {

        const { modalAdmin, toggleAdminPassowrd } = useModalesStore(); 
        const { activeAdmin, cambioClaveSencillo, deleteAdmin } = useAdminStore();



        const closeModal = () => {
            toggleAdminPassowrd(false);
            deleteAdmin();
        }


        const handleCrearInfo = async(valor:any) => {
            const resp = await cambioClaveSencillo({ ...valor, id: activeAdmin.id })
            if( resp ){
                closeModal();
            }
        }



        return (
            
            <Modal
                open={modalAdmin}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="estilos-modal">

                    <Typography variant="h2" sx={{ color:"white", textAlign:"center", mb:2 }}>
                        Cambio de Password
                    </Typography>


                    <Formik
                        initialValues={{
                            password: '',
                            confirmarPassword: '',
                        }}
                        onSubmit={ ( values: any ) => {
                            handleCrearInfo(values);
                        }}
                        validationSchema={
                            Yup.object({
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

                            <Grid item xs={12}>
                                <TextFormField
                                    label="Contraseña" 
                                    type="password" 
                                    placeholder='Contraseña' 
                                    fullWidth
                                    name="password"
                                    InputProps={{
                                        style: customStyles.input,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextFormField
                                    label="Confirmar Contraseña" 
                                    type="password" 
                                    placeholder='Confirmar Contraseña' 
                                    fullWidth
                                    name="confirmarPassword"
                                    InputProps={{
                                        style: customStyles.input,
                                    }}
                                />
                            </Grid>


                            <Grid container sx={{ml:2, my:3, display:'flex', justifyContent:'center'}}>
                                <Grid item xs={12} sx={{ textAlign:'center'}}>
                                <Button type="submit" variant="contained" sx={{color:'white', py:1}} startIcon={<SaveAs />}>
                                    Cambio de Password
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
