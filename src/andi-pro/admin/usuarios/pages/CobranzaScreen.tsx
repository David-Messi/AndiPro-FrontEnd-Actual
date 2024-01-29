
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination, Grid, Button } from "@mui/material"
import { SaveAs } from '@mui/icons-material';

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa, TooltipAndIcon } from "../../../components";
import { ModalCrarCobranza } from '../components';
import { useCobranzaStore, useModalesStore, useUploadStore, useUsuarioStore } from '../../../../hooks';
import { descargarArchivo, getEnvVariables } from '../../../../helpers';

import moment from 'moment';
import Swal from 'sweetalert2';






export const CobranzaScreen = () => {

    const { VITE_APP_API_URL: url } = getEnvVariables();


    const { id } = useParams();
    const { activeUsuario, setActiveUsuario, deleteUsuario } = useUsuarioStore(); 
    const { cobranzas, startLoadingCobranzas, eliminarCobranza } = useCobranzaStore();
    const { subirImagenTodoCategoria } = useUploadStore();
    const { toggleStartCobranza } = useModalesStore();


    const [category, setCategory] = useState('')
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(20);



    useEffect(() => {
        if( id ){
            startLoadingCobranzas(id);
        }
    }, [id])
    

    useEffect(() => {
        if(id){
            setActiveUsuario(id);
        }
        return () => {
            deleteUsuario();
        }
    }, [id])


    const handlePagination = ( _: any, newPage: number) => {
        console.log(newPage)
        setPage(newPage - 1);
        // startLoadingUsuarios(newPage - 1);
    }


    const handleCrearCobranza = () => {
        toggleStartCobranza(true);
    }

    


    const handleSubirImg = async( id: any ) => {
        setCategory(id);
        document.querySelector<HTMLInputElement>('#fileSelector')?.click();
    }


    

    const handleFileChange = async( e: any ) => {
        const file = e.target.files[0];
        if( file && category ) {
            await subirImagenTodoCategoria(category, 'cobranza', file);
        }
    }

    


    const handleDescargarImg = (cobranza: any) => {
        const ver = `${ url }/uploads/cobranza/${ cobranza.evidencia }`
        descargarArchivo(ver, 'imagen-cobranza');
    }




    const handleDelete = async(id: string) => {
        const resp = await Swal.fire({
            title: 'Eliminar Cobranza',
            text: `¿Esta Seguro De Eliminar Esta Cobranza?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si' 
        });

        if(resp.value){
            const result = await eliminarCobranza(id);
            if( result ) {
                console.log('hacer accion');
            }
        }
    } 



    return (


        <DisenioPaginas titulo="Listado de Cobranzas" url="user/list" add={false} subtitulo={`Cobranzas de ${activeUsuario?.nombre}`}>

            
            <Grid container sx={{  my:3, display:'flex', justifyContent:'start' }}>
                <Grid item xs={6} sm={4}>
                <Button type="submit" variant="contained" sx={{color:'white'}} 
                        startIcon={<SaveAs />} onClick={ handleCrearCobranza }
                >
                    Añadir Cobranza
                </Button>
                </Grid>
            </Grid>


        {
        (cobranzas.length > 0) 
        ?   <>

            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Medio</TableCell>
                                <TableCell>Comunicado</TableCell>
                                <TableCell>Observación</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {cobranzas.map( (cobranza: any) => (
                            <TableRow key={String(cobranza._id)}>
                                <TableCell >{moment(cobranza.fecha).format('ll') }</TableCell>
                                <TableCell >{`${cobranza.medio}`}</TableCell>
                                <TableCell >{ cobranza.comunicado }</TableCell>
                                <TableCell >{ cobranza?.observacion }</TableCell>
                                <TableCell >

                                    <TooltipAndIcon
                                        titulo="Subir Imagen"
                                        icono="image"
                                        onClick={ () => handleSubirImg(cobranza._id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Descargar Imagen"
                                        icono="descargar"
                                        onClick={ () => handleDescargarImg(cobranza) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Eliminar Cobranza"
                                        icono="eliminar"
                                        onClick={ () => handleDelete(cobranza._id) }
                                    />

                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Stack sx={{ py:2, display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <Pagination count={Math.ceil(cobranzas.length / rowsPerPage)} 
                        variant="outlined" page={page + 1} color="primary" 
                        onChange={ handlePagination } disabled={Math.ceil(cobranzas.length / rowsPerPage) === 1}
                    />
                </Stack>

            
            </Paper>
            </>

            : <AlertaInformativa titulo="No Hay Gestion de Cobranzas Creadas Por Los Momentos..."/>

        }


            <ModalCrarCobranza />


            <input type="file" 
                id="fileSelector"
                className="boton-file"
                onChange={ handleFileChange }
                name="file"
            />


        </DisenioPaginas>
    )
}
