import React from 'react';
import {Box, Typography, makeStyles, Container} from '@material-ui/core';
import image from './../images/prog10.jpg';
import withWidth from '@material-ui/core/withWidth';

const FrontPage = (props) => {
    const useStyles = makeStyles((theme) => ({
        background: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "99.4vh",
            backgroundAttachment: "fixed",
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
        
        <Box className={classes.background}>
        <Typography className={classes.presentation} align="center" variant="h3">Hello, My name is</Typography>
        <Typography className={classes.title} align="center" variant="h2">Guilherme Monteiro.</Typography>
        <Typography className={classes.text} align="center" variant="h6">Self-Learning Software Developer</Typography>
        </Box>
        
    )
}

export default withWidth() (FrontPage);