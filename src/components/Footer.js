
import { Container, Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
       
        [theme.breakpoints.down('sm')]: {
            lineHeight: '0.9em', 
            fontWeight: '600', 
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
            lineHeight: '0.9em', 
            fontWeight: '600', 
            textAlign: 'right'
        },
        [theme.breakpoints.up('lg')]: {
            lineHeight: '0.9em', 
            fontWeight: '600', 
            textAlign: 'right'
        },
    },
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <Container style={{ paddingLeft: 'clamp(0%, 25%, 11%)', paddingRight: 'clamp(0%, 11%, 11%)' }}>

                <p item xs={12} className={classes.footer}>

                    Built by Lester Antonio<br />2021

                </p>

            </Container>

        </div>
    )
}