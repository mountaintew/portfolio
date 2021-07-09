
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardActionArea, CardMedia, Collapse, Fade, Card, Grid, Button, CardContent, CardActions, Container, Typography, CssBaseline } from '@material-ui/core'
import AOS from 'aos';
import "aos/dist/aos.css";
import ShsGallery from './ShsGallery'
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    cardRoot: {
        textAlign: 'left',
        fontWeight: 'lighter',
        color: '#37474F',
        fontSize: 'clamp(0.9em, 1.3em, 1.3em)',
        border: 0,
        backgroundColor: 'transparent'
    },
    cardRootTitle: {
        textAlign: 'left',
        fontWeight: '600',
        color: '#37474F',
        fontSize: 'clamp(1.3em, 1.5em, 1.5em)',
        border: 0,
        backgroundColor: 'transparent'
    },
    cardTitle: {
        fontSize: 'clamp(1em, 2em, 2em)',
        fontWeight: 'bold',
        color: '#37474F'
    },
    title: {
        fontSize: 'clamp(1em, 2em, 2em)',
        fontWeight: 'bold',
        color: '#37474F',
        textAlign: 'left',
    },
    avatar: {
        width: '250px',
        height: '250px',
        borderRadius: '360px',
        backgroundImage: "url('profile-alt.webp')",
        backgroundSize: 'cover',
        transition: 'background-image 0.2s ease-in-out',
        '&:hover': {
            backgroundImage: "url('profile.webp')",
        }
    },
    about: {
        maxHeight: '17vh',
        backgroundImage: 'linear-gradient(to bottom, transparent, #37474F)'
    },
    media: {
        height: 140,
    },
    '*':{
        transition: 'all 0.5s linear',
    }

}))

export default function About() {
    const [seeMore, setSeeMore] = useState(false)
    const [seeMore1, setSeeMore1] = useState(false)
    const [ShsGal, viewShsGal] = useState(false)
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);

    const handleView = () => {
        if (seeMore1 && seeMore) {
            setSeeMore(false)
            setSeeMore1(false)
        }
        if (seeMore && !seeMore1) {
            setSeeMore(false)
        }
        if (!seeMore && !seeMore1) {
            setSeeMore(true)
        }
    }
    return (
        <div style={{ marginBottom: '15%' }} id="about">

            <CssBaseline />
            <Container>
                <Grid

                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    style={{ marginTop: '40px', textAlign: 'left' }}

                >

                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    About Me
                                </Typography>

                                <CardMedia
                                    data-aos={"fade"} data-aos-duration={"400"}
                                    className={classes.media}
                                    image={'profile-alt.webp'}
                                />
                                <p data-aos={"fade"} data-aos-duration={"1000"} style={{ textAlign: 'left', }}>
                                    Hello, I'm <span style={{ color: '#f99e4c' }}>Lester</span>, an aspiring front-end developer based in Pasig, who wants to work with other people who can value my skills and creativity in terms of developing great websites.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} >
                        <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                            <CardContent className={seeMore ? '' : classes.about}>
                                <Typography
                                    data-aos={"fade"} data-aos-duration={"1000"}
                                    className={classes.cardTitle}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Dev in 7?
                                </Typography>
                                <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                    I was first introduced to <b>HTML and CSS</b> by our instructor in Grade 7. It was a boring subject that time, typing codes I can't even read, and my wpm sucks &#128034; (a bit better in the present). Web Development is a minor subject that time and I didn't even know that this is what I'm going to pursue in my career.
                                </p>
                                <p data-aos={"slide-up"} data-aos-duration={"900"}>
                                    ++ way back then, using HTML tables for the layout of a website was a life hack!
                                </p>
                                <p data-aos={"slide-up"} data-aos-duration={"1000"}>
                                    Moving on my highschool experience, I established my design preferences by doing <b>Flash animations</b> and poster making in <b>Photoshop</b> which is part of our computer subject that time.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} >
                        <Collapse in={seeMore} collapsedSize={1}>
                            <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                                <CardContent >
                                    <Typography
                                        data-aos={"fade"} data-aos-duration={"1000"}
                                        className={classes.cardTitle}
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        Senior High
                                    </Typography>
                                    <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                        After graduating from high school, I enrolled under the Technical Vocational Track in Information Communication Technology strand in AMA East Rizal. Which sparks my <b>love in coding</b> (as if I'm not struggling with Java syntax &#128579;). Thanks to that programming professor who immediately gives use mediocore tasks even though some of us are beginners.
                                    </p>
                                    <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                        Moreover into coding, during Grade 12, I was able to learn <b>Native Android</b>, we were given application projects to be passed in a short period of time. That kind of projects enabled me to quickly understand the <b>algorithm</b> on how to perform basic tasks in android development.
                                    </p>
                                    <p data-aos={"slide-up"} data-aos-duration={"900"}>
                                        Thanks to these wonderful peeps who came along with me during project deadlines, case studies, and more.&#129305; <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => viewShsGal(ShsGal ? false : true)}>{ShsGal ? 'Dismiss' : 'View'} Gallery.</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </Collapse>
                        {seeMore ?
                            <Fade in={seeMore}>
                                <Grid item xs={12} >
                                    <Card style={{ backgroundColor: 'transparent', border: 0 }} variant="outlined"  >
                                        <CardContent >
                                            <Collapse in={ShsGal} collapsedSize={0}>
                                                <ShsGallery />
                                            </Collapse>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Fade> : ''
                        }

                        <Collapse in={seeMore1} collapsedSize={0}>
                            <Card className={classes.cardRoot} variant="outlined" style={{ backgroundColor: 'transparent' }}>
                                <CardContent >
                                    <Typography
                                        data-aos={"fade"} data-aos-duration={"1000"}
                                        className={classes.cardTitle}
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                    <p data-aos={"slide-up"} data-aos-duration={"800"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis veritatis quisquam dolorum! Recusandae assumenda quia doloribus omnis obcaecati? Veritatis libero dolorem quae. Quas assumenda tenetur consequatur, esse vel repellendus.
                                    </p>
                                </CardContent>
                            </Card>
                        </Collapse>

                        <Grid container >
                            <Grid item xs={seeMore && !seeMore1 ? 6 : 12}>
                                <Button
                                    disableRipple
                                    fullWidth
                                    onClick={() => handleView()}
                                    disableElevation
                                    variant="contained"
                                    style={{ marginTop: '10px', textDecoration: 'None', fontSize: 'clamp(1em, 1.5em, 1.5em)' }}
                                >
                                    See {seeMore ? 'Less' : 'More'}
                                </Button>
                            </Grid>
                            {!seeMore1 &&
                                <Fade in={seeMore}>
                                    <Grid item xs={6}>
                                        <Button
                                            disableRipple
                                            fullWidth
                                            onClick={() => setSeeMore1(seeMore1 ? false : true)}
                                            disableElevation
                                            variant="contained"
                                            style={{ marginTop: '10px', textDecoration: 'None', fontSize: 'clamp(1em, 1.5em, 1.5em)' }}
                                        >
                                            See {seeMore1 ? 'Less' : 'More'}
                                        </Button>
                                    </Grid>
                                </Fade>
                            }
                        </Grid>

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
