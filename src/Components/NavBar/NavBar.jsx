/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavList from './NavList';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavBar(props) {
    const {children} = props
  return (
    <>
      <ElevationScroll {...props} className="navBar">
        <AppBar color='success' >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             TFI- SIMULACIÓN
            </Typography>
           <NavList/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container maxWidth="xl" >
        <Box sx={{ my: 2, display:"flex" , justifyContent:"center" , flexDirection:"column"}}>
         {children}
        </Box>
      </Container>
    </>
  );
}
