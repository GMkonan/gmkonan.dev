import React from 'react';
import {Box, Typography, makeStyles, IconButton, } from '@material-ui/core';
import twitter from './../images/icons/twitter.png';
import email from './../images/icons/email.png';
import reddit from './../images/icons/reddit.png';
import github from './../images/icons/github.png';
import linkedin from './../images/icons/linkedin.png';

const Contact = () => {

    const useStyles = makeStyles({
        background: {
            width:"100%",
            height: "25vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundSize: "cover",
            flexDirection: "column",
            backgroundPosition: "center top"
        },
        sayHi: {
            fontFamily:"Courier New",
            letterSpacing: "3px",
            paddingBottom: "0.8rem"
        }
    });

    const classes = useStyles();
    
    return (
        <Box width={1} color="white" className={classes.background} id="contact" bgcolor="#2f3133">
            <Typography variant="h5" className={classes.sayHi}> <b>Social Medias</b> </Typography>
                <Box>
                    <IconButton onClick={() => window.open('https://github.com/GMkonan')}>
                        <img src={github} height="40px" />
                    </IconButton>

                    <IconButton onClick={() => window.open('mailto:guilhemont@hotmail.com')}>
                        <img src={email} height="40px" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://www.reddit.com/user/KonanGM')}>
                        <img src={reddit} height="40px" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://twitter.com/GuilhermeKonan')}>
                        <img src={twitter} height="40px" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/gmkonan/')}>
                        <img src={linkedin} height="40px" />
                    </IconButton>
                </Box>
        </Box>
    )
}

export default Contact