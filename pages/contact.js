import React from 'react';
import {Box, Typography, makeStyles, IconButton, Grid} from '@material-ui/core';
import {DiGithubBadge} from 'react-icons/di';
import {IoIosMail} from 'react-icons/io';

const Contact = () => {

    const useStyles = makeStyles({
        background: {
            width:"auto",
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
    //change typography font
    return (
        <Box width={1} color="white" className={classes.background} id="contact" bgcolor="#434745">
            <Typography variant="h4" style={{ fontFamily:"Fantasy", letterSpacing:"3px" }}>CONTACT ME</Typography>
                <Box>
                    <IconButton onClick={() => window.open('https://github.com/GMkonan')}>
                        <DiGithubBadge color="black" size="4rem" />
                    </IconButton>

                    <IconButton onClick={() => window.open('mailto:guilhemont@hotmail.com')}>
                        <IoIosMail color="black" size="4rem" />
                    </IconButton>
                </Box>
        </Box>
    )
}

export default Contact