import { Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    greet: {
        fontWeight: '600',
        margin: 'auto',
        fontSize: 'clamp(0.5em, 1.5em, 1.5em)',
        textIndent: '3px',
        color: "#37474F"

    },
    name: {
        fontWeight: 'bold',
        fontSize: 'clamp(1em, 5em, 5em)',
        lineHeight: '0.9em',
        padding: '0',
        textIndent: '-1px',
        color: "#f99e4c"
    },
    desc1: {
        margin: 'auto',
        fontSize: '1.5em',
        textIndent: '3px',
        color: "#37474F",
        fontWeight: '600'
    },
    desc2: {
        margin: 'auto',
        fontSize: 'clamp(0.5em, 1.5em, 1.5em)',
        textIndent: '1px',
        color: "#37474F",
        fontWeight: 'lighter',
        marginTop: '25px',
    },
    know: {
        position: 'relative',
        zIndex: '3',
        textDecoration: 'none',
        border: 0,
        background: 'transparent',
        textIndent: '0px',
        fontSize: 'clamp(0.5em, 1.3em, 1.3em)',
        cursor: 'pointer',
        padding: 0,
        marginTop: '30px',
        textIndent: '1px',
        color: "#37474F",
        textTransform: 'none',
        '&:hover': {
            textDecoration: 'underline',
            background: 'transparent',
        }
    }
}));
export default function Hero() {
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div style={{
            marginBottom: '15%'
        }}>
            <Container className={classes.root} >
                <Grid
                    container
                    direction="column"
                    alignItems="left"
                    justify="center"
                    spacing={0}
                    style={{ textAlign: 'left', minHeight: '80vh' }}
                >
                    <Grid item xs={12} md={6} lg={6}>
                        <div className={classes.greet} data-aos={"fade-up"} data-aos-duration={"1000"}>
                            Hi, my name is
                        </div>
                        <div className={classes.name} data-aos={"fade-up"} data-aos-duration={"1500"}>
                            Lester Antonio.
                        </div>
                        <div className={classes.desc1} data-aos={"fade-up"} data-aos-duration={"2000"}>
                            A StuDev who build things for the web.
                        </div>
                        <div className={classes.desc2} data-aos={"fade-up"} data-aos-duration={"2500"}>
                            I'm an ICT student developer who specializes in designing and creating websites that can contribute in many different ways.
                        </div>
                        <Button className={classes.know} data-aos={"fade-up"} data-aos-duration={"2500"}>
                            Know more about me
                        </Button>

                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
