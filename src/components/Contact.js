import { Button, IconButton, CssBaseline, Container, Grid, Typography, Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        height: 'clamp(20vh, 50vh, 70vh)',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            lineHeight: '3em',
            flexDirection: 'row',
            justifyContenct: 'center'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            flexDirection: 'row'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'right',
            flexDirection: 'column'
        },
    },
    title: {
        fontSize: 'clamp(1em, 3em, 3em)',
        fontWeight: 'bold',
        color: '#37474F',
        lineHeight: '1em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'right',
        }
    },
    subtitle: {
        fontWeight: 'bold',
        color: '#37474F',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            lineHeight: '2em',
            fontSize: 'em'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            fontSize: '1em'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'right',
            fontSize: '1em'
        }
    },
    socialIcons: {
        height: '30px',
        width: '30px',
        [theme.breakpoints.down('sm')]: {
            display: 'inline'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        },

    },
    great: {
        cursor: 'pointer',
        color: '#37474F',
        transition: 'color 0.2s ease-in-out',
        '&:hover': {
            color: "#f99e4c"
        }
    }
}))
export default function Contact() {
    const classes = useStyles()


    return (
        <div
            style={{ paddingTop: 'clamp(13rem, 23vh, 23vh)', paddingBottom: 'clamp(13rem, 23vh, 23vh)' }}
            id="contact"
        >
            <CssBaseline />

            <Container style={{ paddingLeft: 'clamp(0%, 25%, 11%)', paddingRight: 'clamp(0%, 11%, 11%)' }}>


                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >

                    <Grid item xs={12} >
                        <p className={classes.title} > Let's make something <span className={classes.great}>great!</span></p>
                        <p className={classes.subtitle}>Feel free to reach out through any platforms here:</p>
                    </Grid>
                    <Grid item xs={3} >
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"500"}
                            onClick={() => window.open('https://github.com/mountaintew')}
                        >
                            <img src="social/github.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"700"}
                            onClick={() => window.open('https://www.linkedin.com/in/lesterantonio/')}
                        >
                            <img src="social/linkedin.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"900"}
                            onClick={() => window.open('https://web.facebook.com/lstrarana/')}
                        >
                            <img src="social/facebook.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} >
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"1100"}
                            onClick={() => window.open('mailto:6.lesterantonio@gmail.com')}
                        >
                            <img src="social/gmail.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}
