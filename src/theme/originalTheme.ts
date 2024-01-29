
import { InputBase, createTheme, Chip } from '@mui/material';
import { red } from '@mui/material/colors';

import { styled, alpha, emphasize } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { getEnvVariables } from '../helpers';
import { PropsAppBar } from '../interfaces';

const { VITE_APP_TAMANIO_DRAWER: drawer } = getEnvVariables();
const drawerWidth = +drawer;






export const originalTheme = createTheme({
    palette: {
        primary: {
            // main: '#262254'
            // main: '#00B5B8',
            main: '#FF0000',
        },
        secondary: {
            main: '#543884',
        },
        error: {
            main: red.A400
        },
        text: {
            // primary: '#ffffff', 
            secondary: '#788193',
        }, 
    },


    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 32,
                    fontWeight: "bold",  
                    fontFamily: 'arial',
                    color: 'black'               
                },
                h2: {
                    fontSize: 35,
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                },

                // h3: {
                //     fontSize: 25,
                //     fontFamily: 'arial',
                //     color: '#ffffff'
                // },

                // h4: {
                //     fontSize: 22,
                //     color: '#8B8B8B',
                //     fontFamily: 'arial',
                // },

                h5: {
                    fontSize: 17,
                    fontFamily: 'arial',
                    color: '#8B8B8B',
                },

                // h6: {
                //     fontSize: 17,
                //     fontFamily: 'arial',
                //     color: '#C4C4C4'
                // },
                
                body2: {
                    fontSize: 15,
                    fontFamily: 'Oswald'
                },
            }
        },

        // MuiIconButton: {
        //     styleOverrides: {
        //         root: {
        //             color: '#ffffff',
        //         },
        //     }   
        // },
        
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#121212',
                },
            }
        },

        MuiListSubheader: {
            styleOverrides: {
                root: {
                    backgroundColor: '#121212',
                    fontSize:17
                },
            }
        },


        MuiTableContainer:{
            styleOverrides: {
                root: {
                    // border: '2px solid #EEEEEE'
                }
            }
        },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    // "&:nth-of-type(odd)":{
                    //     backgroundColor: '#d7d7d7'
                    // },
                    '&:last-child th': {
                        backgroundColor: '#000000',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: '#fff',
                        padding: '15px',
                    }
                }
            }
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#121212',
                    // fontSize: '12px',
                    padding: '14px',
                    textAlign: 'center',
                    border: '1px solid #EEEEEE',
                }
            }
        },


    },
})



export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    backgroundColor: '#EEEEEE',
    minHeight:'100vh',
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
    }),
        marginLeft: `${drawerWidth}px`,
    }),
  }));



export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }: PropsAppBar) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));



export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      cursor: 'pointer',
      marginBottom:'10px',
      marginTop:'5px',
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
}) as typeof Chip; 