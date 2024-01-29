
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination } from "@mui/material"

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa, TooltipAndIcon } from "../../../components";
import { useUsuarioStore } from "../../../../hooks";
import { colorGestion } from "../../../../helpers";
import { BuscarUsuario } from "../components/BuscarUsuario";




export const ListadoUsuarios = () => {


    const navigate = useNavigate()
    const { usuarios, total, startLoadingUsuarios } = useUsuarioStore(); 


    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(20);


    
    useEffect(() => {
        startLoadingUsuarios(0);
    }, [])



    const handlePagination = ( _: any, newPage: number) => {
        console.log(newPage)
        setPage(newPage - 1);
        startLoadingUsuarios(newPage - 1);
    }


    
    const handleEditar = (id: String | undefined) => {
        navigate(`/admin/user/${id}/update`);
    }


    const handleDocumentos = (id: String | undefined) => {
        navigate(`/admin/user/${id}/doc`);
    }  

    
    const handleCobranzas = (id: String | undefined) => {
        navigate(`/admin/user/${id}/cobranza`);
    }


    

    return (

        <DisenioPaginas titulo="Listado de Usuarios" url='user/create'>


            <BuscarUsuario />

            
        {
        (usuarios?.length > 0) 
        ?   <>
            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Inmueble</TableCell>
                                <TableCell>Nombre</TableCell>
                                {/* <TableCell>Conjunto</TableCell> */}
                                <TableCell>Gestion</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {usuarios.map((user: any) => (
                            <TableRow key={String(user._id)} >
                                <TableCell >{ user?.inmueble }</TableCell >
                                <TableCell >{`${user.nombre} `}</TableCell >
                                {/* <TableCell >{ user.conjunto.nombre }</TableCell > */}
                                <TableCell sx={{ background: colorGestion(user.gestion), color:'white' }}>{ user.gestion }</TableCell >
                                <TableCell >
                                    <TooltipAndIcon
                                        titulo="Editar Usuario"
                                        icono="ver"
                                        onClick={ () => handleEditar(user._id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Ver Documentos"
                                        icono="pdf"
                                        onClick={ () => handleDocumentos(user._id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Ver Cobranzas"
                                        icono="money"
                                        onClick={ () => handleCobranzas(user._id) }
                                    />
                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Stack sx={{ py:2, display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <Pagination count={Math.ceil(total / rowsPerPage)} 
                        variant="outlined" page={page + 1} color="primary" 
                        onChange={ handlePagination } disabled={Math.ceil(total / rowsPerPage) === 1}
                    />
                </Stack>

            
            </Paper>
            </>

            : <AlertaInformativa titulo="No Hay Usuarios Creados Por Los Momentos..."/>

        }

        </DisenioPaginas>

    )
}
