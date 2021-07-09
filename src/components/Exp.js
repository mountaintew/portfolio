import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, Grid, Button, CardContent, CardActions, Container, Typography, CssBaseline } from '@material-ui/core'
import AOS from 'aos';
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({

    cardRoot: {
        textAlign: 'center',
        fontWeight: 'lighter',
        color: '#37474F',
        fontSize: 'clamp(0.9em, 1.3em, 1.3em)',
        border: 0,

    },
    cardTitle: {
        fontSize: 'clamp(1em, 2em, 2em)',
        fontWeight: 'bold',
        color: '#37474F'
    },
    title: {
        fontSize: 'clamp(1em, 3em, 3em)',
        fontWeight: 'bold',
        color: '#37474F'
    },
    btn: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        textTransform: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: 'transparent',
            transform: 'scale(1.1)',

        }
    },
    icon: {
        width: '50px',
        height: '50px'
    },
    iconDesc: {
        fontSize: 'clamp(1em, 1.3em, 1.3em)',
        fontWeight: '600',
        color: '#37474F',
        lineHeight: '1.2em',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            color: '#f99e4c'
        }
    }
}))

export default function Exp() {
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div id="exp" >
            <CssBaseline />
            <Container style={{ padding: 'clamp(0%, 10%, 10%)' }}>
                <div className={classes.title} data-aos={"fade"} data-aos-duration={"500"}>Some Things I've Built.</div>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: '10%' }}
                >
                    <Grid item xs={6} md={3} lg={3}>
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <Button className={classes.btn} disableRipple>
                                <CardContent style={{ '&:hover': { backgroundColor: 'transparent' } }}>
                                    <img src='xp/atom.svg' className={classes.icon} data-aos={"fade-up"} data-aos-duration={"800"} />
                                    <p className={classes.iconDesc} >
                                        Using<br />React.js
                                    </p>
                                </CardContent>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <Button className={classes.btn} disableRipple>
                                <CardContent>
                                    <img src='xp/java.svg' className={classes.icon} data-aos={"fade-up"} data-aos-duration={"1100"} />
                                    <p className={classes.iconDesc} >
                                        Using<br />Java
                                    </p>
                                </CardContent>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <Button className={classes.btn} disableRipple>
                                <CardContent >
                                    <img src='xp/php.svg' className={classes.icon} data-aos={"fade-up"} data-aos-duration={"1400"} />
                                    <p className={classes.iconDesc} >
                                        Using<br />PHP
                                    </p>
                                </CardContent>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <Button className={classes.btn} disableRipple>
                                <CardContent >
                                    <img src='xp/android.svg' className={classes.icon} data-aos={"fade-up"} data-aos-duration={"1700"} />
                                    <p className={classes.iconDesc} >
                                        Android<br />Apps
                                    </p>
                                </CardContent>
                            </Button>
                        </Card>
                    </Grid>




                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent', textAlign: 'left' }}>
                            <CardContent style={{ backgroundColor: 'transparent' }} data-aos={"fade"} data-aos-duration={"500"}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Lorem Ipsum
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quasi eligendi reprehenderit illo suscipit sed recusandae dolorem, quaerat at nemo modi! Corrupti, nostrum quis quas suscipit qui amet voluptatem.
                                </p>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent style={{ backgroundColor: 'transparent', textAlign: 'left' }} data-aos={"fade"} data-aos-duration={"500"}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Lorem Ipsum
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quasi eligendi reprehenderit illo suscipit sed recusandae dolorem, quaerat at nemo modi! Corrupti, nostrum quis quas suscipit qui amet voluptatem.
                                </p>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={12} lg={12} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent style={{ backgroundColor: 'transparent', textAlign: 'left' }} data-aos={"fade"} data-aos-duration={"500"}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Lorem Ipsum
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quasi eligendi reprehenderit illo suscipit sed recusandae dolorem, quaerat at nemo modi! Corrupti, nostrum quis quas suscipit qui amet voluptatem.
                                </p>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>


                {/* <div className={classes.sidebarBox}>
                <p>malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <p className={classes.readMore}><a href="#" class="button">Read More</a></p>
            </div> */}
            </Container>
        </div>

    )
}
