import React from 'react';
import {Box, Typography, makeStyles, Grid  } from '@material-ui/core';
import Projeto from './../components/project';
import imageProjeto1 from "./../images/website.png";

// Change title font and text in card font aswell as fontsize
//port to mobile
// maybe change cards size

const Projetos = () => {
    const useStyles = makeStyles({
        background: {
            width:"100%",
            height: "99.4vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundSize: "cover",
        },
        title: {
            position: "relative",
            color: "white",
            fontSize: "3rem",
            bottom: "18rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justifyContent: "center"
            
        },
        grid: {
            display:"flex",
            justify:"center",
            justifyContent:"center"
        }
    })
    const classes = useStyles();

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} style={{ fontFamily:"Courier New" }} variant="h3">PROJECTS</Typography>
            
        </Box>
    )
}

export default Projetos;