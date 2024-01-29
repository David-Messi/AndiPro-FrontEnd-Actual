
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Stack, Pagination, Avatar } from "@mui/material"

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa, ModalCambioClaveAdmin, TooltipAndIcon } from "../../../components";
import { BuscarConjunto } from "../components";
import { useAdminStore, useModalesStore } from "../../../../hooks";
import { getEnvVariables } from "../../../../helpers";




export const ListadoConjuntos = () => {


    const { VITE_APP_API_URL: url } = getEnvVariables();

    const navigate = useNavigate()
    const { admins, startLoadingAdmins, setActiveAdmin } = useAdminStore(); 
    const { toggleAdminPassowrd } = useModalesStore(); 


    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(20);


    useEffect(() => {
        startLoadingAdmins('CONJUNTO');
    }, [])
    


    const handlePagination = ( _: any, newPage: number) => {
        setPage(newPage - 1);
    }


    const handleEditar = (id: String | undefined) => {
        navigate(`/admin/conjunto/${id}/update`);
    }



    const handlePassword = (id: string) => {
        toggleAdminPassowrd(true);
        setActiveAdmin(id);
    }



    const handleNotas = ( id: string ) => {
        navigate(`/admin/conjunto/${id}/notas`);
    }



    const handleImagenes = ( id: string ) => {
        navigate(`/admin/conjunto/${id}/images`);
    }



    

    return (

        <DisenioPaginas titulo="Listado de Conjuntos" url='conjunto/create'>
            
        {
        (admins.length > 0) 
        ?   <>
            <BuscarConjunto />

            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Logo</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell className="w100">Correo</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell className="w200">Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {admins.map((adm: any) => (
                            <TableRow key={String(adm.id)} >
                                <TableCell sx={{ display:'flex', justifyContent:'center'}}>
                                    <Avatar
                                        alt="Imagen de Conjunto"
                                        src={`${url}/uploads/logo/${adm.logo}`}
                                        sx={{ width: 70, height: 70 }}
                                    />
                                </TableCell>
                                <TableCell >{`${adm.nombre} `}</TableCell>
                                <TableCell >{ adm.email }</TableCell>
                                {/* <TableCell >{ adm?.phone }</TableCell > */}
                                <TableCell >
                                    {
                                    (adm.estado)
                                    ? <Chip label="Activo" color="success" />
                                    : <Chip label="Inactivo" color="error" />
                                    }
                                </TableCell >
                                <TableCell >

                                    <TooltipAndIcon
                                        titulo="Editar Conjunto"
                                        icono="ver"
                                        onClick={ () => handleEditar(adm.id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Cambiar Contraseña"
                                        icono="password"
                                        onClick={ () => handlePassword(adm.id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Elegir Imagenes"
                                        icono="image"
                                        onClick={ () => handleImagenes(adm.id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Notas de Conjunto"
                                        icono="comentario2"
                                        onClick={ () => handleNotas(adm.id) }
                                    />

                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Stack sx={{ py:2, display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <Pagination count={Math.ceil(admins.length / rowsPerPage)} 
                        variant="outlined" page={page + 1} color="primary" 
                        onChange={ handlePagination } disabled={Math.ceil(admins.length / rowsPerPage) === 1}
                    />
                </Stack>


            </Paper>
            </>

            : <AlertaInformativa titulo="No Hay Información De Conjuntos Por Los Momentos..."/>

        }

            <ModalCambioClaveAdmin />


        </DisenioPaginas>

    )
}
