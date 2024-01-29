
import React from 'react';

import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';
import logo  from '../../../assets/andipro/logoEmpresa2.png'; 



const drawerWidth = 250;
// const navItems = ['inicio', 'Quienes Somos', 'Servicios', 'Clientes', 'Formula', 'Contacto']; 

const navItems = [
    {nombre: 'Inicio', ruta: 'component1'}, 
    { nombre: 'Quienes Somos', ruta: 'component2' }, 
    { nombre: 'Servicios', ruta: 'component3' },
    { nombre: 'Clientes', ruta: 'component4' }, 
    { nombre: 'Formula', ruta: 'component5' }, 
    { nombre: 'Contacto', ruta: 'component6' }, 
]




export const NavBarComponent = () => {


    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };




    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center', background:'white', height:'100%'}}>
            <Box sx={{height:'100px', p:3}}>
                <img style={{height:'100%'}} src={logo} alt="Logo Andi-Pro" />
            </Box>
            
            <Divider sx={{background:'white'}} />

            <List>
                {navItems.map((item) => (
                <ListItem key={item.nombre} disablePadding>
                    <Link to={item.ruta} smooth={true} offset={-120} duration={500}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.nombre} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                ))}
            </List>

            
            {/* <List sx={{ display:'flex' }}>
                {navItems.map( (item) => (
                    <ListItem key={item.nombre} disablePadding >
                        <Link to={item.ruta} smooth={true} offset={-120} duration={500}>
                            <ListItemButton sx={{textAlign:'center'}} >
                                <ListItemText primary={item.nombre} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List> */}

            <Box sx={{ display:{xs:'block', sm:'none'} }}>
                <Button fullWidth variant="contained" sx={{color:'white', py:2 }}>
                    Login
                </Button>
            </Box>
        </Box>
    );



    return (

        <Box sx={{display:'flex'}}>
            <CssBaseline />
            <AppBar component="nav" sx={{background:'white', height:'100px', p:2}}>
                <Toolbar>
                    <IconButton edge="start" onClick={handleDrawerToggle} sx={{mr:2, display:{md:'none'}, background:'red', color:'white', marginRight:4 }}>
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{flexGrow: 1, display:{md:'none'}}} />

                    <Box sx={{height:'100%', flexGrow: 1, display:'flex', justifyContent:{xs:'center', md:'start'}}}>
                        <img style={{height:'100%'}} src={logo} alt="Logo Andi-Pro" />
                    </Box>

                    {/* <Box sx={{flexGrow: 1}} /> */}

                    <Box sx={{ display:{xs:'none', md:'block'}, ml:{md:-3} }}>
                        {navItems.map((item) => (
                            <Button key={item.nombre} sx={{color:'black', py:2}}>
                                <Typography variant="body1" sx={{fontSize:'14px', fontFamily:'Roboto, sans-serif', letterSpacing:'-0.9px'}}>
                                    {item.nombre}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 1}} />

                    <Box sx={{ display:{xs:'none', sm:'block'} }}>
                        <Button variant="contained" sx={{color:'white', py:2 }}>
                            Login
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                    keepMounted: true,
                    }}
                    sx={{
                        display:{md:'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            
        </Box>
    )
}
