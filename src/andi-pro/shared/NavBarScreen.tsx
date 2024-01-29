
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Toolbar, Typography, IconButton, Tooltip, Avatar, Box, Menu, MenuItem, Badge } from '@mui/material';
import { Menu as MenuIcon, ArrowBackIosNew, Mail, Notifications, PersonOutlineOutlined, EmailOutlined, TaskAltOutlined, CommentOutlined, PowerSettingsNew, Search as SearchIcon } from '@mui/icons-material';

import { useAuthStore, useSidebarMenuStore } from '../../hooks';
import { AppBar, SearchIconWrapper, Search, StyledInputBase } from '../../theme';





export const NavBarScreen = () => {
    


    const navigate = useNavigate();
    const { isSidebarOpen, toggleMenu } = useSidebarMenuStore();
    const { startLogout } = useAuthStore();


    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleLogout = () => {
        navigate('/');
        startLogout();
    }

    

    const settings = [ 
        { title: 'Editar Perfil', action: handleLogout, icon: <PersonOutlineOutlined sx={{fontSize:'17px'}}/> },
        { title: 'Mi Bandeja de Entrada', action: handleLogout, icon: <EmailOutlined sx={{fontSize:'17px'}}/> },
        { title: 'Tarea', action: handleLogout, icon: <TaskAltOutlined sx={{fontSize:'17px'}}/> },
        { title: 'Charlas', action: handleLogout, icon: <CommentOutlined sx={{fontSize:'17px'}}/> },
        { title: 'Cerrar sesión', action: handleLogout, icon: <PowerSettingsNew sx={{fontSize:'17px'}}/> },
    ];



    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleDrawerOpen = () => {
        toggleMenu();
    };




    return (

        <AppBar position="fixed" open={isSidebarOpen} theme={undefined}>
            <Toolbar>

                <IconButton color="inherit" sx={{ mr:2, color:"#ffffff" }} onClick={ handleDrawerOpen }>
                    {
                    (isSidebarOpen)
                    ? <ArrowBackIosNew />
                    : <MenuIcon />
                    }
                </IconButton>

                <Typography variant='h5' mr={2}>Mega</Typography>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{color:"#C4C4C4"}} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar..."
                        inputProps={{'aria-label': 'search'}}
                        sx={{color:"#ffffff"}}
                    />
                </Search>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: { xs:'none', md:'flex' } }}>
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <Notifications color="action" />
                        </Badge>
                    </IconButton>

                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={8} color="error">
                            <Mail color="action" />
                        </Badge>
                    </IconButton>
                </Box>

                <Box ml={2}>
                    <Tooltip title="Configuracion de Usuario">
                        <IconButton onClick={handleOpenUserMenu} >
                            <Avatar src="/static/images/avatar/2.jpg" sx={{ width:'50px', height:'50px' }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt:'47px', width:'300px' }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        // keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorElUser)}
                        onClose={ handleCloseUserMenu }
                    >
                    {settings.map( (setting) => (
                        <MenuItem key={ setting.title } onClick={ setting.action }>
                            { setting.icon }
                            <Typography variant='body2' ml={1}>{ setting.title }</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
            
            </Toolbar>
        </AppBar>


    )

}
