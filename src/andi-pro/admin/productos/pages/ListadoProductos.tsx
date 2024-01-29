
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Chip, TablePagination } from "@mui/material"
import { Visibility } from '@mui/icons-material';

import { DisenioPaginas } from "../../../layouts"
import { AlertaInformativa } from "../../../components";




const coworker = [
    { id: '1', name: 'David Messi', status: true, }
]



export const ListadoProductos = () => {


    const navigate = useNavigate()


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

        <DisenioPaginas titulo="Listado de Productos" url='product/sku/create'>
            
        {
        (coworker.length > 0) 
        ?   <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell >
                                <TableCell>SKU</TableCell >
                                <TableCell>Tipo</TableCell >
                                <TableCell>Estado</TableCell >
                                <TableCell>Acción</TableCell >
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {coworker.map((p: any) => (
                            <TableRow key={String(p.id)} >
                                <TableCell >{ `${p.name}` }</TableCell >
                                <TableCell >{ p.name }</TableCell >
                                <TableCell >{ p.name }</TableCell >
                                <TableCell >
                                    {
                                    (p.status)
                                    ? <Chip label="Activo" color="success" />
                                    : <Chip label="Inactivo" color="error" />
                                    }
                                </TableCell >
                                <TableCell >
                                    <IconButton sx={{ color:"primary.main"}} 
                                            onClick={ () => handleVisalizar(p.id) }>
                                        <Visibility />
                                    </IconButton>
                                </TableCell >
                            </TableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* <Stack sx={{ py:2, display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <Pagination count={Math.ceil(productos.length / rowsPerPage)} 
                        variant="outlined" page={page + 1} color="primary" 
                        onChange={ handlePagination } disabled={Math.ceil(productos.length / rowsPerPage) === 1}
                    />
                </Stack> */}
            </Paper>

            : <AlertaInformativa titulo="No Hay Productos Creados Por Los Momentos..."/>

        }

        </DisenioPaginas>


    )


}
