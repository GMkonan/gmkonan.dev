import React from 'react';
import {Box, Typography, makeStyles, Grid  } from '@material-ui/core';
import Projeto from './../components/project';
import websiteImage from "./../images/website.png";

// Change title font and text in card font aswell as fontsize
//port to mobile
// maybe change cards size

const Projetos = () => {
    const useStyles = makeStyles(theme => ({
        background: {
            width:"100%",
            height: "1000px",
            justifyContent: "center",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down('sm')] : {
                height: "auto",
            }
        },
        title: {
            position: "relative",
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justifyContent: "center",
            paddingBottom:"10rem",
            [theme.breakpoints.down('md')] : {
                paddingTop:"5rem"
            },
            [theme.breakpoints.down('sm')] : {
                paddingBottom:"4rem"
            }
            
        },
        projects: {
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            justify:"center",
            [theme.breakpoints.down('sm')] : {
                flexDirection:"column",
                paddingTop:"3rem",
                paddingBottom:"5rem"
            }
        }
    }))
    const classes = useStyles();

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} style={{ fontFamily:"Courier New" }} variant="h3">PROJECTS</Typography>
            <Grid container className={classes.projects} spacing={3}>
                <Grid item >
                    <Projeto 
                            title="Portfolio Website"
                            image={websiteImage}
                            titleCard="Portfolio Website"
                            text="A website I made as my portfolio with React, NextJS and Material UI"
                            url="https://github.com/GMkonan/portfolio"
                            />
                </Grid>                      
            </Grid>
        </Box>
    )
}

export default Projetos;