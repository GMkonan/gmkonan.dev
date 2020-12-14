import React from 'react';
import {Box, Typography, makeStyles, IconButton} from '@material-ui/core';
import {IoIosMail} from 'react-icons/io';
import {SiReddit, SiTwitter, SiLinkedin, SiDevDotTo, SiGithub} from 'react-icons/si';

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
        }
    });

    const classes = useStyles();
    
    return (
        <Box width={1} color="white" className={classes.background} id="contact" bgcolor="#434745">
            <Typography variant="h4" style={{ fontFamily:"Fantasy", letterSpacing:"3px" }}>CONTACT ME</Typography>
                <Box>
                    <IconButton onClick={() => window.open('https://github.com/GMkonan')}>
                        <SiGithub color="black" size="2.5rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('mailto:guilhemont@hotmail.com')}>
                        <IoIosMail color="black" size="3rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://www.reddit.com/user/KonanGM')}>
                        <SiReddit color="black" size="2.5rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://twitter.com/GuilhermeKonan')}>
                        <SiTwitter color="black" size="2.5rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/gmkonan/')}>
                        <SiLinkedin color="black" size="2.5rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('https://dev.to/gmkonan')}>
                        <SiDevDotTo color="black" size="2.5rem" />
                    </IconButton>
                </Box>
        </Box>
    )
}

export default Contact