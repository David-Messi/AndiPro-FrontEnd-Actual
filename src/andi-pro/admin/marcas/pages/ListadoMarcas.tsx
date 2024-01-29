
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Stack, Chip, TablePagination } from "@mui/material"
import { Visibility } from '@mui/icons-material';

import { DisenioPaginas } from "../../../layouts"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertaInformativa } from "../../../components";




const coworker = [
    { id: '1', name: 'David Messi', status: true, }
]




export const ListadoMarcas = () => {



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();
  
  
    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };
  
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleVisalizar = (uid: string) => {
        navigate(`/admin/product/brand/1/detail`);
    }


    return (

            
    <DisenioPaginas titulo="Lista de Marcas" url='product/brand/create'>

            
    {
    (coworker.length > 0) 
        ?<Paper>
            <TableContainer>
                <Table sx={{ minWidth:400 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell className="w100">Estado</TableCell >
                            <TableCell>Acción</TableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {coworker.map((pos: any) => (
                        <TableRow key={String(pos.id)} >
                            <TableCell >{ pos.name }</TableCell>
                            <TableCell >
                                <Stack>
                                    {
                                    (pos.status)
                                    ? <Chip label="Activo" color="success" />
                                    : <Chip label="Inactivo" color="error" />
                                    }
                                </Stack>
                            </TableCell >
                            <TableCell >
                                <IconButton sx={{ color:"primary.main"}} 
                                        onClick={ () => handleVisalizar(pos.id) }>
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
                count={coworker.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

        : <AlertaInformativa titulo="No Hay Marcas Creadas Por Los Momentos..."/>

    }

    </DisenioPaginas>


    )




}
