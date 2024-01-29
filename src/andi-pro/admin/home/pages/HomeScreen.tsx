
import { useEffect } from "react";

import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import { EmojiTransportation, PersonPin, AdminPanelSettings, PublishedWithChanges, CheckCircleOutline, Warning, PhoneDisabled, HandshakeRounded, DangerousRounded } from '@mui/icons-material';

import { originalTheme } from "../../../../theme";
import { useAdminStore } from "../../../../hooks";
import { CargandoScreen } from "../../../components";
import { DisenioBasico } from "../../../layouts";







export const HomeScreen = () => {


    const { info, infoCompletaDashboard } = useAdminStore();


    useEffect(() => {
        infoCompletaDashboard();
    }, [])
    


    return (

        <DisenioBasico titulo="Dashboard Informativo">

            {info
            ?   <Grid container spacing={3} display='flex' mt={4}>

                    <Grid item xs={12} sm={6} md={4}>
                    {/* onClick={ () => redirecPage('abonos/nueva') } */}
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:originalTheme.palette.primary.main }}>
                                        <EmojiTransportation sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Conjuntos
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.conjuntos }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:originalTheme.palette.primary.main }}>
                                        <AdminPanelSettings sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Administradores
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.admin }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:originalTheme.palette.primary.main }}>
                                        <PersonPin sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Usuarios
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.user }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#A12EFB' }}>
                                        <PublishedWithChanges sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Exitoso y Concluido
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.exito }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#2BB224' }}>
                                        <CheckCircleOutline sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Pago En Cumplimiento
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.bien }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#EDD400' }}>
                                        <Warning sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Acuerdo Incumplido
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.incumplido }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#6B89F7' }}>
                                        <PhoneDisabled sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Gestionando, No Contesta
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.nocontesta }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#EAA10F' }}>
                                        <HandshakeRounded sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        En Negociaciones
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.negociacion }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card >
                            <CardActionArea sx={{ height: 210, display:'column', alignItems:'end', justifyContent:'center', padding:'15px 15px 5px 15px' }} >
                                <Box>
                                    <Avatar sx={{ width: 55, height: 55, margin:'0 auto', background:'#D04A38' }}>
                                        <DangerousRounded sx={{ fontSize:35 }} />
                                    </Avatar>
                                </Box>
                                <CardContent sx={{ textAlign:'center' }}>
                                    <Typography variant='h4'>
                                        Proceso Juridico
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary">
                                        { info.juridico }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>


            :   <CargandoScreen titulo="Cargando Información..."/>
            }


        </DisenioBasico>
        
    )


}
