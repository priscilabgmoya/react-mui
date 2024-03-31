import { useState } from "react";
import { Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import {Menu,Settings} from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import { Outlet } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListNavBarHorizontal from "./ListNavHorizontal";
import ListNavBar from "./LIstNav";

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
     
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
  backgroundColor: '#AD2D31', 
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  color:"black"
}));

export default function NavBar({location, children}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleChange = () => {
      setOpen(!open);
    };
  

    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar >
                    <IconButton  onClick={handleChange} size="large"  sx={{ mr: 2, ...(open && { display: 'none' }) }} edge="start">
                        <Menu sx={{color:'white' }}/>
                    </IconButton>
                    <Typography  variant="h6" noWrap component="div"  sx={{flexGrow:1, display:'flex', color:'white' ,fontSize:17}}  >Bienes Patrimoniales</Typography>
                    <Box sx={{display:{xs: 'none', sm:'flex'} }}>
                        <ListNavBarHorizontal/>
                        <Outlet /> 
                    </Box>
                </Toolbar>
            </AppBar>
        <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: '#E3E7F1', 
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
        >
         <DrawerHeader>
          <IconButton onClick={handleChange}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box  sx={{display: "flex" , flexDirection: 'column',justifyContent:"star"  , textAlign: "left" }}>
            <ListNavBar location={location}/> 
            <Outlet /> 
            </Box>
        </Drawer>
        <Main open={open}>
        <DrawerHeader />
        {children}
        </Main>
        </Box>
    );
}