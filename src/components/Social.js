import React, { useEffect } from 'react'
import { CssBaseline, Container, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
    social: {
        zIndex: '1',
        position: 'absolute',
        top: 0,
        left: 0,
        minHeight: '100%',
        minWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            minHeight: '0%',
            minWidth: '0%',
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            minHeight: '100%',
            minWidth: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: '100%',
            minWidth: '100%'
        },
    },
    socialIcons: {


        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            width: '24px',
            height: '24px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '24px',
            height: '24px',
        },

    }
}))
export default function Social() {
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div className={classes.social}>
            <CssBaseline />
            <Container fixed>
                <Grid
                    container
                    direction="column"
                    alignItems="right"
                    justify="center"
                    spacing={0}
                    style={{ textAlign: 'right', minHeight: '100vh' }}
                >
                    <Grid item xs={0} md={12}>
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"500"}
                            onClick={() => window.open('https://github.com/mountaintew')}
                        >
                            <img src="social/github.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={0} md={12}>
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"700"}
                            onClick={() => window.open('https://www.linkedin.com/in/lesterantonio/')}
                        >
                            <img src="social/linkedin.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={0} md={12}>
                        <IconButton
                            data-aos={"slide-left"}
                            data-aos-duration={"900"}
                            onClick={() => window.open('https://web.facebook.com/lstrarana/')}
                        >
                            <img src="social/facebook.svg" className={classes.socialIcons} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={0} md={12}>
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
        </div>
    )
}
