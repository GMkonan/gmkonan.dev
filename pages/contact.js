import React from 'react';
import {Box, Typography, makeStyles, IconButton} from '@material-ui/core';
import {DiGithubBadge} from 'react-icons/di';
const Contact = () => {

    const useStyles = makeStyles({
        background: {
            width:"auto",
            height: "30vh",
            marginLeft: -8,
            marginRight: -8,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundSize: "cover",
            flexDirection: "column"
        }
    });

    const classes = useStyles();
    //change typography font
    return (
        <Box color="white" className={classes.background} id="contact" bgcolor="#434745">
            <Typography variant="h3" >Contact me</Typography>
            <IconButton onClick={() => window.open('https://github.com/GMkonan')}>
                <DiGithubBadge color="black" size="5rem" />
            </IconButton>
        </Box>
    )
}

export default Contact