
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Button, CardContent, CardActions, Container, Typography, CssBaseline } from '@material-ui/core'
import AOS from 'aos';
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
    cardRoot: {
        textAlign: 'left',
        fontWeight: 'lighter',
        color: '#37474F',
        fontSize: 'clamp(0.9em, 1.3em, 1.3em)',
        border: 0
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
    about: {
        maxHeight: '30vh',
        backgroundImage: 'linear-gradient(to bottom, transparent, #e3e3e3)'
    }

}))

export default function About() {
    const [seeMore, setSeeMore] = useState(false)
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div>

            <CssBaseline />
            <Container>
                <div className={classes.title} data-aos={"fade"} data-aos-duration={"500"}>About Me</div>

                <Grid

                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    style={{ marginTop: '40px' }}
                >
                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent style={{ backgroundColor: 'transparent' }}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Dev in 7?
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    I was first introduced to HTML and CSS by our instructor in Grade 7. It was a boring subject that time, typing codes I can't even read, and my wpm sucks (a bit better in the present). Web Development is a minor subject that time and I didn't even know that this is what I'm going to pursue in my career.
                                </p>
                                <p data-aos={"slide-up"} data-aos-duration={"900"}>
                                    ++ way back then, using HTML tables for the layout of a website was a life hack!
                                </p>
                                <p data-aos={"slide-up"} data-aos-duration={"1000"}>
                                    Moving on my highschool experience, I established my design preferences by doing flash animations and Poster making in Photoshop which is part of our computer subject that time.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent style={{ backgroundColor: 'transparent' }} className={seeMore ? '' : classes.about}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Senior High
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    After graduating from high school, I enrolled under the Technical Vocational Track in Information Communication Technology strand. Which enhances my knowledge in terms of coding. Thanks to that computer professor who immediately gives use mediocore tasks even though some of us are beginners. That was the time I met Java.
                                </p>
                                <p data-aos={"slide-up"} data-aos-duration={"900"}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </CardContent>
                        </Card>
                        <Button
                            onClick={() => setSeeMore(seeMore ? false : true)}
                            disableElevation
                            variant="contained"
                            style={{ borderRadius: '50px', textDecoration: 'None' }}
                        >
                            See {seeMore ? 'Less' : 'More'}
                        </Button>
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
