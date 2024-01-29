
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Grid, ListSubheader } from '@mui/material';
import { KeyboardArrowRight, ExpandMore } from '@mui/icons-material';

import { useSidebarMenuStore } from '../../hooks';
import { DrawerHeader } from '../../theme';
import { menuData } from '../../data';


const menuItems = menuData;




export const SlideShowMenu = () => {

  const navigate = useNavigate();
  const { isSidebarOpen } = useSidebarMenuStore();

  
  const [subMenu, setsubMenu] = useState<string | null>(null);
  const [rutas, setRutas] = useState<string | null>(null);
  const [menu, setMenu] = useState<string | null>(null);




  const handleClick = (valor: string) => {
    setsubMenu(subMenu === valor ? null : valor);
  };


  const handleArrowMenu = (valor: string) => {
    if( menu === valor ){
      setMenu(null)
    }else {
      setMenu(valor);
    }
  };



  const handleSubMenu = (menu: string) => {
    setRutas( menu );
    navigate(`/admin/${ menu }`);
  }




  return (

      <Drawer variant="persistent" anchor="left" open={ isSidebarOpen } >

        <DrawerHeader>
          <Grid container sx={{ width:'100%', minHeight:'80px', display:'column', justifyContent:'center',     alignItems:'center', textAlign:'center' }}
          >
              <Grid item>
                  <Typography variant='h3'>Andi-Pro</Typography>
              </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />

        <List sx={{background:'#121212'}}>

          <ListSubheader sx={{mt:2}}>GENERAL</ListSubheader>

          {menuItems.map( (item) => (
            <div key={ item.name }>
              <ListItem disablePadding>

                <ListItemButton onClick={ () =>{
                    handleClick(item.name),
                    handleArrowMenu(item.name)
                }}>
                  <ListItemIcon sx={{color:'#C4C4C4'}}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ ml:-2 }} variant="h5">{item.name}</Typography>
                    }
                  />
                  {(menu === item.name) 
                    ? <ExpandMore sx={{color:'#C4C4C4'}}/> 
                    : <KeyboardArrowRight sx={{color:'#C4C4C4'}}/>
                  }
                </ListItemButton>
              </ListItem>

              <Collapse in={subMenu === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenus.map( (submenu) => (
                    <ListItemButton className='lista-drawer' key={submenu.subtitle} 
                        onClick={ () => handleSubMenu(submenu.ruta)}
                    >
                      <ListItemText sx={{ml:4}} primary={ 
                          <Typography variant="h5" sx={{ color: rutas === submenu.ruta ? 'red' : '' }}>{submenu.subtitle}</Typography> }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>

            </div>
          ))}

        </List>
      </Drawer>

  );
}