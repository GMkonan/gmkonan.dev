import React from 'react';
import {Box, Typography, makeStyles, Avatar} from '@material-ui/core';
import image from './../images/prog7.jpg';


const FrontPage = () => {
    const useStyles = makeStyles((theme) => ({
        background: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "99.4vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            backgroundPosition: "center top",
            
        },
        title:{
            bottom: "15.5rem",
            position: "relative",
            fontSize: "3.1rem",
            fontFamily: "bold",
            fontWeight: "bold"
        },
        presentation: {
            bottom: "16rem",
            position: "relative",
            fontSize: "2.7rem",
        },
        aka: {
            //backgroundColor:"#f7eec8",
            bottom: "15.5rem",
            //right: "50rem",
            position: "relative",
            fontSize: "2.7rem",
        },
        subTitle: {
            bottom: "7.5rem",
            right: "40rem",
            position: "relative",
            fontSize: "2.1rem",
            //fontFamily: "bold",
            //fontWeight: "bold"
        },
        text: {
            bottom: "5rem",
            right: "50rem",
            position: "relative",
            fontSize: "3.1rem",
        }
    }));

    const classes = useStyles();
    return (
        <div>
        <Box className={classes.background}>
        <Typography className={classes.presentation} align="center">Hello, My name is</Typography>
        <Typography className={classes.title} align="center">Guilherme Monteiro</Typography>
        <Typography className={classes.subTitle}>Self-Learning Software Developer</Typography>
        </Box>
        </div>
    );
}

export default FrontPage;