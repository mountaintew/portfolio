
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, CssBaseline } from '@material-ui/core'
import AOS from 'aos';
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 'clamp(1em, 3em, 3em)',
        fontWeight: 'bold'
    }

}))

export default function About() {
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div>

            <CssBaseline />
            <Container>
                <div className={classes.title} data-aos={"fade-up"} data-aos-duration={"1000"}>About Me</div>
            </Container>
        </div>

    )
}
