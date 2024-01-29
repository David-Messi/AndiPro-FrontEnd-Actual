
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Chip, TablePagination } from "@mui/material"
import { Visibility } from '@mui/icons-material';

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa } from "../../../components";
import { Cliente } from "../../../../interfaces";
import { BuscarClienteScreen } from "../components";
// import { useClienteStore } from "../../../../hooks";





export const ListadoClientes = () => {


    const navigate = useNavigate()
    // const { clientes, startLoadingClientes } = useClienteStore(); 


    // useEffect(() => {
    //     startLoadingClientes();
    // }, [])
    


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const handleVisalizar = (uid: String | undefined) => {
        navigate(`/admin/customer/lead/${uid}/detail`);
    }

    

    return (

        <DisenioPaginas titulo="Listado de Clientes Potenciales" url='customer/lead/create'>
            
        {
        ([].length > 0) 
        ?   <>

            <BuscarClienteScreen />

            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell >
                                <TableCell>DNI</TableCell >
                                <TableCell>Correo Electronico</TableCell >
                                <TableCell>Teléfono</TableCell >
                                <TableCell>Estado</TableCell >
                                <TableCell>Acción</TableCell >
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {[].map((cli: Cliente) => (
                            <TableRow key={String(cli.id)} >
                                <TableCell >{ `${cli.name} ${cli.last_name}` }</TableCell >
                                <TableCell >{ cli.document }</TableCell >
                                <TableCell >{ cli.email }</TableCell >
                                <TableCell >{ cli.phone }</TableCell >
                                <TableCell >
                                    {
                                    (cli.status)
                                    ? <Chip label="Activo" color="success" />
                                    : <Chip label="Inactivo" color="error" />
                                    }
                                </TableCell >
                                <TableCell >
                                    <IconButton sx={{ color:"primary.main"}} 
                                            onClick={ () => handleVisalizar(cli.id) }>
                                        <Visibility />
                                    </IconButton>
                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={[].length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            </>

            : <AlertaInformativa titulo="No Hay Clientes Creados Por Los Momentos..."/>

        }

        </DisenioPaginas>

    )
}
