import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import Hero from './components/Hero';
import Social from './components/Social';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Fab, CssBaseline, Grid, Avatar, AppBar, Toolbar, Button, Slide, Container, useScrollTrigger, Menu, MenuItem, Fade, Typography } from "@material-ui/core";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import AOS from 'aos';
import "aos/dist/aos.css";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from 'react-scroll';

import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
const themeLight = createTheme({
  palette: {
    background: {
      default: "#e3e3e3"
    }
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }


});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }

  }
});
const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  mobilemenu: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
  },
  menuStyle: {
    backdropFilter: 'blur(10px)',
  },
  buttons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    },
  },
  root: {
    flexGrow: 1,
  },
  span: {
    flexGrow: 1,

  },
  appbar: {
    position: 'relative',
    zIndex: '3',
  },
  btn: {

    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    paddingRight: 0,
    color: '#37474F',
    fontSize: '1.2rem',
    textTransform: 'none',
    fontWeight: 'bold',

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.3)',
      backgroundColor: 'transparent',
    }
  },
  iconavatar: {

    margin: 0,
    transition: 'transform .5s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.3)'
    }
  },
  icon: {
    [theme.breakpoints.down('sm')]: {

      width: '34px',
      height: '34px',
    },
    [theme.breakpoints.up('md')]: {

      width: '38px',
      height: '38px',
    },
    [theme.breakpoints.up('lg')]: {

      width: '42px',
      height: '42px',
    },
  }
}));


function App(props) {
  const [light, setLight] = useState(true);
  useEffect(() => {
    AOS.init({
    });
  }, []);
  const classes = useStyles()
  const [selected, setSelected] = useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <div className="App">

        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={0}
          style={{ textAlign: 'right', minHeight: '100vh', position: 'fixed' }}
        >

          <Social style={{ position: 'fixed' }} />
        </Grid>

        <Container className={classes.container} ref={ref}>
          <HideOnScroll {...props}>
            <AppBar elevation={0} position="static" className={classes.appbar} style={{ backgroundColor: "#e3e3e3" }} id="navbar">
              <Toolbar>
                <div variant="h6" className={classes.span}>
                  <Avatar style={{ backgroundColor: 'transparent' }} className={classes.iconavatar}>
                    <img src="icon.png" data-aos={"fade"} className={classes.icon} />
                  </Avatar>
                </div>
                <Button className={classes.mobilemenu} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuRoundedIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  className={classes.menuStyle}
                >
                  <Link
                    to="about"
                    duration={500}
                    spy={true}
                    smooth={true}
                    offset={0}
                  >
                    <MenuItem onClick={handleClose}
                      style={{ minWidth: '100vw', }}>
                      <Typography >About</Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    to="exp"
                    duration={500}
                    spy={true}
                    smooth={true}
                    offset={0}
                  >
                    <MenuItem onClick={handleClose}
                      style={{ minWidth: '100vw' }}>
                      <Typography >Experiences</Typography>
                    </MenuItem>
                  </Link>


                  <Link
                    to="contact"
                    duration={900}
                    spy={true}
                    smooth={true}
                    offset={0}
                  >
                    <MenuItem onClick={handleClose}
                      style={{ minWidth: '100vw' }}>
                      <Typography >Contact</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
                <div className={classes.buttons}>
                  <Link
                    to="about"
                    duration={500}
                    spy={true}
                    smooth={true}
                    offset={0}
                  >
                    <Button
                      data-aos={"fade-down"} data-aos-duration={"500"} size="large" className={classes.btn} disableRipple>About</Button>
                  </Link>
                  <Link
                    to="exp"
                    duration={900}
                    spy={true}
                    smooth={true}
                    offset={100}
                  >
                    <Button data-aos={"fade-down"} data-aos-duration={"1000"} size="large" className={classes.btn} disableRipple onClick={() => setSelected('Exp')}>Experiences</Button>
                  </Link>
                  <Link
                    to="contact"
                    duration={900}
                    spy={true}
                    smooth={true}
                    offset={0}
                  >
                    <Button data-aos={"fade-down"} data-aos-duration={"1500"} size="large" className={classes.btn} disableRipple onClick={() => setSelected('Contact')}>Contact</Button>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>

        </Container>






        <Fade in={!isVisible}>
          <Link
            to="navbar"
            duration={500}
            spy={true}
            smooth={true}

            style={{
              position: 'fixed',
              bottom: '20px',
              right: 'clamp(1rem, 20rem, 0px)',
              zIndex: '5'
            }}
          >

            <Fab size="small" style={{ marginRight: '4vw', marginBottom: '20px', backgroundColor: '#fafafa', color: '#37474F' }}>
              <KeyboardArrowUpRoundedIcon />
            </Fab>
          </Link>
        </Fade>


        <Hero />
        <About />
        <Exp />
        <Contact />
        <Footer />

      </div>
    </MuiThemeProvider>
  );
}
function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}
export default App;
