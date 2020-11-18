import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import image from './../images/prog10.jpg';

const FrontPage = () => {
    const useStyles = makeStyles((theme) => ({
        background: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            height: "99.4vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50%",     
        },
        title:{
            bottom: "2rem",
            position: "relative",
            fontSize: "4.5rem",
            fontFamily: "Pixer",
            fontWeight: "bold",
            color:"white"
        },
        presentation: {
            bottom: "2rem",
            position: "relative",
            fontSize: "3.7rem",
            color:"white",
            fontFamily: "Mont",
            
        },
        text: {
            bottom: "2.5rem",
            position: "relative",
            fontSize: "1.5rem",
            color:"white"
        },
    }));

    const classes = useStyles();
    return (
        <Box m={0} className={classes.background}>
        <Typography className={classes.presentation} align="center" variant="h3">Hello, My name is</Typography>
        <Typography className={classes.title} align="center" variant="h2">Guilherme Monteiro.</Typography>
        <Typography className={classes.text} align="center" variant="h6">Self-Learning Software Developer</Typography>
        </Box>
    )
}

export default FrontPage;