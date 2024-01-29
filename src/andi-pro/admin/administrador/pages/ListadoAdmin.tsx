
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, TablePagination } from "@mui/material"

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa, ModalCambioClaveAdmin, TooltipAndIcon } from "../../../components";
import { useAdminStore, useModalesStore } from "../../../../hooks";





export const ListadoAdmin = () => {


    const navigate = useNavigate()
    const { admins, startLoadingAdmins, setActiveAdmin } = useAdminStore(); 
    const { toggleAdminPassowrd } = useModalesStore(); 



    useEffect(() => {
        startLoadingAdmins('ADMIN');
    }, [])
    


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const handleEditar = (id: string | undefined) => {
        navigate(`/admin/admin/${id}/update`);
    }


    const handlePassword = (id: string) => {
        toggleAdminPassowrd(true);
        setActiveAdmin(id);
    }

    

    return (

        <DisenioPaginas titulo="Listado de Administradores" url='admin/create'>
            
        {
        (admins.length > 0) 
        ?   <>
            {/* <BuscarAdmin /> */}

            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell >
                                <TableCell>Correo</TableCell >
                                <TableCell>Teléfono</TableCell >
                                <TableCell>Estado</TableCell >
                                <TableCell>Acción</TableCell >
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {admins.map((adm: any) => (
                            <TableRow key={String(adm.id)} >
                                <TableCell >{`${adm.nombre} `}</TableCell >
                                <TableCell >{ adm.email }</TableCell >
                                <TableCell >{ adm?.phone }</TableCell >
                                <TableCell >
                                    {
                                    (adm.estado)
                                    ? <Chip label="Activo" color="success" />
                                    : <Chip label="Inactivo" color="error" />
                                    }
                                </TableCell >
                                <TableCell >

                                    <TooltipAndIcon
                                        titulo="Editar Admin"
                                        icono="ver"
                                        onClick={ () => handleEditar(adm.id) }
                                    />

                                    <TooltipAndIcon
                                        titulo="Cambiar Contraseña"
                                        icono="password"
                                        onClick={ () => handlePassword(adm.id) }
                                    />
                                    
                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={admins.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            </>

            : <AlertaInformativa titulo="No Hay Admin. Creados Por Los Momentos..."/>

        }

            <ModalCambioClaveAdmin />

        </DisenioPaginas>

    )
}
