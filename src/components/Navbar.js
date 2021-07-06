import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, AppBar, Toolbar, Button, Slide, Container, useScrollTrigger, Menu, MenuItem, Fade, Typography } from '@material-ui/core';
import AOS from 'aos';
import "aos/dist/aos.css";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
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
    mobilemenu:{
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
    menuStyle:{
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

export default function Navbar(props) {
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

    return (
        <Container className={classes.container}>


            <HideOnScroll {...props}>
                <AppBar elevation='0' position="static" className={classes.appbar} style={{ backgroundColor: "#e3e3e3" }}>
                    <Toolbar>
                        <div variant="h6" className={classes.span}>
                            <Avatar style={{ backgroundColor: 'transparent' }} className={classes.iconavatar}>
                                <img src="icon.png" data-aos={"fade"} className={classes.icon} />
                            </Avatar>
                        </div>
                        <Button className={classes.mobilemenu} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuRoundedIcon/>
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
                            <MenuItem  onClick={handleClose} 
                            style={{minWidth: '100vw'}}>
                                 <Typography >About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose} 
                            style={{minWidth: '100vw'}}>
                                <Typography >Experiences</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose} 
                            style={{minWidth: '100vw'}}>
                                 <Typography >Contact</Typography>
                            </MenuItem>
                        </Menu>
                        <div className={classes.buttons}>
                            <Button variant="raised"
                                data-aos={"fade-down"} data-aos-duration={"500"} size="large" className={classes.btn} disableRipple onClick={() => setSelected('About')}>About</Button>
                            <Button data-aos={"fade-down"} data-aos-duration={"1000"} size="large" className={classes.btn} disableRipple onClick={() => setSelected('Exp')}>Experiences</Button>
                            <Button data-aos={"fade-down"} data-aos-duration={"1500"} size="large" className={classes.btn} disableRipple onClick={() => setSelected('Contact')}>Contact</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </Container>
    )
}
